import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Testimonial } from '@/lib/data'

interface Props { testimonials: Testimonial[] }

export function TestimonialsSection({ testimonials }: Props) {
  return (
    <section id="testimonials" className="py-[120px] bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="Heard Directly From the People Who Closed"
          subtitle="We do not chase reviews. These came on their own."
        />

        {/* Single responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
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
