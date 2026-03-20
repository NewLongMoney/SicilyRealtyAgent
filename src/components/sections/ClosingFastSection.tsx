import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WHATSAPP_BASE } from '@/lib/data'
import type { Property } from '@/lib/data'
import { cn } from '@/lib/utils'

interface Props { properties: Property[] }

export function ClosingFastSection({ properties }: Props) {
  return (
    <section id="best-sellers" className="py-[120px] bg-navy-mid">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Moving Fast"
          title="Closing Fast"
          subtitle="These residences are moving. If something catches your eye, the time to start the conversation is now."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {properties.map((p, i) => {
            const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(p.whatsappText)}` 
            const isFeatured = i === 0
            return (
              <div
                key={p.id}
                className={cn(
                  'group card-dark rounded-2xl overflow-hidden',
                  'transition-all duration-400',
                  'hover:-translate-y-2 hover:border-gold/35',
                  'hover:shadow-[0_24px_60px_rgba(3,8,16,0.6)]',
                  isFeatured ? 'md:col-span-2' : 'md:col-span-1'
                )}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} for sale in Nairobi`}
                    width={800}
                    height={isFeatured ? 533 : 400}
                    className={cn(
                      'w-full object-cover transition-transform duration-500',
                      'group-hover:scale-[1.05]',
                      isFeatured ? 'aspect-[3/2]' : 'aspect-video'
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="block text-[0.62rem] tracking-[0.16em] uppercase text-gold/70 mb-1">
                      {p.area.charAt(0).toUpperCase() + p.area.slice(1)}
                    </span>
                    <h3 className="font-display text-xl text-white mb-1">{p.name}</h3>
                    <p className="text-sicily-body/75 text-sm">{p.description}</p>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <span className="font-display text-xl gold-text-v font-bold">{p.price}</span>
                  <Link
                    href={waUrl} target="_blank" rel="noopener"
                    className="text-[0.75rem] tracking-[0.08em] uppercase text-gold border border-gold/30 px-4 py-2 rounded-full hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent transition-all font-semibold"
                  >
                    Enquire Now →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
