import Image from 'next/image'
import Link from 'next/link'
import { EMAIL, PHONE } from '@/lib/data'

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/realtorsicily',
    icon: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1D1T3i7vYD/',
    icon: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@realtorsicily',
    icon: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/254799124122',
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  },
]

export function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-gold/8 pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 pb-14 border-b border-gold/8">

          {/* Brand column */}
          <div>
            <Image src="/images/logo-main.png" alt="Sicily Realty"
              width={160} height={52} className="h-12 w-auto object-contain mb-3" />
            <p className="text-lg font-bold text-white tracking-wide mb-2">Sicily Realty</p>
            <p className="text-[0.82rem] text-sicily-body/70 leading-[1.7] max-w-[260px] mb-5">
              Nairobi&apos;s most selective property advisory. We don&apos;t list everything — only what we would buy ourselves.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(s => (
                <Link key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}
                  className="w-9 h-9 border border-gold/18 rounded-full flex items-center justify-center text-sicily-muted hover:border-gold/60 hover:text-gold hover:bg-gold/8 transition-all duration-250">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    dangerouslySetInnerHTML={{ __html: s.icon }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[0.68rem] tracking-[0.18em] uppercase text-gold/80 font-semibold mb-5">Quick Links</h4>
            {['/', '/properties', '/#about', '/#insights', '/#faq', '/#contact'].map((href, i) => {
              const labels = ['Home','Properties','About Us','Insights','FAQ','Contact']
              return (
                <Link key={href} href={href}
                  className="block text-[0.83rem] text-sicily-body/65 hover:text-gold hover:pl-1.5 transition-all mb-2.5">
                  {labels[i]}
                </Link>
              )
            })}
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-[0.68rem] tracking-[0.18em] uppercase text-gold/80 font-semibold mb-5">Areas</h4>
            {['Kilimani','Westlands','Kileleshwa','Lavington','Riverside'].map(area => (
              <Link key={area} href={`/properties?area=${area.toLowerCase()}`}
                className="block text-[0.83rem] text-sicily-body/65 hover:text-gold hover:pl-1.5 transition-all mb-2.5">
                {area}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.68rem] tracking-[0.18em] uppercase text-gold/80 font-semibold mb-5">Contact</h4>
            <div className="space-y-3 text-[0.83rem]">
              <p className="text-sicily-body/65">Westlands, Nairobi, Kenya</p>
              <a href={`tel:${PHONE}`} className="block text-sicily-body/65 hover:text-gold transition-colors">
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="block text-sicily-body/65 hover:text-gold transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-7 text-[0.72rem] text-sicily-muted">
          <p>© 2026 Sicily Realty Kenya. All rights reserved.</p>
          <p>
            Built by{' '}
            <a href="https://captivart.art" target="_blank" rel="noopener"
              className="text-gold/70 hover:text-gold transition-colors">
              Captivart
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
