'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BrandDivider } from '@/components/brand/BrandMark'

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-paper dark:bg-navy-deep overflow-hidden">
      {/* Asymmetric split: copy left on paper/navy, full-bleed image right (stacks on mobile) */}
      <div className="grid lg:grid-cols-12 min-h-[100svh]">
        <div className="relative z-10 lg:col-span-5 flex flex-col justify-end px-6 sm:px-10 lg:px-14 xl:px-16 pt-28 pb-16 lg:pb-24">
          <div className="max-w-xl">
            <BrandDivider className="mb-8 opacity-0 animate-fade-up [animation-fill-mode:forwards]" />
            <p className="text-[0.65rem] tracking-[0.36em] uppercase text-gold-mid dark:text-gold font-semibold mb-6 opacity-0 animate-fade-up [animation-delay:80ms] [animation-fill-mode:forwards]">
              Nairobi · Private Client Advisory
            </p>
            <h1 className="font-display font-semibold text-navy-deep dark:text-white leading-[0.98] tracking-tight text-[clamp(2.75rem,7vw,5.4rem)] mb-8 opacity-0 animate-fade-up [animation-delay:140ms] [animation-fill-mode:forwards]">
              Residences
              <span className="block italic font-normal text-gold-mid dark:text-gold">worth a shortlist</span>
              <span className="block">— not a scroll.</span>
            </h1>
            <p className="text-[1.05rem] leading-[1.75] text-navy-deep/70 dark:text-white/65 max-w-md mb-10 opacity-0 animate-fade-up [animation-delay:220ms] [animation-fill-mode:forwards]">
              A selective advisory for Kilimani, Westlands, Kileleshwa, Lavington and Riverside —
              personally assessed residences, verified before they reach your WhatsApp.
            </p>
            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up [animation-delay:300ms] [animation-fill-mode:forwards]">
              <Link
                href="/properties"
                className="inline-flex h-12 items-center px-7 rounded-full bg-navy-deep dark:bg-gold text-paper dark:text-navy-deep text-[0.7rem] tracking-[0.2em] uppercase font-semibold hover:bg-navy-mid dark:hover:bg-gold-bright transition-colors"
              >
                View residences
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center px-6 text-[0.7rem] tracking-[0.2em] uppercase text-navy-deep dark:text-white border-b border-gold/50 hover:border-gold transition-colors"
              >
                Speak to Sicily
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 flex items-end justify-between gap-6 border-t border-navy-deep/10 dark:border-white/10 pt-6">
            <div>
              <p className="text-[0.6rem] tracking-[0.28em] uppercase text-gold-mid mb-1">Corridors</p>
              <p className="font-display text-lg text-navy-deep dark:text-white">Kilimani → Riverside</p>
            </div>
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-navy-deep/45 dark:text-white/40 dark:text-white/40 max-w-[10rem] text-right leading-relaxed">
              Scroll for the shortlist
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-7 min-h-[52vh] lg:min-h-full">
          <Image
            src="/images/hero-corridor.jpg"
            alt="Nairobi corridor residence at dusk — Sicily Realty"
            fill
            priority
            className="object-cover object-[center_35%] scale-[1.01] transition-transform duration-[1.2s] ease-luxury will-change-transform"
            sizes="(max-width:1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-paper/40 dark:lg:to-navy-deep/50" />
          {/* Editorial caption band */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
            <div className="text-white">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-1">Featured corridor</p>
              <p className="font-display text-2xl sm:text-3xl leading-tight">Galaxy · Kilimani dusk</p>
            </div>
            <Link
              href="/properties"
              className="hidden sm:inline-flex text-[0.65rem] tracking-[0.22em] uppercase text-white/90 border border-white/30 hover:border-gold hover:text-gold px-4 py-2 transition-colors"
            >
              Enter shortlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
