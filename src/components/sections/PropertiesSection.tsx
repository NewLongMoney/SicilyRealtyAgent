'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { PropertyCard } from '@/components/ui/PropertyCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AreaMap } from '@/components/map/AreaMap'
import { cn } from '@/lib/utils'
import type { Property, PropertyArea } from '@/lib/data'
import {
  PRICE_BANDS,
  matchesBedsLoose,
  matchesPriceBand,
  matchesStatus,
  sortProperties,
  type BedsFilter,
  type PriceBand,
  type SortKey,
  type StatusFilter,
} from '@/lib/filters'
import { LayoutGrid, Map as MapIcon } from 'lucide-react'

const AREA_FILTERS: { value: 'all' | PropertyArea; label: string }[] = [
  { value: 'all', label: 'All Areas' },
  { value: 'kilimani', label: 'Kilimani' },
  { value: 'westlands', label: 'Westlands' },
  { value: 'riverside', label: 'Riverside' },
  { value: 'lavington', label: 'Lavington' },
  { value: 'kileleshwa', label: 'Kileleshwa' },
]

const COLLECTION_FILTERS = [
  { value: 'all', label: 'All Listings' },
  { value: 'signature', label: 'Signature' },
  { value: 'select', label: 'Select' },
  { value: 'investment', label: 'Investment Entry' },
  { value: 'featured', label: 'Featured' },
] as const

const BED_FILTERS: { value: BedsFilter; label: string }[] = [
  { value: 'all', label: 'Any beds' },
  { value: '1', label: '1 BR' },
  { value: '2', label: '2 BR' },
  { value: '3', label: '3 BR' },
  { value: '4', label: '4+ BR' },
]

const STATUS_FILTERS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'Any status' },
  { value: 'offplan', label: 'Off-plan' },
  { value: 'ready', label: 'Ready' },
  { value: 'featured', label: 'Featured' },
]

interface Props {
  properties: Property[]
  initialArea?: string
  initialType?: string
  initialCategory?: string
  initialListing?: string
  initialBeds?: string
  initialPrice?: string
  initialStatus?: string
  initialSort?: string
  highlightedProperty?: string
  /** Homepage: keep section heading. Properties page supplies its own page H1. */
  compactHeading?: boolean
  showMap?: boolean
}

function normalizeArea(value?: string): 'all' | PropertyArea {
  const normalized = value?.toLowerCase() as PropertyArea
  return AREA_FILTERS.some(f => f.value === normalized) ? normalized : 'all'
}

function normalizeCollection(value?: string): string {
  const normalized = value?.toLowerCase()
  return COLLECTION_FILTERS.some(f => f.value === normalized) ? normalized! : 'all'
}

function normalizeBeds(value?: string): BedsFilter {
  if (value === '1' || value === '2' || value === '3' || value === '4') return value
  return 'all'
}

function normalizePrice(value?: string): PriceBand {
  return PRICE_BANDS.some(b => b.value === value) ? (value as PriceBand) : 'all'
}

function normalizeStatus(value?: string): StatusFilter {
  if (value === 'offplan' || value === 'ready' || value === 'featured') return value
  return 'all'
}

function normalizeSort(value?: string): SortKey {
  if (value === 'price-asc' || value === 'price-desc' || value === 'name' || value === 'featured') return value
  return 'featured'
}

export function PropertiesSection({
  properties,
  initialArea,
  initialCategory,
  initialBeds,
  initialPrice,
  initialStatus,
  initialSort,
  highlightedProperty,
  compactHeading = false,
  showMap = true,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const area = normalizeArea(initialArea)
  const collection = normalizeCollection(initialCategory)
  const beds = normalizeBeds(initialBeds)
  const price = normalizePrice(initialPrice)
  const status = normalizeStatus(initialStatus)
  const sort = normalizeSort(initialSort)
  const [view, setView] = useState<'grid' | 'map'>('grid')

  const focusedProperty = useMemo(() => {
    if (!highlightedProperty) return null
    return properties.find(p => p.id === highlightedProperty) ?? null
  }, [highlightedProperty, properties])

  const filtered = useMemo(() => {
    if (focusedProperty) return [focusedProperty]

    const list = properties.filter(property => {
      const matchesArea = area === 'all' || property.area === area
      const matchesCollection =
        collection === 'all' ||
        (collection === 'featured' ? property.featured : property.category === collection)
      return (
        matchesArea &&
        matchesCollection &&
        matchesBedsLoose(property, beds) &&
        matchesPriceBand(property, price) &&
        matchesStatus(property, status)
      )
    })
    return sortProperties(list, sort)
  }, [area, collection, beds, price, status, sort, focusedProperty, properties])

  function updateFilters(updates: Record<string, string | undefined>) {
    const params = new URLSearchParams()
    const next = {
      area: updates.area !== undefined ? normalizeArea(updates.area) : area,
      category: updates.category !== undefined ? normalizeCollection(updates.category) : collection,
      beds: updates.beds !== undefined ? normalizeBeds(updates.beds) : beds,
      price: updates.price !== undefined ? normalizePrice(updates.price) : price,
      status: updates.status !== undefined ? normalizeStatus(updates.status) : status,
      sort: updates.sort !== undefined ? normalizeSort(updates.sort) : sort,
    }

    if (next.area !== 'all') params.set('area', next.area)
    if (next.category !== 'all') params.set('category', next.category)
    if (next.beds !== 'all') params.set('beds', next.beds)
    if (next.price !== 'all') params.set('price', next.price)
    if (next.status !== 'all') params.set('status', next.status)
    if (next.sort !== 'featured') params.set('sort', next.sort)

    const queryString = params.toString()
    router.replace(queryString ? `${pathname}?${queryString}#properties` : `${pathname}#properties`, {
      scroll: false,
    })
  }

  const hasActiveFilters =
    !focusedProperty &&
    (area !== 'all' || collection !== 'all' || beds !== 'all' || price !== 'all' || status !== 'all' || sort !== 'featured')

  return (
    <section id="properties" className="py-16 md:py-20 bg-paper dark:bg-navy-deep border-t border-navy-deep/8 dark:border-white/8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {compactHeading ? (
          <SectionHeading
            eyebrow="Our Portfolio"
            title={`${properties.length} Verified Residences Across Nairobi`}
            subtitle="Filter by area, budget, bedrooms, or status. Every listing has been personally assessed by Sicily Realty."
          />
        ) : null}

        <div className={cn('space-y-8', compactHeading ? 'mt-12' : 'mt-2')}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-[0.72rem] tracking-[0.14em] uppercase text-navy-deep/50">
              Showing {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <label className="text-[0.62rem] tracking-[0.14em] uppercase text-navy-deep/45 dark:text-white/40 font-semibold">
                Sort
                <select
                  className="ml-2 rounded-full border border-navy-deep/10 dark:border-white/10 bg-paper dark:bg-navy-deep px-3 py-1.5 text-[0.8rem] text-navy-deep tracking-normal normal-case"
                  value={sort}
                  onChange={e => updateFilters({ sort: e.target.value })}
                  disabled={!!focusedProperty}
                >
                  <option value="featured">Featured first</option>
                  <option value="price-asc">Price · low to high</option>
                  <option value="price-desc">Price · high to low</option>
                  <option value="name">Name</option>
                </select>
              </label>
              {showMap && (
                <div className="inline-flex rounded-full border border-navy-deep/10 dark:border-white/10 p-0.5 bg-paper dark:bg-navy-deep">
                  <button
                    type="button"
                    onClick={() => setView('grid')}
                    className={cn(
                      'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.72rem] tracking-[0.08em] uppercase font-semibold transition-colors',
                      view === 'grid' ? 'bg-navy-deep text-white' : 'text-navy-deep/60'
                    )}
                  >
                    <LayoutGrid size={12} /> Grid
                  </button>
                  <button
                    type="button"
                    onClick={() => setView('map')}
                    className={cn(
                      'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.72rem] tracking-[0.08em] uppercase font-semibold transition-colors',
                      view === 'map' ? 'bg-navy-deep text-white' : 'text-navy-deep/60'
                    )}
                  >
                    <MapIcon size={12} /> Map
                  </button>
                </div>
              )}
              {hasActiveFilters && (
                <Link
                  href={`${pathname}#properties`}
                  className="text-[0.72rem] tracking-[0.12em] uppercase text-gold-mid hover:text-gold-bright transition-colors"
                >
                  Clear all
                </Link>
              )}
            </div>
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

          <FilterGroup label="Budget">
            {PRICE_BANDS.map(filter => (
              <FilterPill
                key={filter.value}
                active={!focusedProperty && price === filter.value}
                disabled={!!focusedProperty}
                onClick={() => updateFilters({ price: filter.value })}
              >
                {filter.label}
              </FilterPill>
            ))}
          </FilterGroup>

          <FilterGroup label="Bedrooms">
            {BED_FILTERS.map(filter => (
              <FilterPill
                key={filter.value}
                active={!focusedProperty && beds === filter.value}
                disabled={!!focusedProperty}
                onClick={() => updateFilters({ beds: filter.value })}
              >
                {filter.label}
              </FilterPill>
            ))}
          </FilterGroup>

          <FilterGroup label="Status">
            {STATUS_FILTERS.map(filter => (
              <FilterPill
                key={filter.value}
                active={!focusedProperty && status === filter.value}
                disabled={!!focusedProperty}
                onClick={() => updateFilters({ status: filter.value })}
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

        {showMap && view === 'map' && (
          <div className="mt-10">
            <AreaMap
              properties={focusedProperty ? [focusedProperty] : filtered}
              activeArea={area}
            />
          </div>
        )}

        {(view === 'grid' || !showMap) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {filtered.map(p => (
              <PropertyCard
                key={p.id}
                property={p}
                className={highlightedProperty === p.id ? 'ring-2 ring-gold/40 shadow-[0_24px_60px_rgba(229,169,60,0.12)]' : undefined}
              />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-gray-100 bg-paper-soft dark:bg-navy-glow px-8 py-12 text-center mt-12">
            <p className="font-display text-2xl text-navy-deep mb-2">No properties match this brief yet.</p>
            <p className="text-navy-deep/60 text-sm max-w-[520px] mx-auto mb-6">
              Reset the filters or contact Sicily Realty for private access to upcoming opportunities.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.08em] uppercase text-navy-deep border border-navy-deep/10 dark:border-white/10 px-5 py-3 rounded-full hover:bg-gold-gradient hover:border-transparent transition-all duration-250 font-semibold"
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
      <div className="-mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-2 overflow-x-auto snap-x snap-scroll-x pb-3 scrollbar-hide md:flex-wrap md:overflow-visible md:pb-0">
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
        'snap-card flex-shrink-0 inline-flex items-center px-4 py-2 rounded-full text-sm border transition-all whitespace-nowrap',
        active
          ? 'bg-navy-deep text-white border-navy-deep font-semibold shadow-sm'
          : 'bg-paper dark:bg-navy-deep border-navy-deep/10 dark:border-white/10 text-gray-700 hover:bg-paper-soft dark:bg-navy-glow hover:border-gold/30',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {children}
    </button>
  )
}
