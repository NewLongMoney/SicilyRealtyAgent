import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sicilyrealty.co.ke/sitemap.xml',
    host: 'https://sicilyrealty.co.ke',
  }
}
