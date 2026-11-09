import type { PropertyArea } from './property-types'

/** Public neighborhood centroids (OpenStreetMap / commonly published area centres). Used for area-level map grouping — not exact building pins. */
export const AREA_COORDS: Record<PropertyArea, { lat: number; lng: number; zoom: number }> = {
  kilimani: { lat: -1.2885, lng: 36.7872, zoom: 14 },
  westlands: { lat: -1.2670, lng: 36.8105, zoom: 14 },
  kileleshwa: { lat: -1.2805, lng: 36.7820, zoom: 14 },
  lavington: { lat: -1.2778, lng: 36.7686, zoom: 14 },
  riverside: { lat: -1.2588, lng: 36.8048, zoom: 14 },
}

export const NAIROBI_CENTER = { lat: -1.275, lng: 36.80, zoom: 12 }

/** OpenStreetMap embed (no API key) centred on an area. */
export function osmEmbedUrl(area: PropertyArea, heightHint = 280): string {
  const { lat, lng } = AREA_COORDS[area]
  const d = 0.025
  const bbox = `${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`
}
