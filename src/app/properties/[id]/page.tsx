import path from 'node:path'
import { promises as fs } from 'node:fs'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PropertyDetail } from '@/components/property/PropertyDetail'
import { PROPERTIES, getPropertyById } from '@/lib/data'

type Props = {
  params: Promise<{ id: string }>
}

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

import { publicImageUrl } from '@/lib/images'

async function getGalleryImages(imageFolder: string): Promise<string[]> {
  const folderPath = path.join(process.cwd(), 'public', 'images', imageFolder)

  try {
    const entries = await fs.readdir(folderPath, { withFileTypes: true })
    const files = entries
      .filter(entry => entry.isFile())
      .map(entry => entry.name)
      .filter(name => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

    return files.map(file => publicImageUrl(imageFolder, file))
  } catch {
    return []
  }
}

export async function generateStaticParams() {
  return PROPERTIES.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) return {}

  const gallery = await getGalleryImages(property.imageFolder)
  const ogImage = gallery[0] ?? property.image

  return {
    title: `${property.name} | ${property.price} | Sicily Realty`,
    description: property.overview.slice(0, 160),
    alternates: { canonical: `/properties/${property.id}` },
    openGraph: {
      title: `${property.name} | Sicily Realty`,
      description: `${property.bedrooms} in ${property.area} · ${property.price}`,
      url: `/properties/${property.id}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  }
}

export default async function PropertyGalleryPage({ params }: Props) {
  const { id } = await params
  const property = getPropertyById(id)

  if (!property) notFound()

  const images = await getGalleryImages(property.imageFolder)

  return <PropertyDetail property={property} images={images} />
}
