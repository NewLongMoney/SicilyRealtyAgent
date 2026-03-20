import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_BASE, PHONE } from '@/lib/data'

const STATS = [
  { num: '100+', label: 'Homes Placed' },
  { num: 'KES 7M', label: 'Transacted Value' },
  { num: '150+', label: 'Happy Clients' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-[140px] bg-navy-mid overflow-visible">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        {/* Company about */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[100px] items-center mb-24">
          <div className="min-w-0">
            <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-gold font-semibold mb-4">
              About Sicily Realty
            </span>
            <h2 className="font-display text-[clamp(2rem,3.2vw,2.8rem)] text-white leading-[1.2] mb-7 break-words after:content-[''] after:block after:w-[52px] after:h-0.5 after:bg-gold-gradient after:rounded-sm after:mt-4">
              Built on One Standard: Yours
            </h2>
            <div className="space-y-4 text-sicily-body/85 text-[0.97rem] leading-[1.85]">
              <p>Sicily Realty was built for buyers who refuse to settle. Not a listing aggregator. Not a call centre. A single dedicated advisor who handles your acquisition the way you would — if you had three years inside Nairobi&apos;s most competitive property corridors.</p>
              <p>Every engagement starts with a conversation, not a brochure. We map your financial position, timeline, and non-negotiables — then we source precisely. The result is a shortlist that fits, not a flood of options that don&apos;t.</p>
              <p>Our measure of success is simple: you close with confidence, on terms you understand, without surprises.</p>
            </div>
            <Link href="#contact" className="inline-flex mt-8 text-[0.78rem] tracking-[0.1em] uppercase text-gold border border-gold/30 px-6 py-3 rounded-full hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent transition-all duration-250 font-semibold">
              Start the Conversation
            </Link>
          </div>

          {/* Advisor image */}
          <div className="relative p-6 md:p-7">
            <Image
              src="/images/realtor.png"
              alt="Sicily, Principal Real Estate Advisor"
              width={500}
              height={625}
              className="relative z-10 w-full rounded-lg object-cover object-top aspect-[4/5]"
            />
            {/* Inner frame */}
            <div className="absolute inset-3 border border-gold/40 rounded-xl pointer-events-none z-0" />
            {/* Outer frame */}
            <div className="absolute inset-0 border border-gold/15 rounded-2xl pointer-events-none z-0" />
          </div>
        </div>

        {/* Advisor bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[100px] items-center">
          <div className="order-2 md:order-1 min-w-0">
            <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-gold font-semibold mb-4">
              Your Advisor
            </span>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] text-white leading-[1.2] mb-2 break-words">
              One Advisor. Full Accountability.
            </h2>
            <h3 className="font-display text-[1.1rem] text-gold/70 italic mb-7">
              The Person Who Picks Up Your Call
            </h3>
            <div className="space-y-4 text-sicily-body/85 text-[0.97rem] leading-[1.85] mb-8">
              <p>I have spent years inside Nairobi&apos;s property market learning what developers won&apos;t tell you and what agents don&apos;t notice. That knowledge is what I bring to every client engagement — not a template, not a pitch deck.</p>
              <p>Whether you are stepping into homeownership for the first time or adding a second asset to your portfolio, the process I run is the same: deliberate, transparent, and built entirely around your outcome.</p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 py-7 border-y border-gold/12 mb-8">
              {STATS.map(s => (
                <div key={s.label}>
                  <span className="block font-display text-[2rem] gold-text-v font-bold leading-none mb-1.5">{s.num}</span>
                  <span className="block text-[0.65rem] tracking-[0.14em] uppercase text-sicily-muted">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap">
              <Link
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sicily, I'd love to work with you!")}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.82rem] tracking-[0.06em] uppercase px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                Start the Conversation
              </Link>
              <Link
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 text-[0.82rem] tracking-[0.06em] uppercase text-gold border border-gold/30 px-6 py-3.5 rounded-full hover:bg-gold/10 transition-colors font-semibold"
              >
                Speak Directly
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 relative p-6">
            <Image
              src="/images/realtor.png"
              alt="Sicily Realty Principal Advisor"
              width={500}
              height={625}
              className="relative z-10 w-full rounded-lg object-cover object-top aspect-[4/5]"
            />
            <div className="absolute inset-3 border border-gold/40 rounded-xl pointer-events-none z-0" />
            <div className="absolute inset-0 border border-gold/15 rounded-2xl pointer-events-none z-0" />
          </div>
        </div>

      </div>
    </section>
  )
}
