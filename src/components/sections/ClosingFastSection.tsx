import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AREA_LABELS } from '@/lib/data'
import type { Property } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface Props { properties: Property[] }

export function ClosingFastSection({ properties }: Props) {
  return (
    <section id="best-sellers" className="py-16 md:py-20 bg-section-warm border-t border-section-divider">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Featured Developments"
          title="Residences Worth Acting On"
          subtitle="Flagship off-plan developments across Kilimani and Westlands — personally vetted by Sicily Realty."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {properties.slice(0, 3).map((p, i) => {
            const isFeatured = i === 0
            return (
              <Link
                key={p.id}
                href={`/properties/${p.id}`}
                className={cn(
                  'group bg-white rounded-2xl overflow-hidden border border-gray-100',
                  'shadow-[0_4px_24px_rgba(7,28,47,0.06)]',
                  'transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(7,28,47,0.1)] hover:border-gold/25',
                  isFeatured ? 'md:col-span-2 md:grid md:grid-cols-2' : 'md:col-span-1'
                )}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} for sale in Nairobi`}
                    width={800}
                    height={isFeatured ? 533 : 400}
                    className={cn(
                      'w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]',
                      isFeatured ? 'aspect-[4/3] md:aspect-auto md:h-full md:min-h-[280px]' : 'aspect-video'
                    )}
                  />
                </div>
                <div className={cn('p-6 flex flex-col justify-center', isFeatured && 'md:p-8')}>
                  <span className="block text-[0.62rem] tracking-[0.16em] uppercase text-gold-mid mb-2">
                    {AREA_LABELS[p.area]}
                  </span>
                  <h3 className="font-display text-[1.4rem] text-navy-deep mb-2 group-hover:text-gold-mid transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-navy-deep/55 text-sm leading-[1.6] mb-4 line-clamp-2">{p.description}</p>
                  <div className="flex items-center justify-between gap-3 mt-auto">
                    <span className="font-display text-xl gold-text-v font-bold">{p.price}</span>
                    <span className="inline-flex items-center gap-1 text-[0.72rem] tracking-[0.08em] uppercase text-navy-deep/60 font-semibold group-hover:text-gold-mid transition-colors">
                      View
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/properties#properties"
            className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.1em] uppercase text-navy-deep border border-gray-200 px-6 py-3 rounded-full hover:bg-gold-gradient hover:border-transparent transition-all font-semibold"
          >
            View all listings
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
