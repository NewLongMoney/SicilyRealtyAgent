import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GOOGLE_REVIEWS_URL } from '@/lib/data'
import type { Testimonial } from '@/lib/data'
import { ExternalLink, Star } from 'lucide-react'

interface Props { testimonials: Testimonial[] }

export function TestimonialsSection({ testimonials }: Props) {
  return (
    <section id="testimonials" className="py-[120px] bg-white border-t border-section-divider">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="Heard Directly From the People Who Closed"
          subtitle="Real feedback from buyers and investors who worked with Sicily one-on-one."
        />

        {/* Mobile: horizontal snap scroll with peek */}
        <div className="mt-14 -mx-6 px-6 md:mx-0 md:px-0">
          <div
            className="flex gap-4 overflow-x-auto snap-scroll-x scrollbar-hide pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
          >
            {testimonials.map(t => (
              <div
                key={t.id}
                className="snap-card shrink-0 w-[82vw] max-w-[340px] md:w-auto md:max-w-none md:shrink"
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

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

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <div className="relative bg-white rounded-2xl border border-[#eeebe5] border-l-[3px] border-l-gold/60 p-7 h-full shadow-sm">
      <span className="absolute top-3 right-5 font-display text-[5rem] leading-none text-gold/[0.06] pointer-events-none select-none">
        &ldquo;
      </span>

      <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-bold text-navy-deep text-[0.88rem] mb-3">
        {t.initial}
      </div>

      <div className="text-gold-mid text-[0.78rem] tracking-[2px] mb-3">★★★★★</div>

      <p className="text-navy-deep/75 text-[0.88rem] leading-[1.82] italic mb-4">
        &ldquo;{t.quote}&rdquo;
      </p>

      <p className="text-[0.85rem] font-semibold text-navy-deep">{t.name}</p>
      <p className="text-[0.7rem] tracking-[0.06em] text-navy-deep/45">{t.role}</p>
    </div>
  )
}
