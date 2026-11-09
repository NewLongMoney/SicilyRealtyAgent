import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Property } from '@/lib/data'
import { AREA_LABELS } from '@/lib/data'

const BADGE_LABELS: Record<string, string> = {
  bestseller: 'Featured',
  new: 'New',
  offplan: 'Off-Plan',
  complete: 'Ready',
}

interface PropertyCardProps {
  property: Property
  className?: string
  featured?: boolean
}

export function PropertyCard({ property, className, featured }: PropertyCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col bg-transparent',
        featured && 'md:col-span-2',
        className
      )}
    >
      <Link href={`/properties/${property.id}`} className="block relative overflow-hidden aspect-[4/3] md:aspect-[5/4]">
        <Image
          src={property.image}
          alt={`${property.name} for sale in ${AREA_LABELS[property.area]}, Nairobi`}
          fill
          className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/10 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-[0.58rem] tracking-[0.2em] uppercase px-2.5 py-1 bg-paper/95 dark:bg-navy-deep/90 text-navy-deep dark:text-gold border border-gold/30">
            {BADGE_LABELS[property.status] ?? property.status}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <p className="text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-2">
            {AREA_LABELS[property.area]}
            {property.completion ? ` · ${property.completion}` : ''}
          </p>
          <h3 className="font-display text-[1.55rem] md:text-[1.75rem] text-white leading-[1.1] tracking-tight">
            {property.name}
          </h3>
        </div>
        {/* gold rule reveal */}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-gradient transition-all duration-500 group-hover:w-full" />
      </Link>

      <div className="pt-4 pb-2 flex items-end justify-between gap-4 border-b border-navy-deep/10 dark:border-white/10">
        <div>
          <p className="text-[0.58rem] tracking-[0.18em] uppercase text-navy-deep/40 dark:text-white/35 dark:text-white/40 mb-1">From</p>
          <p className="font-display text-[1.45rem] text-navy-deep dark:text-white leading-none">{property.price}</p>
          <p className="text-[0.78rem] text-navy-deep/50 dark:text-white/45 mt-1.5">{property.bedrooms}</p>
        </div>
        <Link
          href={`/properties/${property.id}`}
          className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-mid dark:text-gold group-hover:translate-x-0.5 transition-transform"
        >
          View residence →
        </Link>
      </div>
    </article>
  )
}
