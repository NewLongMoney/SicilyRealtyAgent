import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sicily Realty',
    short_name: 'Sicily Realty',
    description: "Nairobi's selective luxury property advisory for buyers and investors.",
    start_url: '/',
    display: 'standalone',
    background_color: '#071C2F',
    theme_color: '#071C2F',
    icons: [
      {
        src: '/images/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/images/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
