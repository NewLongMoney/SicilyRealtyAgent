export type PropertyArea = 'kilimani' | 'westlands' | 'kileleshwa' | 'lavington' | 'riverside'
export type PropertyCategory = 'signature' | 'select' | 'investment'
export type PropertyType = 'apartment' | 'villa'
export type PropertyListing = 'sale' | 'rent'
export type PropertyStatus = 'offplan' | 'complete' | 'new' | 'bestseller'

export interface PropertyUnit {
  label: string
  size?: string
  price: string
}

export interface Property {
  id: string
  name: string
  area: PropertyArea
  category: PropertyCategory
  type: PropertyType
  listing: PropertyListing
  status: PropertyStatus
  bedrooms: string
  price: string
  priceFrom: number
  description: string
  overview: string
  image: string
  imageFolder: string
  address?: string
  completion?: string
  developer?: string
  paymentPlanAvailable?: boolean
  units?: PropertyUnit[]
  highlights?: string[]
  amenities?: string[]
  investmentPoints?: string[]
  whatsappText: string
  featured?: boolean
}

export function img(folder: string, filename: string): string {
  return `/images/${folder}/${filename}`
}
