'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const VIDEOS = [
  '/videos/Vid1.mp4',
  '/videos/Vid2.mp4',
  '/videos/Vid3.mp4',
  '/videos/Vid4.mp4',
]

const SEARCH_OPTIONS = {
  location: ['All Areas','Kilimani','Westlands','Kileleshwa','Lavington','Riverside'],
  type:     ['Any Type','Apartment','Penthouse','Villa','Smart Home'],
  budget:   ['Any Budget','KES 6M – 10M','KES 10M – 15M','KES 15M+'],
  intent:   ['Buy or Invest','Buy','Invest'],
}

interface SearchState {
  location: string
  type: string
  budget: string
  intent: string
}

export function HeroSection() {
  const [activeVid, setActiveVid] = useState(0)
  const [search, setSearch] = useState<SearchState>({
    location: '', type: '', budget: '', intent: ''
  })
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVid(prev => {
        const next = (prev + 1) % VIDEOS.length
        videoRefs.current[next]?.play().catch(() => {})
        return next
      })
    }, 8000)
    videoRefs.current[0]?.play().catch(() => {})
    return () => clearInterval(interval)
  }, [])

  function handleSearch() {
    const params = new URLSearchParams()
    if (search.location && search.location !== 'All Areas')
      params.set('area', search.location.toLowerCase())
    if (search.type && search.type !== 'Any Type')
      params.set('type', search.type.toLowerCase())
    window.location.href = `/properties?${params.toString()}` 
  }

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-end justify-center overflow-hidden">
      {/* Videos */}
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={el => { videoRefs.current[i] = el }}
          src={src}
          muted
          loop
          playsInline
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]',
            i === activeVid ? 'opacity-100' : 'opacity-0'
          )}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-navy-deep/55 to-navy-deep/92 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(18,62,99,0.15)_0%,transparent_70%)] z-[1]" />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[960px] mx-auto px-6 md:px-12 pb-24 md:pb-20 text-center md:text-center">

        {/* Eyebrow */}
        <span className="block text-[0.65rem] tracking-[0.28em] uppercase text-gold font-semibold mb-5 animate-fade-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          Nairobi · Kenya · Est. 2022
        </span>

        {/* H1 */}
        <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1.06] tracking-tight text-white mb-6 animate-fade-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] text-left md:text-center">
          Luxury Apartments &amp; Homes{' '}
          <em className="gold-text not-italic">For Sale in Nairobi,</em>{' '}
          Kenya
        </h1>

        {/* Sub — hidden on mobile */}
        <p className="hidden md:block text-sicily-body text-[1.05rem] leading-[1.7] max-w-[580px] mx-auto mb-12 animate-fade-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
          Private access to Nairobi&apos;s finest off-plan and ready developments —
          handpicked, verified, and presented without compromise.
        </p>

        {/* Mobile CTA — shown only on mobile */}
        <a
          href="#properties"
          className="md:hidden inline-flex items-center gap-2.5 bg-gold-gradient text-navy-deep font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-full mb-10 shadow-lg transition-opacity hover:opacity-90"
        >
          Browse Properties
          <ChevronRight size={16} />
        </a>

        {/* Search bar — desktop */}
        <div className="hidden md:flex items-center frosted border border-gold/30 rounded-xl p-2 gap-0 max-w-[820px] mx-auto mb-14 animate-fade-up opacity-0 shadow-[0_8px_32px_rgba(3,8,16,0.4)] [animation-delay:0.8s] [animation-fill-mode:forwards]">
          {(Object.entries(SEARCH_OPTIONS) as [keyof typeof SEARCH_OPTIONS, string[]][]).map(
            ([key, options], i, arr) => (
              <div key={key} className="flex-1 min-w-0 flex items-center">
                <div className="flex flex-col px-5 py-2.5 flex-1 min-w-0">
                  <label className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-bold mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <select
                    value={search[key]}
                    onChange={e => setSearch(prev => ({ ...prev, [key]: e.target.value }))}
                    className="bg-transparent border-none outline-none text-white text-[0.88rem] cursor-pointer appearance-none w-full"
                  >
                    {options.map(opt => (
                      <option key={opt} value={opt === options[0] ? '' : opt} className="bg-navy-mid text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px h-8 bg-gold/20 flex-shrink-0" />
                )}
              </div>
            )
          )}
          <button
            onClick={handleSearch}
            className="flex-shrink-0 flex items-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.85rem] tracking-wide px-7 py-3.5 rounded-lg ml-2 hover:opacity-90 transition-all hover:-translate-y-px shadow-[0_4px_16px_rgba(229,169,60,0.25)] hover:shadow-[0_8px_28px_rgba(229,169,60,0.4)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            Search
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-14 md:gap-14 animate-fade-up opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
          {[
            { num: '150+', label: 'Homes Placed' },
            { num: 'KES 2.5B', label: 'Transacted Value' },
            { num: '400+', label: 'Clients Who Returned' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <span className="block font-display text-[2rem] md:text-[2.2rem] gold-text-v font-bold leading-none mb-1">
                {stat.num}
              </span>
              <span className="block text-[0.6rem] md:text-[0.65rem] tracking-[0.16em] uppercase text-sicily-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Video dots */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveVid(i)
              videoRefs.current[i]?.play().catch(() => {})
            }}
            className={cn(
              'h-1.5 rounded-full transition-all duration-400',
              i === activeVid ? 'w-7 bg-gold' : 'w-1.5 bg-gold/30'
            )}
          />
        ))}
      </div>

      {/* Scroll cue — desktop */}
      <div className="absolute bottom-10 right-12 z-[3] hidden md:flex flex-col items-center gap-2.5">
        <div className="w-px h-14 bg-gradient-to-b from-gold/70 to-transparent animate-scroll-pulse" />
        <span className="text-[0.58rem] tracking-[0.22em] uppercase text-gold/50 [writing-mode:vertical-rl]">Scroll</span>
      </div>
    </section>
  )
}
