import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { GOOGLE_REVIEWS_URL } from '@/lib/data'
import type { Testimonial } from '@/lib/data'
import { ExternalLink, Star } from 'lucide-react'

interface Props { testimonials: Testimonial[] }

export function TestimonialsSection({ testimonials }: Props) {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-section-warm border-t border-section-divider">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Client Stories"
          title="Heard Directly From the People Who Closed"
          subtitle="Real feedback from buyers and investors who worked with Sicily one-on-one."
        />

        <TestimonialsCarousel testimonials={testimonials} />

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1 text-gold-mid">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className="ml-2 text-[0.85rem] font-semibold text-navy-deep">5.0 average rating</span>
          </div>
          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.08em] uppercase text-navy-deep border border-[#e8e4dc] px-5 py-2.5 rounded-full hover:border-gold/40 hover:text-gold-mid transition-all font-semibold"
          >
            Read reviews on Google
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
