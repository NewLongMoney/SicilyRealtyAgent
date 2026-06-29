import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/data'
import { AREA_LABELS } from '@/lib/data'
import { MapPin, Star, ArrowRight, Calendar, CreditCard } from 'lucide-react'

const BADGE_STYLES: Record<string, string> = {
  bestseller: 'bg-gold-gradient text-navy-deep font-bold',
  new:        'bg-emerald-50 text-emerald-700 border border-emerald-200',
  offplan:    'bg-amber-50 text-amber-800 border border-amber-200',
  complete:   'bg-sky-50 text-sky-700 border border-sky-200',
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
        'group relative bg-white rounded-2xl overflow-hidden',
        'border border-gray-100 shadow-[0_4px_24px_rgba(7,28,47,0.06)]',
        'transition-all duration-500 ease-luxury',
        'hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(7,28,47,0.12)]',
        'hover:border-gold/25',
        className
      )}
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <Image
          src={property.image}
          alt={`${property.name} for sale in ${AREA_LABELS[property.area]}, Nairobi`}
          fill
          className="object-cover transition-all duration-700 ease-luxury group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
          <span className={cn(
            'text-[0.58rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full inline-flex items-center gap-1',
            BADGE_STYLES[property.status]
          )}>
            {property.status === 'bestseller' && <Star size={9} />}
            {BADGE_LABELS[property.status]}
          </span>
          {property.paymentPlanAvailable !== false && property.status !== 'complete' && (
            <span className="text-[0.58rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full bg-white/95 text-navy-deep border border-white/80 flex items-center gap-1">
              <CreditCard size={9} />
              Payment plan
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-display text-[1.35rem] text-white leading-tight drop-shadow-md">
            {property.name}
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-2 mb-2">
          <p className="text-[0.62rem] tracking-[0.14em] uppercase text-navy-deep/45 flex items-center gap-1">
            <MapPin size={10} className="text-gold-mid" />
            {AREA_LABELS[property.area]}
          </p>
          {property.completion && (
            <p className="text-[0.58rem] tracking-[0.08em] uppercase text-navy-deep/40 flex items-center gap-1">
              <Calendar size={9} />
              {property.completion}
            </p>
          )}
        </div>

        <p className="text-[0.78rem] text-navy-deep/55 mb-4 line-clamp-2 leading-[1.55]">
          {property.description}
        </p>

        <div className="flex items-end justify-between gap-3 pt-4 border-t border-gray-50">
          <div>
            <p className="text-[0.58rem] tracking-[0.12em] uppercase text-navy-deep/40 mb-0.5">From</p>
            <p className="font-display text-[1.35rem] gold-text-v font-bold leading-none">
              {property.price}
            </p>
            <p className="text-[0.72rem] text-navy-deep/45 mt-1">{property.bedrooms}</p>
          </div>

          <Link
            href={`/properties/${property.id}`}
            className={cn(
              'inline-flex items-center gap-1.5 text-[0.68rem] tracking-[0.08em] uppercase',
              'text-navy-deep border border-gray-200 px-4 py-2.5 rounded-full',
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
