import { Metadata } from 'next'
import { PROPERTIES } from '@/lib/data'
import { Suspense } from 'react'
import { PropertiesClient } from './PropertiesClient'
import { PropertiesSection } from '@/components/sections/PropertiesSection'

export const metadata: Metadata = {
  title: 'Properties | Sicily Realty - Homes & Residences in Nairobi',
  description: 'Browse Sicily Realty\'s verified portfolio of off-plan apartments and investment residences across Kilimani, Westlands, and Riverside — from KES 5M to KES 62M.',
  alternates: {
    canonical: '/properties',
  },
  openGraph: {
    title: 'All Properties | Off-Plan & Ready Apartments in Nairobi | Sicily Realty',
    description: "Browse Sicily Realty's full portfolio of verified apartments and investment residences across Nairobi's prime addresses.",
    url: '/properties',
    type: 'website',
    images: [{ url: '/images/Royal%20Legend/photo_2026-06-15_17-56-17.jpg', width: 1200, height: 630, alt: 'Sicily Realty property gallery' }],
  },
}

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-white pt-28 md:pt-36">
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-2">
        <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold-mid font-semibold mb-4">
          Property Gallery · {PROPERTIES.length} Listings
        </p>
        <h1 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-navy-deep max-w-[720px]">
          Verified Residences Across Nairobi
        </h1>
        <p className="text-navy-deep/60 text-[1rem] leading-[1.8] max-w-[680px] mt-5">
          From Kilimani to Westlands and Riverside — browse off-plan apartments personally assessed by Sicily Realty. Filter by location, budget, bedrooms, or status.
        </p>
      </section>

      <Suspense fallback={<PropertiesSection properties={PROPERTIES} compactHeading={false} />}>
        <PropertiesClient />
      </Suspense>
    </div>
  )
}
