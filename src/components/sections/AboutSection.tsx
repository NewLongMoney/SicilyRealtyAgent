import Image from 'next/image'
import Link from 'next/link'
import { ADVISOR } from '@/lib/data'

const PILLARS = [
  { num: '01', label: 'Personal advisory', desc: 'One named advisor from first brief to final transfer — no call-centre handoffs.' },
  { num: '02', label: 'Verified shortlists', desc: 'Only developments Sicily has assessed for location, product, and delivery risk.' },
  { num: '03', label: 'Clear next steps', desc: 'Viewings, developer diligence, and negotiation guidance on terms you understand.' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-paper dark:bg-navy-deep border-t border-navy-deep/8 dark:border-white/8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold-mid dark:text-gold font-semibold mb-5">
              The advisory
            </p>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] text-navy-deep dark:text-white leading-[1.05] font-semibold mb-8">
              Built on one standard: <span className="italic font-normal text-gold-mid dark:text-gold">yours.</span>
            </h2>
            <div className="relative aspect-[4/5] overflow-hidden mb-8 max-w-md">
              <Image
                src="/images/realtor.png"
                alt={`${ADVISOR.name}, ${ADVISOR.title}`}
                fill
                className="object-cover object-top"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-navy-deep/10 dark:ring-white/10" />
            </div>
            <p className="font-display text-xl text-navy-deep dark:text-white">{ADVISOR.fullTitle}</p>
          </div>

          <div className="lg:col-span-7 lg:pt-16">
            <div className="space-y-6 text-[1.05rem] leading-[1.85] text-navy-deep/70 dark:text-white/65 max-w-xl">
              <p>
                Sicily Realty was built for buyers who refuse to settle. Not a listing aggregator.
                Not a call centre. {ADVISOR.name} handles your acquisition personally — with deep experience
                inside Nairobi&apos;s most competitive property corridors.
              </p>
              <p>
                Every engagement starts with a conversation, not a brochure. We map your financial position,
                timeline, and non-negotiables — then we source precisely. The result is a shortlist that fits,
                not a flood of options that don&apos;t.
              </p>
              <p>
                Our measure of success is simple: you close with confidence, on terms you understand, without surprises.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-8 border-t border-navy-deep/10 dark:border-white/10 pt-10">
              {PILLARS.map((p) => (
                <div key={p.num}>
                  <p className="font-display text-3xl text-gold-mid dark:text-gold mb-3">{p.num}</p>
                  <p className="text-[0.65rem] tracking-[0.22em] uppercase text-navy-deep dark:text-white font-semibold mb-2">{p.label}</p>
                  <p className="text-[0.88rem] leading-relaxed text-navy-deep/55 dark:text-white/50 dark:text-white/50">{p.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="inline-flex mt-12 h-12 items-center px-7 rounded-full border border-navy-deep/20 dark:border-white/20 text-[0.7rem] tracking-[0.2em] uppercase text-navy-deep dark:text-white hover:border-gold hover:text-gold-mid dark:hover:text-gold transition-colors"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
