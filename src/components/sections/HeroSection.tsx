'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, Search, MapPin, Home, ShieldCheck, UserRound, MessageCircle } from 'lucide-react'
import { BrandDivider } from '@/components/brand/BrandMark'

const SEARCH_OPTIONS = {
  location: ['All Areas', 'Kilimani', 'Westlands', 'Kileleshwa', 'Lavington', 'Riverside'],
  type: ['All Types', 'Apartments'],
}

interface SearchState {
  location: string
  type: string
}

export function HeroSection() {
  const router = useRouter()
  const [search, setSearch] = useState<SearchState>({ location: '', type: '' })

  function handleSearch() {
    const params = new URLSearchParams()
    if (search.location && search.location !== 'All Areas')
      params.set('area', search.location.toLowerCase())
    if (search.type && search.type !== 'All Types')
      params.set('type', 'apartment')
    router.push(params.toString() ? `/properties?${params.toString()}#properties` : '/properties#properties')
  }

  return (
    <section className="relative min-h-[100svh] md:min-h-[880px] flex items-end justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Nairobi corridor residence at dusk — Sicily Realty portfolio"
        fill
        priority
        className="object-cover object-center scale-[1.02]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/45 via-navy-deep/55 to-navy-deep z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(246,198,103,0.12),transparent_50%)] z-[1]" />

      <div className="relative z-[2] w-full max-w-[1180px] mx-auto px-5 sm:px-8 pb-16 md:pb-24 pt-32 md:pt-40">
        <div className="max-w-[720px]">
          <div className="animate-fade-up opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards] mb-7">
            <BrandDivider />
          </div>

          <p className="text-[0.65rem] tracking-[0.32em] uppercase text-gold font-semibold mb-5 animate-fade-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            Nairobi · Private Client Advisory
          </p>

          <h1 className="font-display text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[1.05] tracking-tight text-white mb-6 animate-fade-up opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards] font-semibold">
            Residences worth a shortlist — not a scroll.
          </h1>

          <p className="text-sicily-body text-[1.02rem] md:text-[1.08rem] leading-[1.85] max-w-[560px] mb-10 animate-fade-up opacity-0 [animation-delay:0.45s] [animation-fill-mode:forwards]">
            Sicily Realty curates verified apartments across Kilimani, Westlands, Kileleshwa, Lavington, and Riverside for buyers who want clarity before they commit.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12 w-full max-w-md sm:max-w-none animate-fade-up opacity-0 [animation-delay:0.55s] [animation-fill-mode:forwards]">
            <Link
              href="/properties#properties"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gold-gradient text-navy-deep font-bold text-[0.78rem] tracking-[0.14em] uppercase min-h-[50px] px-8 py-3.5 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(229,169,60,0.28)]"
            >
              Browse Properties
              <ChevronRight size={16} />
            </Link>
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/35 text-white font-bold text-[0.78rem] tracking-[0.14em] uppercase min-h-[50px] px-8 py-3.5 hover:bg-white hover:text-navy-deep transition-all duration-300"
            >
              Private Consultation
            </Link>
          </div>

          <div className="border border-gold/20 bg-navy-deep/55 backdrop-blur-md p-4 md:p-5 max-w-[820px] animate-fade-up opacity-0 shadow-[0_20px_60px_rgba(3,8,16,0.4)] [animation-delay:0.7s] [animation-fill-mode:forwards]">
            <div className="grid gap-3 md:grid-cols-[1.3fr_1fr_auto] md:items-end">
              {(Object.entries(SEARCH_OPTIONS) as [keyof typeof SEARCH_OPTIONS, string[]][]).map(
                ([key, options]) => (
                  <div key={key} className="min-w-0">
                    <label className="text-[0.58rem] tracking-[0.22em] uppercase text-gold font-bold mb-2 flex items-center gap-2">
                      {key === 'location' && <MapPin size={10} />}
                      {key === 'type' && <Home size={10} />}
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <select
                      value={search[key]}
                      onChange={e => setSearch(prev => ({ ...prev, [key]: e.target.value }))}
                      className="w-full border border-gold/15 bg-navy-light/40 px-4 py-3.5 text-white text-[0.92rem] outline-none transition-colors hover:border-gold/35 focus:border-gold/45"
                    >
                      {options.map(opt => (
                        <option key={opt} value={opt === options[0] ? '' : opt} className="bg-navy-mid text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                )
              )}
              <button
                onClick={handleSearch}
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.82rem] tracking-[0.12em] uppercase px-8 py-4 transition-all duration-300 hover:scale-[1.01]"
              >
                <Search size={16} />
                Search
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 animate-fade-up opacity-0 [animation-delay:0.85s] [animation-fill-mode:forwards]">
            {[
              { label: 'Verified listings', detail: 'Personally assessed', icon: ShieldCheck },
              { label: 'One named advisor', detail: 'Sicily — shortlist to close', icon: UserRound },
              { label: 'WhatsApp-first', detail: 'Homebuyers & diaspora', icon: MessageCircle },
            ].map(stat => (
              <div key={stat.label} className="flex items-start gap-3 border-t border-gold/15 pt-4">
                <stat.icon size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-gold/80 mb-1">{stat.label}</p>
                  <p className="text-[0.9rem] text-white/80 leading-snug">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
