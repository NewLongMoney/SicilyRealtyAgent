'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/lib/data'

interface Props {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current
    if (!container) return
    const cards = container.querySelectorAll<HTMLElement>('[data-testimonial-card]')
    const target = cards[index]
    if (target) {
      container.scrollTo({ left: target.offsetLeft - container.offsetLeft, behavior: 'smooth' })
    }
  }, [])

  const handleScroll = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-testimonial-card]'))
    if (!cards.length) return
    const scrollLeft = container.scrollLeft
    let closest = 0
    let minDist = Infinity
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - container.offsetLeft - scrollLeft)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="mt-14 relative">
      <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
        <CarouselButton
          direction="left"
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
        />
      </div>
      <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
        <CarouselButton
          direction="right"
          onClick={() => scrollToIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
          disabled={activeIndex === testimonials.length - 1}
        />
      </div>

      <div className="-mx-4 px-4 md:mx-0 md:px-0">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-scroll-x scrollbar-hide pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
        >
          {testimonials.map(t => (
            <div
              key={t.id}
              data-testimonial-card
              className="snap-card shrink-0 w-[82vw] max-w-[340px] md:w-auto md:max-w-none md:shrink"
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:hidden items-center justify-center gap-2 mt-4">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              activeIndex === i ? 'w-6 bg-gold-mid' : 'w-1.5 bg-gray-300'
            )}
          />
        ))}
      </div>
    </div>
  )
}

function CarouselButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'left' | 'right'
  onClick: () => void
  disabled: boolean
}) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Previous testimonial' : 'Next testimonial'}
      className={cn(
        'w-10 h-10 rounded-full border border-[#eeebe5] bg-white shadow-sm',
        'flex items-center justify-center text-navy-deep/60',
        'hover:border-gold/40 hover:text-gold-mid transition-colors',
        disabled && 'opacity-30 cursor-not-allowed pointer-events-none'
      )}
    >
      <Icon size={18} />
    </button>
  )
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <div className="relative bg-white rounded-2xl border border-[#eeebe5] border-l-[3px] border-l-gold/60 p-7 h-full shadow-sm">
      <span className="absolute top-3 right-5 font-display text-[5rem] leading-none text-gold/[0.06] pointer-events-none select-none">
        &ldquo;
      </span>

      <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-bold text-navy-deep text-[0.88rem] mb-3">
        {t.initial}
      </div>

      <div className="text-gold-mid text-[0.78rem] tracking-[2px] mb-3">★★★★★</div>

      <p className="text-navy-deep/75 text-[0.88rem] leading-[1.82] italic mb-4">
        &ldquo;{t.quote}&rdquo;
      </p>

      <p className="text-[0.85rem] font-semibold text-navy-deep">{t.name}</p>
      <p className="text-[0.7rem] tracking-[0.06em] text-navy-deep/45">{t.role}</p>
    </div>
  )
}
