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

export default function HomePage() {
  return (
    <>
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
