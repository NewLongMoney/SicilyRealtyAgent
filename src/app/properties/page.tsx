import { Metadata } from 'next'
import { PropertiesSection } from '@/components/sections/PropertiesSection'
import { PROPERTIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Properties | Sicily Realty - Luxury Apartments & Homes in Nairobi',
  description: 'Browse our exclusive collection of luxury apartments and homes for sale in Nairobi\'s prime locations including Westlands, Kilimani, Lavington, and more.',
  alternates: {
    canonical: '/properties',
  },
  openGraph: {
    title: 'All Properties | Off-Plan & Ready Apartments in Nairobi | Sicily Realty',
    description: "Browse Sicily Realty's full portfolio of verified apartments and investment residences across Nairobi's prime addresses.",
    url: '/properties',
    type: 'website',
    images: [{ url: '/images/logo-main.png', width: 1200, height: 630, alt: 'Sicily Realty property gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Properties | Off-Plan & Ready Apartments in Nairobi | Sicily Realty',
    description: "Browse Sicily Realty's full portfolio of verified apartments and investment residences across Nairobi's prime addresses.",
    images: ['/images/logo-main.png'],
  },
}

type PropertiesPageProps = {
  searchParams?: Promise<{
    category?: string
    area?: string
    property?: string
  }>
}

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-navy-deep pt-24 md:pt-32">
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 pt-10 md:pt-16">
        <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold font-semibold mb-4">
          Property Gallery
        </p>
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08] text-white max-w-[720px]">
          Luxury Apartments and Investment Properties in Nairobi
        </h1>
        <p className="text-sicily-body/80 text-[1rem] leading-[1.8] max-w-[680px] mt-5">
          Browse Sicily Realty&apos;s verified collection across Kilimani, Westlands, Kileleshwa, Lavington, and Riverside. Use the filters below to narrow in on the residences that match your location and investment brief.
        </p>
      </section>

      <div>
        <PropertiesSection
          properties={PROPERTIES}
          initialCategory={params?.category}
          initialArea={params?.area}
          highlightedProperty={params?.property}
        />
      </div>
    </div>
  )
}
