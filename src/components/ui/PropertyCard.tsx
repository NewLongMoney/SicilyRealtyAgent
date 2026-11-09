import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/data'
import { AREA_LABELS } from '@/lib/data'
import { MapPin, ArrowRight, Calendar, CreditCard } from 'lucide-react'

const BADGE_STYLES: Record<string, string> = {
  bestseller: 'bg-gold-gradient text-navy-deep font-bold',
  new:        'bg-white/95 text-navy-deep border border-gold/30',
  offplan:    'bg-navy-deep/90 text-gold border border-gold/25',
  complete:   'bg-white/95 text-navy-deep border border-white/80',
}

const BADGE_LABELS: Record<string, string> = {
  bestseller: 'Featured',
  new:        'New',
  offplan:    'Off-Plan',
  complete:   'Ready',
}

interface PropertyCardProps {
  property: Property
  className?: string
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <article
      className={cn(
        'group relative bg-white overflow-hidden',
        'border border-[#eeebe5]',
        'shadow-[0_8px_30px_rgba(7,28,47,0.04)]',
        'transition-all duration-500 ease-luxury',
        'hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(7,28,47,0.1)]',
        'hover:border-gold/30',
        className
      )}
    >
      <div className="relative overflow-hidden aspect-[5/4]">
        <Image
          src={property.image}
          alt={`${property.name} for sale in ${AREA_LABELS[property.area]}, Nairobi`}
          fill
          className="object-cover transition-all duration-700 ease-luxury group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent pointer-events-none" />
        <div className="absolute inset-3 border border-white/15 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
          <span className={cn(
            'text-[0.58rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 inline-flex items-center gap-1',
            BADGE_STYLES[property.status]
          )}>
            {BADGE_LABELS[property.status]}
          </span>
          {property.paymentPlanAvailable !== false && property.status !== 'complete' && (
            <span className="text-[0.58rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 bg-white/95 text-navy-deep border border-white/80 flex items-center gap-1">
              <CreditCard size={9} />
              Payment plan
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-display text-[1.45rem] text-white leading-tight tracking-tight">
            {property.name}
          </p>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <p className="text-[0.62rem] tracking-[0.18em] uppercase text-navy-deep/45 flex items-center gap-1.5">
            <MapPin size={10} className="text-gold-mid" />
            {AREA_LABELS[property.area]}
          </p>
          {property.completion && (
            <p className="text-[0.58rem] tracking-[0.1em] uppercase text-navy-deep/40 flex items-center gap-1">
              <Calendar size={9} />
              {property.completion}
            </p>
          )}
        </div>

        <p className="text-[0.8rem] text-navy-deep/55 mb-5 line-clamp-2 leading-[1.65]">
          {property.description}
        </p>

        <div className="flex items-end justify-between gap-3 pt-4 border-t border-[#eeebe5]">
          <div className="min-w-0">
            <p className="text-[0.58rem] tracking-[0.14em] uppercase text-navy-deep/40 mb-1">From</p>
            <p className="font-display text-[1.4rem] gold-text-v font-bold leading-none truncate">
              {property.price}
            </p>
            <p className="text-[0.72rem] text-navy-deep/45 mt-1.5 truncate">{property.bedrooms}</p>
          </div>

          <Link
            href={`/properties/${property.id}`}
            className={cn(
              'inline-flex items-center gap-1.5 text-[0.68rem] tracking-[0.1em] uppercase',
              'text-navy-deep border border-[#eeebe5] px-4 py-2.5',
              'transition-all duration-300 hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent',
              'font-semibold whitespace-nowrap'
            )}
          >
            View
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  )
}
