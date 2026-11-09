import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_BASE, PROPERTIES } from '@/lib/data'

export function MarketBriefSection() {
  const areas = Array.from(new Set(PROPERTIES.map(p => p.area))).length

  return (
    <section id="market" className="py-16 md:py-20 bg-paper-soft dark:bg-navy-glow border-t border-navy-deep/8 dark:border-white/8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(7,28,47,0.1)] border border-gray-100">
            <Image
              src="/images/hero.jpg"
              alt="Nairobi skyline — prime residential corridors"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div>
            <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-gold-mid font-semibold mb-4">
              Corridor focus · Advisory note
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-navy-deep leading-[1.15] mb-6 after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-gradient after:mt-4">
              How Sicily Reads Nairobi&apos;s Prime Residential Corridors
            </h2>

            <div className="flex gap-8 py-5 border-y border-navy-deep/10 dark:border-white/10 mb-6">
              <div>
                <span className="block font-display text-[2rem] gold-text-v font-bold leading-none">{PROPERTIES.length}</span>
                <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-navy-deep/45 dark:text-white/40 mt-1">Verified listings on site</span>
              </div>
              <div>
                <span className="block font-display text-[2rem] gold-text-v font-bold leading-none">{areas}</span>
                <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-navy-deep/45 dark:text-white/40 mt-1">Prime corridors covered</span>
              </div>
            </div>

            <div className="space-y-4 text-navy-deep/70 text-[0.95rem] leading-[1.85]">
              <p>
                Sicily Realty focuses on a tight set of Nairobi addresses — Westlands, Kilimani, Kileleshwa, Lavington, and Riverside — where product quality, access, and rental demand can be assessed listing by listing rather than by generic market averages.
              </p>
              <p>
                Off-plan stock still dominates the active shortlist: payment plans, developer delivery history, and unit layout matter as much as the headline from-price. Ready units are introduced only when the finish level and title path are clear enough to recommend.
              </p>
              <p>
                For diaspora and local buyers alike, the working method is the same: start with your brief, narrow to a verified shortlist, then walk the buildings (or coordinate remote diligence) before any reservation.
              </p>
              <p className="text-navy-deep/55 dark:text-white/50 text-[0.88rem] italic">
                Figures for growth rates or yields are shared privately when Sicily can point to a source — they are not published as marketing statistics on this site.
              </p>
            </div>

            <Link
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sicily, I'd like a current corridor shortlist based on my budget and timeline.")}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 mt-8 text-[0.78rem] tracking-[0.08em] uppercase text-navy-deep border border-navy-deep/10 dark:border-white/10 px-6 py-3.5 rounded-full hover:bg-gold-gradient hover:border-transparent transition-all font-semibold"
            >
              Request a tailored shortlist via WhatsApp →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
