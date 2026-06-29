import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_BASE, PHONE, ADVISOR } from '@/lib/data'

const STATS = [
  { num: '28+', label: 'Closings Guided' },
  { num: 'KES 180M', label: 'Value Advised' },
  { num: '5.0', label: 'Client Rating' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-[140px] bg-white overflow-visible">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[100px] items-center mb-24">
          <div className="min-w-0">
            <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-gold font-semibold mb-4">
              About Sicily Realty
            </span>
            <h2 className="font-display text-[clamp(2rem,3.2vw,2.8rem)] text-navy-deep leading-[1.2] mb-7 break-words after:content-[''] after:block after:w-[52px] after:h-0.5 after:bg-gold-gradient after:rounded-sm after:mt-4">
              Built on One Standard: Yours
            </h2>
            <div className="space-y-4 text-navy-deep/65 text-[0.97rem] leading-[1.85]">
              <p>Sicily Realty was built for buyers who refuse to settle. Not a listing aggregator. Not a call centre. {ADVISOR.name} handles your acquisition personally — with three years inside Nairobi&apos;s most competitive property corridors.</p>
              <p>Every engagement starts with a conversation, not a brochure. We map your financial position, timeline, and non-negotiables — then we source precisely. The result is a shortlist that fits, not a flood of options that don&apos;t.</p>
              <p>Our measure of success is simple: you close with confidence, on terms you understand, without surprises.</p>
            </div>
            <Link href="/#contact" className="inline-flex mt-8 text-[0.78rem] tracking-[0.1em] uppercase text-gold border border-gold/30 px-6 py-3 rounded-full hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent transition-all duration-250 font-semibold">
              Start the Conversation
            </Link>
          </div>

          <div className="relative hidden md:flex flex-col justify-center gap-6">
            <div className="absolute top-0 right-0 font-display text-[10rem] leading-none text-gold/[0.04] select-none pointer-events-none">
              2022
            </div>
            {[
              { num: '28+', label: 'Acquisitions Closed', desc: "Closings guided across Nairobi's prime residential corridors" },
              { num: 'KES 180M', label: 'Total Value Advised', desc: 'Across residential acquisitions and off-plan investments' },
              { num: '5.0', label: 'Verified Client Rating', desc: 'Average rating across completed client engagements' },
            ].map(item => (
              <div
                key={item.label}
                className="card-dark rounded-2xl p-6 border border-gold/15 hover:border-gold/30 transition-colors duration-250"
              >
                <span className="block font-display text-[2.2rem] gold-text-v font-bold leading-none mb-2">{item.num}</span>
                <p className="text-[0.76rem] tracking-[0.1em] uppercase text-gold/70 font-semibold mb-1.5">{item.label}</p>
                <p className="text-[0.82rem] text-sicily-body/65 leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[100px] items-center">
          <div className="order-2 md:order-1 min-w-0">
            <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-gold font-semibold mb-4">
              Your Advisor
            </span>
            <h2 className="font-display text-[clamp(2rem,3.2vw,2.75rem)] text-navy-deep leading-[1.1] mb-1">
              {ADVISOR.name}
            </h2>
            <p className="text-[0.85rem] tracking-[0.1em] uppercase text-gold-mid font-semibold mb-2">
              {ADVISOR.title}
            </p>
            <h3 className="font-display text-[1.05rem] text-navy-deep/55 italic mb-7">
              The person who picks up your call — from first inquiry to final transfer
            </h3>
            <div className="space-y-4 text-navy-deep/65 text-[0.97rem] leading-[1.85] mb-8">
              <p>
                I am {ADVISOR.name}. I have spent years inside Nairobi&apos;s property market learning what developers won&apos;t tell you and what agents don&apos;t notice. That knowledge is what I bring to every client engagement — not a template, not a pitch deck.
              </p>
              <p>
                Whether you are stepping into homeownership for the first time, buying from abroad, or adding a second asset to your portfolio, the process I run is the same: deliberate, transparent, and built entirely around your outcome.
              </p>
            </div>

            <div className="flex gap-8 py-7 border-y border-gold/12 mb-8">
              {STATS.map(s => (
                <div key={s.label}>
                  <span className="block font-display text-[2rem] gold-text-v font-bold leading-none mb-1.5">{s.num}</span>
                  <span className="block text-[0.65rem] tracking-[0.14em] uppercase text-navy-deep/45">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(`Hi ${ADVISOR.name}, I'd love to work with you!`)}`}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.82rem] tracking-[0.06em] uppercase px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                Message {ADVISOR.name}
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
              alt={`${ADVISOR.name}, ${ADVISOR.title} at Sicily Realty`}
              width={500}
              height={625}
              className="relative z-10 w-full rounded-lg object-cover object-top aspect-[4/5]"
            />
            <div className="absolute bottom-10 left-10 right-10 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg border border-gray-100">
              <p className="font-display text-xl text-navy-deep font-bold">{ADVISOR.name}</p>
              <p className="text-[0.65rem] tracking-[0.12em] uppercase text-gold-mid font-semibold mt-0.5">{ADVISOR.title}</p>
            </div>
            <div className="absolute inset-3 border border-gold/40 rounded-xl pointer-events-none z-0" />
          </div>
        </div>

      </div>
    </section>
  )
}
