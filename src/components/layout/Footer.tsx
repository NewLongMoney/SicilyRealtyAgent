import Link from 'next/link'
import { EMAIL, PHONE, PHONE_DISPLAY, AREAS } from '@/lib/data'
import { BrandMark } from '@/components/brand/BrandMark'

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
        <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full border border-gold" />
        <div className="absolute -right-10 top-10 w-[320px] h-[320px] rounded-full border border-gold" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <BrandMark variant="dark" size="lg" />
            <p className="mt-8 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.15] text-white/95 max-w-md">
              We don&apos;t list everything — only what we would buy ourselves.
            </p>
            <p className="mt-5 text-[0.95rem] text-white/50 max-w-sm leading-relaxed">
              Nairobi private-client advisory across Kilimani, Westlands, Kileleshwa, Lavington and Riverside.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase text-gold mb-5">Explore</p>
            <ul className="space-y-3 text-[0.9rem] text-white/65">
              {[
                ['/', 'Home'],
                ['/properties', 'Residences'],
                ['/#about', 'Advisory'],
                ['/#market', 'Market'],
                ['/#faq', 'FAQ'],
                ['/#contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase text-gold mb-5">Corridors</p>
            <ul className="space-y-3 text-[0.9rem] text-white/65">
              {AREAS.map((area) => (
                <li key={area}>
                  <Link href={`/properties?area=${area.toLowerCase()}`} className="hover:text-gold transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase text-gold mb-5">Private line</p>
            <a href={`tel:${PHONE}`} className="block font-display text-2xl text-white hover:text-gold transition-colors">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="block mt-2 text-white/60 hover:text-gold transition-colors">
              {EMAIL}
            </a>
            <div className="mt-8 flex gap-4 text-[0.65rem] tracking-[0.2em] uppercase text-white/45">
              <a href="https://www.instagram.com/realtorsicily" target="_blank" rel="noopener" className="hover:text-gold">Instagram</a>
              <a href="https://wa.me/254799124122" target="_blank" rel="noopener" className="hover:text-gold">WhatsApp</a>
              <a href="https://www.tiktok.com/@realtorsicily" target="_blank" rel="noopener" className="hover:text-gold">TikTok</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[0.72rem] text-white/35">
          <p>© {new Date().getFullYear()} Sicily Realty Kenya. All rights reserved.</p>
          <p className="tracking-[0.18em] uppercase">Selective · Corridor-fluent · WhatsApp-first</p>
        </div>
      </div>
    </footer>
  )
}
