import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Testimonial } from '@/lib/data'

interface Props { testimonials: Testimonial[] }

export function TestimonialsSection({ testimonials }: Props) {
  return (
    <section id="testimonials" className="py-[120px] bg-navy-deep">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="Heard Directly From the People Who Closed"
          subtitle="We do not chase reviews. These came on their own."
        />

        {/* Desktop 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-14">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 mt-10 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
          {testimonials.map(t => (
            <div key={t.id} className="snap-start flex-shrink-0 w-[300px]">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
        <p className="md:hidden flex items-center gap-1.5 text-[0.65rem] tracking-[0.12em] uppercase text-gold/50 mt-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Swipe for more
        </p>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <div className="relative card-dark rounded-[0_14px_14px_0] border-l-[3px] border-l-gold/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-l-gold group">
      {/* Watermark quote */}
      <span className="absolute top-3 right-5 font-display text-[5rem] leading-none text-gold/[0.07] pointer-events-none select-none">
        &ldquo;
      </span>

      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-bold text-navy-deep text-[0.88rem] mb-3 flex-shrink-0">
        {t.initial}
      </div>

      {/* Stars */}
      <div className="text-gold text-[0.78rem] tracking-[2px] mb-3">★★★★★</div>

      {/* Quote */}
      <p className="text-sicily-body/90 text-[0.88rem] leading-[1.82] italic mb-4">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Reviewer */}
      <p className="text-[0.85rem] font-semibold text-gold-bright">{t.name}</p>
      <p className="text-[0.7rem] tracking-[0.06em] text-sicily-muted">{t.role}</p>
    </div>
  )
}
