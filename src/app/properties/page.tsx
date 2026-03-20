import { Metadata } from 'next'
import { PropertiesSection } from '@/components/sections/PropertiesSection'
import { PROPERTIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Properties | Sicily Realty - Luxury Apartments & Homes in Nairobi',
  description: 'Browse our exclusive collection of luxury apartments and homes for sale in Nairobi\'s prime locations including Westlands, Kilimani, Lavington, and more.',
}

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-navy-deep">
      <div className="pt-24 md:pt-32">
        <PropertiesSection properties={PROPERTIES} />
      </div>
    </main>
  )
}
