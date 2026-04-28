import type { MetadataRoute } from 'next'

const routes = ['/', '/properties']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(route => ({
    url: `https://sicilyrealty.co.ke${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'daily',
    priority: route === '/' ? 1 : 0.9,
  }))
}
