import type { MetadataRoute } from 'next'
import { PROPERTIES } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const base = 'https://sicilyrealty.co.ke'

  return [
    {
      url: base,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/properties`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...PROPERTIES.map(property => ({
      url: `${base}/properties/${property.id}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
