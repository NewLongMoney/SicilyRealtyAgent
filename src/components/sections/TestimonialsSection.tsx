import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WHATSAPP_BASE, ADVISOR } from '@/lib/data'
import { MessageCircle, Phone } from 'lucide-react'

/** Named testimonials are withheld until Sicily supplies written permission (see REMOVED_CLAIMS.md). */
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-paper-soft dark:bg-navy-glow border-t border-navy-deep/8 dark:border-white/8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="How engagements work"
          title="A clear process before any reservation"
          subtitle="No anonymous star ratings on this site. Speak with Sicily directly and judge the process yourself."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Share your brief',
              body: 'Budget, corridor preference, timeline, and whether you are buying to live, let, or hold.',
            },
            {
              step: '02',
              title: 'Receive a shortlist',
              body: 'Only verified developments that fit — with unit options, payment notes, and open questions flagged.',
            },
            {
              step: '03',
              title: 'View and decide',
              body: 'Site visits or remote diligence, developer track-record checks, then reservation support when you are ready.',
            },
          ].map(item => (
            <div
              key={item.step}
              className="rounded-2xl border border-gray-100 bg-paper dark:bg-navy-deep p-7 shadow-[0_8px_30px_rgba(7,28,47,0.05)] hover:border-gold/25 transition-colors"
            >
              <p className="font-display text-[2rem] gold-text-v font-bold leading-none mb-3">{item.step}</p>
              <h3 className="font-display text-xl text-navy-deep mb-2">{item.title}</h3>
              <p className="text-[0.92rem] text-navy-deep/65 dark:text-white/60 leading-[1.7]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Hi ${ADVISOR.name}, I'd like to start with a property brief.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.78rem] tracking-[0.08em] uppercase px-6 py-3.5 rounded-full shadow-md"
          >
            <MessageCircle size={16} />
            Message Sicily on WhatsApp
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-[0.75rem] tracking-[0.08em] uppercase text-navy-deep border border-[#e8e4dc] px-5 py-2.5 rounded-full hover:border-gold/40 hover:text-gold-mid transition-all font-semibold"
          >
            <Phone size={14} />
            Or use the contact form
          </Link>
        </div>
      </div>
    </section>
  )
}
