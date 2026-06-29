'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight, Search, MapPin, Home, TrendingUp, Star } from 'lucide-react'

const SEARCH_OPTIONS = {
  location: ['All Areas', 'Kilimani', 'Westlands', 'Riverside'],
  type: ['All Types', 'Apartments', 'Villas'],
}

interface SearchState {
  location: string
  type: string
}

export function HeroSection() {
  const router = useRouter()
  const [search, setSearch] = useState<SearchState>({
    location: '', type: ''
  })

  function handleSearch() {
    const params = new URLSearchParams()
    if (search.location && search.location !== 'All Areas')
      params.set('area', search.location.toLowerCase())
    if (search.type && search.type !== 'All Types')
      params.set('type', search.type.toLowerCase())
    router.push(params.toString() ? `/properties?${params.toString()}#properties` : '/properties#properties')
  }

  return (
    <section className="relative min-h-[720px] md:min-h-[840px] flex items-end justify-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Luxury apartment interior curated by Sicily Realty in Nairobi"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-navy-deep/65 to-navy-deep/95 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,198,103,0.14),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(18,62,99,0.28),transparent_35%)] z-[1]" />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[1180px] mx-auto px-6 md:px-8 pb-20 md:pb-24 pt-32 md:pt-44">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="max-w-[760px]">

            <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-navy-deep/45 px-4 py-2 text-[0.65rem] tracking-[0.24em] uppercase text-gold font-semibold mb-6 animate-fade-up opacity-0 [animation-delay:0.15s] [animation-fill-mode:forwards]">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Nairobi Luxury Property Advisory
            </span>

            <h1 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.08] tracking-tight text-white mb-6 animate-fade-up opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
              Smart Homes &amp; Investment Residences in Nairobi
            </h1>

            <p className="text-sicily-body text-[1rem] md:text-[1.06rem] leading-[1.8] max-w-[640px] mb-8 animate-fade-up opacity-0 [animation-delay:0.45s] [animation-fill-mode:forwards]">
              Sicily Realty curates verified opportunities in Kilimani, Westlands, Kileleshwa, Lavington, and Riverside for buyers who want clarity, quality, and a shortlist worth acting on.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
              <Link
                href="/properties#properties"
                className="inline-flex items-center gap-2.5 bg-gold-gradient text-navy-deep font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-gold/30"
              >
                Browse Properties
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 bg-white text-navy-deep font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-gray-50"
              >
                Book a Private Consultation
              </Link>
            </div>

            <div className="frosted border border-gold/20 rounded-2xl p-4 md:p-5 max-w-[880px] animate-fade-up opacity-0 shadow-[0_20px_60px_rgba(3,8,16,0.45)] [animation-delay:0.75s] [animation-fill-mode:forwards]">
              <div className="grid gap-3 md:grid-cols-[1.3fr_1fr_auto] md:items-end">
                {(Object.entries(SEARCH_OPTIONS) as [keyof typeof SEARCH_OPTIONS, string[]][]).map(
                  ([key, options]) => (
                    <div key={key} className="min-w-0">
                      <label className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-bold mb-2 flex items-center gap-2">
                        {key === 'location' && <MapPin size={10} />}
                        {key === 'type' && <Home size={10} />}
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <select
                        value={search[key]}
                        onChange={e => setSearch(prev => ({ ...prev, [key]: e.target.value }))}
                        className="w-full rounded-xl border border-gold/15 bg-navy-light/50 px-4 py-3 text-white text-[0.92rem] outline-none transition-colors hover:border-gold/35 focus:border-gold/45"
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
                  className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.85rem] tracking-wide px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(229,169,60,0.25)] active:scale-[0.99]"
                >
                  <Search size={16} />
                  Search Properties
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 pt-10 animate-fade-up opacity-0 [animation-delay:0.9s] [animation-fill-mode:forwards]">
              {[
                { num: '28+', label: 'Successful Closings', icon: Home },
                { num: 'KES 180M', label: 'Transaction Value Guided', icon: TrendingUp },
                { num: '5.0', label: 'Client Rating', icon: Star },
              ].map(stat => (
                <div key={stat.label} className="min-w-[120px]">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon size={16} className="text-gold" />
                    <span className="text-[0.62rem] tracking-[0.16em] uppercase text-gold/75">
                      {stat.label}
                    </span>
                  </div>
                  <span className="block font-display text-[2rem] md:text-[2.5rem] gold-text-v font-bold leading-none">
                    {stat.num}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hidden lg:block animate-fade-up opacity-0 [animation-delay:1.05s] [animation-fill-mode:forwards]">
            <div className="card-dark rounded-3xl border border-gold/15 p-7 shadow-[0_18px_50px_rgba(3,8,16,0.45)]">
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-gold font-semibold mb-3">
                Why buyers choose Sicily
              </p>
              <h2 className="font-display text-[2rem] text-white leading-[1.15] mb-4">
                Curated advice, not portal noise.
              </h2>
              <ul className="space-y-4 text-[0.92rem] text-sicily-body/85 leading-[1.7]">
                <li>Verified listings only, across Nairobi&apos;s prime residential corridors.</li>
                <li>Guidance for both homebuyers and investors who need sharper due diligence.</li>
                <li>One advisor from shortlist to viewing to negotiation.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
