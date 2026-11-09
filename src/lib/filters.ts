import type { Property } from './property-types'

export function bedsMin(property: Property): number {
  const match = property.bedrooms.match(/(\d+)/)
  return match ? Number(match[1]) : 0
}

export type PriceBand = 'all' | 'under8' | '8to12' | '12to20' | '20plus'
export type BedsFilter = 'all' | '1' | '2' | '3' | '4'
export type StatusFilter = 'all' | 'offplan' | 'ready' | 'featured'
export type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'name'

export const PRICE_BANDS: { value: PriceBand; label: string; test: (n: number) => boolean }[] = [
  { value: 'all', label: 'Any budget', test: () => true },
  { value: 'under8', label: 'Under KES 8M', test: n => n < 8_000_000 },
  { value: '8to12', label: 'KES 8–12M', test: n => n >= 8_000_000 && n < 12_000_000 },
  { value: '12to20', label: 'KES 12–20M', test: n => n >= 12_000_000 && n < 20_000_000 },
  { value: '20plus', label: 'KES 20M+', test: n => n >= 20_000_000 },
]

export function matchesBeds(property: Property, beds: BedsFilter): boolean {
  if (beds === 'all') return true
  const min = bedsMin(property)
  const need = Number(beds)
  // "2+" style: listing must include at least this bedroom count in its range
  return min <= need && (property.bedrooms.includes(String(need)) || min >= need || /[–-]/.test(property.bedrooms) && min <= need)
}

/** Inclusive: property bedroom range can accommodate the selected count. */
export function matchesBedsLoose(property: Property, beds: BedsFilter): boolean {
  if (beds === 'all') return true
  const need = Number(beds)
  const nums = [...property.bedrooms.matchAll(/(\d+)/g)].map(m => Number(m[1]))
  if (!nums.length) return true
  const lo = Math.min(...nums)
  const hi = Math.max(...nums)
  if (need >= 4) return hi >= 4
  return need >= lo && need <= hi
}

export function matchesStatus(property: Property, status: StatusFilter): boolean {
  if (status === 'all') return true
  if (status === 'offplan') return property.status === 'offplan' || property.status === 'new'
  if (status === 'ready') return property.status === 'complete'
  if (status === 'featured') return !!property.featured || property.status === 'bestseller'
  return true
}

export function matchesPriceBand(property: Property, band: PriceBand): boolean {
  const rule = PRICE_BANDS.find(b => b.value === band) ?? PRICE_BANDS[0]
  return rule.test(property.priceFrom)
}

export function sortProperties(list: Property[], sort: SortKey): Property[] {
  const copy = [...list]
  switch (sort) {
    case 'price-asc':
      return copy.sort((a, b) => a.priceFrom - b.priceFrom)
    case 'price-desc':
      return copy.sort((a, b) => b.priceFrom - a.priceFrom)
    case 'name':
      return copy.sort((a, b) => a.name.localeCompare(b.name))
    case 'featured':
    default:
      return copy.sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || a.priceFrom - b.priceFrom)
  }
}
