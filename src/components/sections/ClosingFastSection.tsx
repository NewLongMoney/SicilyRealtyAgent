import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WHATSAPP_BASE } from '@/lib/data'
import type { Property } from '@/lib/data'

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
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6 mt-14">
          {properties.slice(0, 2).map((p, i) => {
            const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(p.whatsappText)}` 
            return (
              <div key={p.id} className="group card-dark rounded-2xl overflow-hidden transition-all duration-400 ease-luxury hover:-translate-y-2 hover:border-gold/35 hover:shadow-[0_24px_60px_rgba(3,8,16,0.6)]">
                <div className="relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={800}
                    height={i === 0 ? 533 : 400}
                    className={`w-full object-cover transition-transform duration-600 ease-luxury group-hover:scale-[1.05] ${i === 0 ? 'aspect-[3/2]' : 'aspect-video'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-xl text-white mb-1">{p.name}</h3>
                    <p className="text-sicily-body/80 text-sm">{p.description}</p>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <span className="font-display text-xl gold-text-v font-bold">{p.price}</span>
                  <Link href={waUrl} target="_blank" rel="noopener"
                    className="text-[0.75rem] tracking-[0.08em] uppercase text-gold border border-gold/30 px-4 py-2 rounded-full hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent transition-all font-semibold">
                    Learn More →
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
