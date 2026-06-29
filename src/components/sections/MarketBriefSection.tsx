import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_BASE } from '@/lib/data'

export function MarketBriefSection() {
  return (
    <section id="insights" className="py-[120px] bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(7,28,47,0.1)] border border-gray-100">
            <Image
              src="/images/hero.png"
              alt="Nairobi skyline — prime residential corridors"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div>
            <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-gold-mid font-semibold mb-4">
              March 2026 · Market Analysis
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-navy-deep leading-[1.15] mb-6 after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-gradient after:mt-4">
              Why Nairobi&apos;s Prime Residential Market Held Firm in Q1 2026
            </h2>

            <div className="flex gap-8 py-5 border-y border-gray-200 mb-6">
              <div>
                <span className="block font-display text-[2rem] gold-text-v font-bold leading-none">+12%</span>
                <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-navy-deep/45 mt-1">YoY value growth</span>
              </div>
              <div>
                <span className="block font-display text-[2rem] gold-text-v font-bold leading-none">8.2%</span>
                <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-navy-deep/45 mt-1">Avg. rental yield</span>
              </div>
            </div>

            <div className="space-y-4 text-navy-deep/70 text-[0.95rem] leading-[1.85]">
              <p>
                While global property markets softened in early 2026, Nairobi&apos;s premium residential corridor — Westlands through Kilimani — recorded a 12% year-on-year uplift in transacted values. Off-plan sales in these postcodes continued to outperform secondary stock, driven by infrastructure completion and sustained expatriate demand.
              </p>
              <p>
                Westlands remains the liquidity leader: developments along Mogotio Road, Rhapta Road, and Peponi Road are absorbing inventory faster than comparable stock in 2024. Kilimani is repricing upward on limited land supply — projects such as Royal Legend and Acacia Apartments are entering at price points that reflect scarcity, not speculation.
              </p>
              <p>
                For investors, the signal is clear: entry pricing on verified off-plan stock in blue-zone addresses still offers a spread before completion. Rental yields in the 7.5–8.5% range on completed units remain achievable for professionally managed apartments targeting corporate and diplomatic tenants.
              </p>
              <p className="text-navy-deep/55 text-[0.88rem] italic">
                This brief is prepared by Sicily Realty from closed transactions and active pipeline data across our 17 verified listings. It is not generic market commentary.
              </p>
            </div>

            <Link
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sicily, I'd like the full 2026 market brief and current availability.")}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 mt-8 text-[0.78rem] tracking-[0.08em] uppercase text-navy-deep border border-gray-200 px-6 py-3.5 rounded-full hover:bg-gold-gradient hover:border-transparent transition-all font-semibold"
            >
              Request the full brief via WhatsApp →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
