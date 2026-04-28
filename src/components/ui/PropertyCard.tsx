import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/data'
import { MapPin, Star, ArrowRight } from 'lucide-react'

const BADGE_STYLES: Record<string, string> = {
  bestseller: 'bg-gold-gradient text-navy-deep font-bold shadow-gold/30 shadow-lg',
  new:        'bg-indigo-500/20 text-indigo-300 border border-indigo-400/40',
  offplan:    'bg-gold/15 text-gold border border-gold/35',
  complete:   'bg-emerald-500/15 text-emerald-400 border border-emerald-400/30',
  signature:  'bg-gold/15 text-gold border border-gold/25',
  select:     'bg-gold/15 text-gold border border-gold/25',
  intelligent:'bg-sky-500/15 text-sky-400 border border-sky-400/30',
}

const BADGE_LABELS: Record<string, string> = {
  bestseller: 'Best Seller',
  new:        'New Listing',
  offplan:    'Off-Plan',
  complete:   'Ready',
  signature:  'Signature',
  select:     'Select',
  intelligent:'Intelligent',
}

interface PropertyCardProps {
  property: Property
  className?: string
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <div
      className={cn(
        'group relative card-dark rounded-2xl overflow-hidden',
        'transition-all duration-[500ms] ease-luxury',
        'hover:-translate-y-3 hover:shadow-[0_32px_80px_rgba(3,8,16,0.8),0_0_60px_rgba(229,169,60,0.12)]',
        'hover:border-gold/40',
        'before:absolute before:inset-0 before:bg-gradient-to-br before:from-gold/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100',
        className
      )}
    >
      {/* Image with enhanced effects */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <Image
          src={property.image}
          alt={`${property.name} for sale in ${property.area}, Nairobi`}
          fill
          className="object-cover transition-all duration-[700ms] ease-luxury group-hover:scale-[1.08] group-hover:brightness-110"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Enhanced image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Floating badge with animation */}
        <div className="absolute top-3 left-3 z-10">
          <span className={cn(
            'text-[0.6rem] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full inline-flex items-center gap-1',
            'transition-all duration-300 hover:scale-105',
            BADGE_STYLES[property.status]
          )}>
            {property.status === 'bestseller' && <Star size={10} />}
            {BADGE_LABELS[property.status]}
          </span>
        </div>
      </div>

      {/* Enhanced body content */}
      <div className="p-5 pb-6 relative">
        {/* Area indicator */}
        <p className="text-[0.63rem] tracking-[0.18em] uppercase text-gold/60 mb-1.5 flex items-center gap-1">
          <MapPin size={10} />
          {property.area.charAt(0).toUpperCase() + property.area.slice(1)}
        </p>
        
        {/* Title with hover effect */}
        <h3 className="font-display text-[1.22rem] text-white leading-tight mb-1.5 transition-colors duration-300 group-hover:text-gold-bright">
          {property.name}
        </h3>
        
        {/* Description */}
        <p className="text-[0.78rem] text-sicily-body/70 mb-3.5 line-clamp-2">
          {property.description}
        </p>
        
        {/* Price with enhanced styling */}
        <div className="flex items-baseline gap-2 mb-4">
          <p className="font-display text-[1.45rem] gold-text-v font-bold leading-none group-hover:scale-105 transition-transform duration-300">
            {property.price}
          </p>
        </div>
        
        {/* Enhanced CTA button */}
        <Link
          href={`/properties?area=${property.area}&property=${property.id}#properties`}
          className={cn(
            'inline-flex items-center gap-2 text-[0.75rem] tracking-[0.08em] uppercase',
            'text-gold border border-gold/30 px-5 py-2.5 rounded-full',
            'transition-all duration-300 hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent',
            'hover:shadow-gold/40 hover:shadow-lg hover:scale-105',
            'font-semibold group/btn',
            'relative overflow-hidden'
          )}
        >
          <span className="relative z-10 flex items-center gap-2">
            View Property
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/50 transform rotate-45 translate-x-2 -translate-y-2" />
        </div>
      </div>
    </div>
  )
}
