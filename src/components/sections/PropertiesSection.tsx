'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { PropertyCard } from '@/components/ui/PropertyCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/data'

const FILTERS = [
  { value: 'all',         label: 'All Listings' },
  { value: 'signature',   label: 'Signature' },
  { value: 'select',      label: 'Select' },
  { value: 'intelligent', label: 'Intelligent' },
]

const AREA_FILTERS = [
  { value: 'all', label: 'All Areas' },
  { value: 'kilimani', label: 'Kilimani' },
  { value: 'westlands', label: 'Westlands' },
  { value: 'kileleshwa', label: 'Kileleshwa' },
  { value: 'lavington', label: 'Lavington' },
  { value: 'riverside', label: 'Riverside' },
]

interface Props {
  properties: Property[]
  initialCategory?: string
  initialArea?: string
  highlightedProperty?: string
}

function normalizeFilter(value?: string): string {
  const normalized = value?.toLowerCase()
  return FILTERS.some(filter => filter.value === normalized) ? normalized ?? 'all' : 'all'
}

function normalizeArea(value?: string): string {
  const normalized = value?.toLowerCase()
  return AREA_FILTERS.some(filter => filter.value === normalized) ? normalized ?? 'all' : 'all'
}

export function PropertiesSection({
  properties,
  initialCategory,
  initialArea,
  highlightedProperty,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const active = normalizeFilter(initialCategory)
  const area = normalizeArea(initialArea)

  const filtered = useMemo(() => {
    return properties.filter(property => {
      const matchesCategory = active === 'all' || property.category === active
      const matchesArea = area === 'all' || property.area === area
      return matchesCategory && matchesArea
    })
  }, [active, area, properties])

  function updateFilters(nextCategory?: string, nextArea?: string) {
    const safeCategory = normalizeFilter(nextCategory)
    const safeArea = normalizeArea(nextArea)
    const params = new URLSearchParams()

    if (safeCategory === 'all') {
      // no-op
    } else {
      params.set('category', safeCategory)
    }

    if (safeArea === 'all') {
      // no-op
    } else {
      params.set('area', safeArea)
    }

    const queryString = params.toString()
    router.replace(queryString ? `${pathname}?${queryString}#properties` : `${pathname}#properties`, {
      scroll: false,
    })
  }

  return (
    <section id="properties" className="py-[120px] bg-navy-deep">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Handpicked Residences Across Nairobi"
          subtitle="Every listing here has been personally assessed. Filter by location or collection and move straight into the residences that match your brief."
        />

        <div className="mt-10 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-[0.72rem] tracking-[0.14em] uppercase text-sicily-body/70">
              {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} available
            </p>
            {(active !== 'all' || area !== 'all') && (
              <Link
                href="/properties#properties"
                className="text-[0.72rem] tracking-[0.12em] uppercase text-gold hover:text-gold-bright transition-colors"
              >
                Clear filters
              </Link>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {AREA_FILTERS.map(filter => (
              <button
                key={filter.value}
                onClick={() => updateFilters(active, filter.value)}
                className={cn(
                  'text-[0.72rem] tracking-[0.09em] uppercase px-4 py-2 rounded-full border transition-all duration-250',
                  area === filter.value
                    ? 'bg-gold-gradient text-navy-deep border-transparent font-bold shadow-[0_4px_16px_rgba(229,169,60,0.2)]'
                    : 'border-gold/15 text-sicily-body hover:border-gold/45 hover:text-gold-bright'
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 mt-10">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => updateFilters(f.value, area)}
              className={cn(
                'text-[0.73rem] tracking-[0.1em] uppercase px-6 py-2.5 rounded-full border transition-all duration-250',
                active === f.value
                  ? 'bg-gold-gradient text-navy-deep border-transparent font-bold shadow-[0_4px_16px_rgba(229,169,60,0.25)]'
                  : 'border-gold/20 text-sicily-body hover:border-gold/50 hover:text-gold-bright'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Single responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <PropertyCard key={p.id} property={p} className={highlightedProperty === p.id ? 'ring-1 ring-gold/50 shadow-[0_24px_60px_rgba(229,169,60,0.16)]' : undefined} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="card-dark rounded-2xl border border-gold/15 px-8 py-10 text-center">
            <p className="font-display text-2xl text-white mb-2">No properties match this brief yet.</p>
            <p className="text-sicily-body/75 text-sm max-w-[520px] mx-auto mb-6">
              Reset the gallery filters or contact Sicily Realty for private access to upcoming opportunities that have not been released publicly.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.08em] uppercase text-gold border border-gold/30 px-5 py-3 rounded-full hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent transition-all duration-250 font-semibold"
            >
              Request a tailored shortlist
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
