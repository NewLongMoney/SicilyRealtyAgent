import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/data'
import { WHATSAPP_BASE } from '@/lib/data'

const BADGE_STYLES: Record<string, string> = {
  bestseller: 'bg-gold-gradient text-navy-deep font-bold',
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
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(property.whatsappText)}` 

  return (
    <div
      className={cn(
        'group relative card-dark rounded-2xl overflow-hidden',
        'transition-all duration-[400ms] ease-luxury',
        'hover:-translate-y-2.5 hover:shadow-[0_28px_64px_rgba(3,8,16,0.7),0_0_40px_rgba(229,169,60,0.06)]',
        'hover:border-gold/35',
        className
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <Image
          src={property.image}
          alt={`${property.name} for sale in ${property.area}, Nairobi`}
          fill
          className="object-cover transition-transform duration-[600ms] ease-luxury group-hover:scale-[1.07]"
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Image bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-navy-deep/80 to-transparent pointer-events-none" />

        {/* Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={cn(
            'text-[0.6rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full',
            BADGE_STYLES[property.status]
          )}>
            {BADGE_LABELS[property.status]}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 pb-6">
        <p className="text-[0.63rem] tracking-[0.18em] uppercase text-gold/60 mb-1.5">
          {property.area.charAt(0).toUpperCase() + property.area.slice(1)}
        </p>
        <h3 className="font-display text-[1.22rem] text-white leading-tight mb-1.5">
          {property.name}
        </h3>
        <p className="text-[0.78rem] text-sicily-body/70 mb-3.5">
          {property.description}
        </p>
        <p className="font-display text-[1.45rem] gold-text-v font-bold leading-none mb-4">
          {property.price}
        </p>
        <Link
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-1.5 text-[0.75rem] tracking-[0.08em] uppercase',
            'text-gold border border-gold/30 px-4 py-2 rounded-full',
            'transition-all duration-250 hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent',
            'font-semibold'
          )}
        >
          View Property
        </Link>
      </div>
    </div>
  )
}
