'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { PropertyCard } from '@/components/ui/PropertyCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'
import type { Property, PropertyArea, PropertyType } from '@/lib/data'

const AREA_FILTERS: { value: 'all' | PropertyArea; label: string }[] = [
  { value: 'all', label: 'All Areas' },
  { value: 'kilimani', label: 'Kilimani' },
  { value: 'westlands', label: 'Westlands' },
  { value: 'riverside', label: 'Riverside' },
  { value: 'lavington', label: 'Lavington' },
  { value: 'kileleshwa', label: 'Kileleshwa' },
]

const TYPE_FILTERS: { value: 'all' | PropertyType; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'apartment', label: 'Apartments' },
  { value: 'villa', label: 'Villas' },
]

const COLLECTION_FILTERS = [
  { value: 'all', label: 'All Listings' },
  { value: 'signature', label: 'Signature' },
  { value: 'select', label: 'Select' },
  { value: 'investment', label: 'Investment Entry' },
  { value: 'featured', label: 'Featured' },
] as const

interface Props {
  properties: Property[]
  initialArea?: string
  initialType?: string
  initialCategory?: string
  initialListing?: string
  highlightedProperty?: string
}

function normalizeArea(value?: string): 'all' | PropertyArea {
  const normalized = value?.toLowerCase() as PropertyArea
  return AREA_FILTERS.some(f => f.value === normalized) ? normalized : 'all'
}

function normalizeType(value?: string): 'all' | PropertyType {
  const normalized = value?.toLowerCase() as PropertyType
  return TYPE_FILTERS.some(f => f.value === normalized) ? normalized : 'all'
}

function normalizeCollection(value?: string): string {
  const normalized = value?.toLowerCase()
  return COLLECTION_FILTERS.some(f => f.value === normalized) ? normalized! : 'all'
}

export function PropertiesSection({
  properties,
  initialArea,
  initialType,
  initialCategory,
  initialListing,
  highlightedProperty,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const area = normalizeArea(initialArea)
  const type = normalizeType(initialType)
  const collection = normalizeCollection(initialCategory)
  const listing = initialListing?.toLowerCase() === 'rent' ? 'rent' : initialListing?.toLowerCase() === 'sale' ? 'sale' : 'all'

  const focusedProperty = useMemo(() => {
    if (!highlightedProperty) return null
    return properties.find(p => p.id === highlightedProperty) ?? null
  }, [highlightedProperty, properties])

  const filtered = useMemo(() => {
    if (focusedProperty) return [focusedProperty]

    return properties.filter(property => {
      const matchesArea = area === 'all' || property.area === area
      const matchesType = type === 'all' || property.type === type
      const matchesListing = listing === 'all' || property.listing === listing
      const matchesCollection =
        collection === 'all' ||
        (collection === 'featured' ? property.featured : property.category === collection)
      return matchesArea && matchesType && matchesListing && matchesCollection
    })
  }, [area, type, collection, listing, focusedProperty, properties])

  function updateFilters(updates: {
    area?: string
    type?: string
    category?: string
    listing?: string
  }) {
    const params = new URLSearchParams()
    const nextArea = updates.area !== undefined ? normalizeArea(updates.area) : area
    const nextType = updates.type !== undefined ? normalizeType(updates.type) : type
    const nextCollection = updates.category !== undefined ? normalizeCollection(updates.category) : collection
    const nextListing = updates.listing !== undefined
      ? (updates.listing === 'rent' ? 'rent' : updates.listing === 'sale' ? 'sale' : 'all')
      : listing

    if (nextArea !== 'all') params.set('area', nextArea)
    if (nextType !== 'all') params.set('type', nextType)
    if (nextCollection !== 'all') params.set('category', nextCollection)
    if (nextListing !== 'all') params.set('intent', nextListing)

    const queryString = params.toString()
    router.replace(queryString ? `${pathname}?${queryString}#properties` : `${pathname}#properties`, {
      scroll: false,
    })
  }

  const hasActiveFilters = !focusedProperty && (area !== 'all' || type !== 'all' || collection !== 'all' || listing !== 'all')

  return (
    <section id="properties" className="py-[100px] md:py-[120px] bg-white border-t border-section-divider">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title={`${properties.length} Verified Residences Across Nairobi`}
          subtitle="Filter by area, property type, or collection. Every listing has been personally assessed by Sicily Realty."
        />

        <div className="mt-12 space-y-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-[0.72rem] tracking-[0.14em] uppercase text-navy-deep/50">
              Showing {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
            </p>
            {hasActiveFilters && (
              <Link
                href="/properties#properties"
                className="text-[0.72rem] tracking-[0.12em] uppercase text-gold-mid hover:text-gold-bright transition-colors"
              >
                Clear all filters
              </Link>
            )}
          </div>

          <FilterGroup label="Location">
            {AREA_FILTERS.map(filter => (
              <FilterPill
                key={filter.value}
                active={!focusedProperty && area === filter.value}
                disabled={!!focusedProperty}
                onClick={() => updateFilters({ area: filter.value })}
              >
                {filter.label}
              </FilterPill>
            ))}
          </FilterGroup>

          <FilterGroup label="Property Type">
            {TYPE_FILTERS.map(filter => (
              <FilterPill
                key={filter.value}
                active={!focusedProperty && type === filter.value}
                disabled={!!focusedProperty}
                onClick={() => updateFilters({ type: filter.value })}
              >
                {filter.label}
              </FilterPill>
            ))}
          </FilterGroup>

          <FilterGroup label="Collection">
            {COLLECTION_FILTERS.map(filter => (
              <FilterPill
                key={filter.value}
                active={!focusedProperty && collection === filter.value}
                disabled={!!focusedProperty}
                onClick={() => updateFilters({ category: filter.value })}
              >
                {filter.label}
              </FilterPill>
            ))}
          </FilterGroup>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filtered.map(p => (
            <PropertyCard
              key={p.id}
              property={p}
              className={highlightedProperty === p.id ? 'ring-2 ring-gold/40 shadow-[0_24px_60px_rgba(229,169,60,0.12)]' : undefined}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-gray-100 bg-gray-50 px-8 py-12 text-center mt-12">
            <p className="font-display text-2xl text-navy-deep mb-2">No properties match this brief yet.</p>
            <p className="text-navy-deep/60 text-sm max-w-[520px] mx-auto mb-6">
              Reset the filters or contact Sicily Realty for private access to upcoming opportunities.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.08em] uppercase text-navy-deep border border-gray-200 px-5 py-3 rounded-full hover:bg-gold-gradient hover:border-transparent transition-all duration-250 font-semibold"
            >
              Request a tailored shortlist
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[0.62rem] tracking-[0.16em] uppercase text-gold-mid font-semibold mb-3">{label}</p>
      <div className="-mx-6 px-6 md:mx-0 md:px-0">
        <div className="flex gap-2 overflow-x-auto flex-nowrap pb-1 snap-scroll-x scrollbar-hide md:flex-wrap md:overflow-visible">
          {children}
        </div>
      </div>
    </div>
  )
}

function FilterPill({
  active,
  disabled,
  onClick,
  children,
}: {
  active: boolean
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'snap-card flex-shrink-0 text-[0.72rem] tracking-[0.08em] uppercase px-4 py-2.5 rounded-full border transition-all duration-250 whitespace-nowrap',
        active
          ? 'bg-navy-deep text-white border-navy-deep font-semibold shadow-sm'
          : 'bg-white text-navy-deep/70 border-[#e8e4dc] hover:border-navy-deep/30',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {children}
    </button>
  )
}
