'use client'

import { useState } from 'react'
import { PropertyCard } from '@/components/ui/PropertyCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/data'

const FILTERS = [
  { value: 'all',         label: 'All Listings' },
  { value: 'signature',   label: 'Signature' },
  { value: 'select',      label: 'Select' },
  { value: 'intelligent', label: 'Intelligent' },
]

interface Props { properties: Property[] }

export function PropertiesSection({ properties }: Props) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? properties
    : properties.filter(p => p.category === active)

  return (
    <section id="properties" className="py-[120px] bg-navy-deep">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Handpicked Residences"
          subtitle="Every listing here has been personally assessed. If it's on this page, it passed."
        />

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 mt-10">
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                'text-[0.73rem] tracking-[0.1em] uppercase px-6 py-2.5 rounded-full border transition-all duration-250',
                active === f.value
                  ? 'bg-gold-gradient text-navy-deep border-transparent font-bold shadow-[0_4px_16px_rgba(229,169,60,0.25)]'
                  : 'border-gold/20 text-sicily-body hover:border-gold/50 hover:text-gold-bright'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid — desktop 3-col, tablet 2-col, mobile horizontal scroll */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(p => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
          {filtered.map(p => (
            <div key={p.id} className="snap-start flex-shrink-0 w-[280px]">
              <PropertyCard property={p} />
            </div>
          ))}
        </div>
        <p className="md:hidden flex items-center gap-1.5 text-[0.65rem] tracking-[0.12em] uppercase text-gold/50 mt-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Swipe to explore
        </p>
      </div>
    </section>
  )
}
