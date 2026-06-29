import { HeroSection } from '@/components/sections/HeroSection'
import { PropertiesSection } from '@/components/sections/PropertiesSection'
import { ClosingFastSection } from '@/components/sections/ClosingFastSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { InsightsSection } from '@/components/sections/InsightsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FaqSection } from '@/components/sections/FaqSection'
import {
  PROPERTIES,
  BEST_SELLERS,
  TESTIMONIALS,
  INSIGHTS,
  FAQ_ITEMS,
} from '@/lib/data'

const realEstateAgentSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Sicily Realty',
  url: 'https://sicilyrealty.co.ke',
  logo: 'https://sicilyrealty.co.ke/images/logo-main.png',
  image: 'https://sicilyrealty.co.ke/images/logo-main.png',
  description: "Sicily Realty is Nairobi's premier luxury property advisory, specialising in off-plan residential investments, apartment sales, and smart home acquisitions across Westlands, Kilimani, Kileleshwa, Lavington, and Riverside.",
  telephone: '+254799124122',
  email: 'info@sicily.co.ke',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Westlands',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.2673,
    longitude: 36.8031,
  },
  openingHours: 'Mo-Sa 08:00-18:00',
  priceRange: 'KES 5,000,000 - KES 62,500,000',
  areaServed: ['Westlands', 'Kilimani', 'Kileleshwa', 'Lavington', 'Riverside', 'Nairobi'],
  sameAs: [
    'https://www.instagram.com/realtorsicily',
    'https://www.facebook.com/share/1D1T3i7vYD/',
    'https://www.tiktok.com/@realtorsicily',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '18',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <PropertiesSection properties={PROPERTIES} />
      <ClosingFastSection properties={BEST_SELLERS} />
      <AboutSection />
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <InsightsSection articles={INSIGHTS} />
      <FaqSection items={FAQ_ITEMS} />
      <ContactSection />
    </>
  )
}
