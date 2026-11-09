'use client'

import { useEffect, useMemo, useRef } from 'react'
import type { Property, PropertyArea } from '@/lib/data'
import { AREA_LABELS } from '@/lib/data'
import { AREA_COORDS, NAIROBI_CENTER } from '@/lib/areas'
import Link from 'next/link'

type Props = {
  properties: Property[]
  activeArea?: PropertyArea | 'all'
}

/** Leaflet + OSM tiles — no API key. Pins are area centroids (honest area-level grouping). */
export function AreaMap({ properties, activeArea = 'all' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<import('leaflet').Map | null>(null)

  const areaGroups = useMemo(() => {
    const counts = new Map<PropertyArea, Property[]>()
    for (const p of properties) {
      const list = counts.get(p.area) ?? []
      list.push(p)
      counts.set(p.area, list)
    }
    return [...counts.entries()].map(([area, items]) => ({
      area,
      items,
      ...AREA_COORDS[area],
    }))
  }, [properties])

  useEffect(() => {
    let cancelled = false
    async function boot() {
      if (!containerRef.current || mapRef.current) return
      const L = await import('leaflet')
      await import('leaflet/dist/leaflet.css')
      if (cancelled || !containerRef.current) return

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        attributionControl: true,
      }).setView([NAIROBI_CENTER.lat, NAIROBI_CENTER.lng], NAIROBI_CENTER.zoom)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      const goldIcon = L.divIcon({
        className: '',
        html: `<div style="width:14px;height:14px;border-radius:999px;background:linear-gradient(135deg,#F6C667,#C8841F);border:2px solid #071C2F;box-shadow:0 2px 8px rgba(7,28,47,.35)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })

      for (const group of areaGroups) {
        const names = group.items.slice(0, 4).map(p => p.name).join('<br/>')
        const more = group.items.length > 4 ? `<br/><em>+${group.items.length - 4} more</em>` : ''
        L.marker([group.lat, group.lng], { icon: goldIcon })
          .addTo(map)
          .bindPopup(
            `<strong>${AREA_LABELS[group.area]}</strong><br/>${group.items.length} listing${group.items.length === 1 ? '' : 's'}<br/><span style="font-size:12px;opacity:.85">${names}${more}</span><br/><a href="/properties?area=${group.area}#properties">View area →</a>`
          )
      }

      if (activeArea !== 'all' && AREA_COORDS[activeArea]) {
        const c = AREA_COORDS[activeArea]
        map.setView([c.lat, c.lng], c.zoom)
      } else if (areaGroups.length) {
        const bounds = L.latLngBounds(areaGroups.map(g => [g.lat, g.lng] as [number, number]))
        map.fitBounds(bounds.pad(0.35))
      }

      mapRef.current = map
    }
    boot()
    return () => {
      cancelled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [areaGroups, activeArea])

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-[0_12px_40px_rgba(7,28,47,0.08)]">
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-navy-deep text-white">
        <p className="text-[0.68rem] tracking-[0.14em] uppercase text-gold font-semibold">
          Nairobi corridors · area map
        </p>
        <p className="text-[0.7rem] text-white/55 hidden sm:block">
          Pins mark neighbourhood centres, not exact building coordinates
        </p>
      </div>
      <div ref={containerRef} className="h-[320px] md:h-[380px] w-full bg-[#e8eef3]" />
      <div className="flex flex-wrap gap-2 px-4 py-3 bg-paper dark:bg-navy-deep border-t border-gray-100">
        {areaGroups.map(g => (
          <Link
            key={g.area}
            href={`/properties?area=${g.area}#properties`}
            className="text-[0.72rem] tracking-[0.06em] uppercase px-3 py-1.5 rounded-full border border-navy-deep/10 dark:border-white/10 text-navy-deep/70 hover:border-gold/40 hover:text-gold-mid transition-colors"
          >
            {AREA_LABELS[g.area]} · {g.items.length}
          </Link>
        ))}
      </div>
    </div>
  )
}
