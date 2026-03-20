'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronRight, Search, MapPin, Home, TrendingUp, Star } from 'lucide-react'
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const heroRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
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
    <section ref={heroRef} className="relative w-full h-screen min-h-[700px] flex items-end justify-center overflow-hidden">
      {/* Videos with parallax effect */}
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={el => { videoRefs.current[i] = el }}
          src={src}
          muted
          loop
          playsInline
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-out',
            i === activeVid 
              ? 'opacity-100 scale-105' 
              : 'opacity-0 scale-100'
          )}
          style={{
            transform: i === activeVid 
              ? `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.05)`
              : `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale(1)`
          }}
        />
      ))}

      {/* Enhanced overlay with depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/20 via-navy-deep/60 to-navy-deep/95 z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(18,62,99,0.2)_0%,transparent_70%)] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[1]" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10px',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[960px] mx-auto px-6 md:px-12 pb-24 md:pb-20 text-center md:text-center">

        {/* Eyebrow with enhanced animation */}
        <span className="block text-[0.65rem] tracking-[0.28em] uppercase text-gold font-semibold mb-5 animate-fade-up opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Nairobi · Kenya · Est. 2022
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          </span>
        </span>

        {/* Enhanced H1 with gradient text */}
        <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1.06] tracking-tight text-white mb-6 animate-fade-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards] text-left md:text-center">
          <span className="block">
            Luxury Apartments &amp;{' '}
            <span className="gold-text">Homes</span>
          </span>
          <span className="block text-[clamp(2rem,5vw,4rem)] mt-2">
            <span className="gold-text">For Sale in Nairobi,</span>{' '}
            Kenya
          </span>
        </h1>

        {/* Sub with enhanced styling */}
        <p className="hidden md:block text-sicily-body text-[1.05rem] leading-[1.7] max-w-[580px] mx-auto mb-12 animate-fade-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
          <span className="relative">
            Private access to Nairobi&apos;s finest off-plan and ready developments —
            handpicked, verified, and presented without compromise.
            <span className="absolute bottom-0 left-0 w-full h-px bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </span>
        </p>

        {/* Mobile CTA with enhanced styling */}
        <a
          href="#properties"
          className="md:hidden inline-flex items-center gap-2.5 bg-gold-gradient text-navy-deep font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-full mb-10 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-gold/30 animate-fade-up opacity-0 [animation-delay:0.8s] [animation-fill-mode:forwards]"
        >
          Browse Properties
          <ChevronRight size={16} className="animate-bounce" />
        </a>

        {/* Enhanced search bar */}
        <div className="hidden md:flex items-center frosted border border-gold/30 rounded-2xl p-3 gap-0 max-w-[840px] mx-auto mb-14 animate-fade-up opacity-0 shadow-[0_20px_60px_rgba(3,8,16,0.6)] [animation-delay:0.8s] [animation-fill-mode:forwards] backdrop-blur-xl">
          {(Object.entries(SEARCH_OPTIONS) as [keyof typeof SEARCH_OPTIONS, string[]][]).map(
            ([key, options], i, arr) => (
              <div key={key} className="flex-1 min-w-0 flex items-center group">
                <div className="flex flex-col px-5 py-3 flex-1 min-w-0 transition-all duration-300 group-hover:bg-gold/5 rounded-lg">
                  <label className="text-[0.58rem] tracking-[0.2em] uppercase text-gold font-bold mb-1 flex items-center gap-2">
                    {key === 'location' && <MapPin size={10} />}
                    {key === 'type' && <Home size={10} />}
                    {key === 'budget' && <TrendingUp size={10} />}
                    {key === 'intent' && <Search size={10} />}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <select
                    value={search[key]}
                    onChange={e => setSearch(prev => ({ ...prev, [key]: e.target.value }))}
                    className="bg-transparent border-none outline-none text-white text-[0.88rem] cursor-pointer appearance-none w-full transition-all duration-200 hover:text-gold-bright"
                  >
                    {options.map(opt => (
                      <option key={opt} value={opt === options[0] ? '' : opt} className="bg-navy-mid text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px h-10 bg-gold/20 flex-shrink-0 mx-2" />
                )}
              </div>
            )
          )}
          <button
            onClick={handleSearch}
            className="flex-shrink-0 flex items-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.85rem] tracking-wide px-8 py-4 rounded-xl ml-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(229,169,60,0.4)] active:scale-95"
          >
            <Search size={16} />
            Search Properties
          </button>
        </div>

        {/* Enhanced stats with icons */}
        <div className="flex justify-center gap-8 md:gap-12 animate-fade-up opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
          {[
            { num: '100+', label: 'Homes Placed', icon: Home },
            { num: 'KES 7M', label: 'Transacted Value', icon: TrendingUp },
            { num: '150+', label: 'Happy Clients', icon: Star },
          ].map(stat => (
            <div key={stat.label} className="text-center group transition-all duration-300 hover:scale-105">
              <div className="flex justify-center mb-2">
                {typeof stat.icon === 'string' ? (
                  <span className="text-2xl">{stat.icon}</span>
                ) : (
                  <stat.icon size={20} className="text-gold" />
                )}
              </div>
              <span className="block font-display text-[2rem] md:text-[2.4rem] gold-text-v font-bold leading-none mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </span>
              <span className="block text-[0.6rem] md:text-[0.65rem] tracking-[0.16em] uppercase text-sicily-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced video dots */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[3] flex gap-3">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveVid(i)
              videoRefs.current[i]?.play().catch(() => {})
            }}
            className={cn(
              'h-2 rounded-full transition-all duration-500 hover:scale-125',
              i === activeVid 
                ? 'w-8 bg-gold shadow-gold/50 shadow-lg' 
                : 'w-2 bg-gold/30 hover:bg-gold/50'
            )}
          />
        ))}
      </div>

      {/* Enhanced scroll cue */}
      <div className="absolute bottom-10 right-12 z-[3] hidden md:flex flex-col items-center gap-3 group cursor-pointer">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent animate-scroll-pulse group-hover:from-gold-bright transition-all duration-300" />
        <span className="text-[0.58rem] tracking-[0.22em] uppercase text-gold/70 [writing-mode:vertical-rl] group-hover:text-gold transition-colors duration-300">
          Scroll
        </span>
      </div>
    </section>
  )
}
