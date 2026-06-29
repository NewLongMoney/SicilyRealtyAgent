'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  ChevronRight,
} from 'lucide-react'
import type { Property } from '@/lib/data'
import { AREA_LABELS, CATEGORY_LABELS, WHATSAPP_BASE } from '@/lib/data'
import { cn } from '@/lib/utils'

const STATUS_LABELS: Record<Property['status'], string> = {
  bestseller: 'Featured',
  new: 'New Listing',
  offplan: 'Off-Plan',
  complete: 'Ready',
}

interface Props {
  property: Property
  images: string[]
}

export function PropertyDetail({ property, images }: Props) {
  const [activeImage, setActiveImage] = useState(0)
  const gallery = images.length > 0 ? images : [property.image]
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(property.whatsappText)}`

  return (
    <main className="min-h-screen bg-white pt-28 md:pt-36 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <Link
          href="/properties#properties"
          className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.14em] uppercase text-navy-deep/50 hover:text-gold-mid transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to all properties
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-start">
          <div>
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(7,28,47,0.12)] border border-gray-100">
              <Image
                src={gallery[activeImage]}
                alt={`${property.name} — photo ${activeImage + 1}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-gold-gradient text-navy-deep text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
                  {STATUS_LABELS[property.status]}
                </span>
                <span className="bg-white/95 text-navy-deep text-[0.62rem] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {CATEGORY_LABELS[property.category]}
                </span>
              </div>
            </div>

            {gallery.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-custom">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'relative flex-shrink-0 w-20 h-16 md:w-24 md:h-[4.5rem] rounded-xl overflow-hidden border-2 transition-all duration-300',
                      activeImage === i
                        ? 'border-gold-mid shadow-md scale-[1.02]'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    )}
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="96px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-36">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-gold-mid font-semibold mb-3 flex items-center gap-2">
              <MapPin size={12} />
              {AREA_LABELS[property.area]}
            </p>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-navy-deep leading-[1.08] mb-3">
              {property.name}
            </h1>
            <p className="text-navy-deep/60 text-[0.95rem] leading-[1.75] mb-6">
              {property.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-gray-100">
              <div>
                <p className="text-[0.6rem] tracking-[0.16em] uppercase text-navy-deep/40 mb-1">From</p>
                <p className="font-display text-[2rem] gold-text-v font-bold leading-none">{property.price}</p>
              </div>
              <div>
                <p className="text-[0.6rem] tracking-[0.16em] uppercase text-navy-deep/40 mb-1">Layout</p>
                <p className="text-navy-deep font-semibold text-[0.95rem]">{property.bedrooms}</p>
              </div>
              {property.completion && (
                <div>
                  <p className="text-[0.6rem] tracking-[0.16em] uppercase text-navy-deep/40 mb-1 flex items-center gap-1">
                    <Calendar size={10} /> Completion
                  </p>
                  <p className="text-navy-deep font-semibold text-[0.95rem]">{property.completion}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.82rem] tracking-[0.08em] uppercase px-7 py-4 rounded-full shadow-lg hover:shadow-gold/30 hover:scale-[1.02] transition-all"
              >
                <MessageCircle size={16} />
                Book a Site Visit
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-navy-deep font-semibold text-[0.82rem] tracking-[0.08em] uppercase px-7 py-4 rounded-full hover:border-gold/40 hover:text-gold-mid transition-all"
              >
                Request Brochure
                <ChevronRight size={16} />
              </Link>
            </div>

            {property.address && (
              <p className="mt-6 text-[0.85rem] text-navy-deep/50 flex items-start gap-2">
                <Building2 size={14} className="text-gold-mid flex-shrink-0 mt-0.5" />
                {property.address}
              </p>
            )}
          </div>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_340px]">
          <div className="space-y-16 min-w-0">
            <section>
              <h2 className="font-display text-[1.75rem] text-navy-deep mb-5 after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-gradient after:mt-3">
                Overview
              </h2>
              <p className="text-navy-deep/70 text-[1rem] leading-[1.85]">{property.overview}</p>
            </section>

            {property.units && property.units.length > 0 && (
              <section>
                <h2 className="font-display text-[1.75rem] text-navy-deep mb-6 after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-gradient after:mt-3">
                  Unit Types &amp; Prices
                </h2>
                <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[480px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="px-5 py-3.5 text-[0.65rem] tracking-[0.14em] uppercase text-navy-deep/50 font-semibold">Unit</th>
                          <th className="px-5 py-3.5 text-[0.65rem] tracking-[0.14em] uppercase text-navy-deep/50 font-semibold">Size</th>
                          <th className="px-5 py-3.5 text-[0.65rem] tracking-[0.14em] uppercase text-navy-deep/50 font-semibold">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {property.units.map((unit, i) => (
                          <tr key={`${unit.label}-${i}`} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors">
                            <td className="px-5 py-4 text-[0.92rem] text-navy-deep font-medium">{unit.label}</td>
                            <td className="px-5 py-4 text-[0.88rem] text-navy-deep/55">{unit.size ?? '—'}</td>
                            <td className="px-5 py-4 text-[0.92rem] text-gold-mid font-semibold">{unit.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {property.amenities && property.amenities.length > 0 && (
              <section>
                <h2 className="font-display text-[1.75rem] text-navy-deep mb-6 after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-gradient after:mt-3">
                  Amenities
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {property.amenities.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-navy-deep/70">
                      <CheckCircle2 size={16} className="text-gold-mid flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            {property.highlights && property.highlights.length > 0 && (
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <h3 className="font-display text-xl text-navy-deep mb-4">Property Highlights</h3>
                <ul className="space-y-3">
                  {property.highlights.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[0.88rem] text-navy-deep/65 leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-mid flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {property.investmentPoints && property.investmentPoints.length > 0 && (
              <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-6">
                <h3 className="font-display text-xl text-navy-deep mb-4">Why Invest Here</h3>
                <ul className="space-y-3">
                  {property.investmentPoints.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[0.88rem] text-navy-deep/65 leading-[1.6]">
                      <CheckCircle2 size={14} className="text-gold-mid flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl bg-navy-deep p-6 text-white">
              <p className="text-[0.65rem] tracking-[0.16em] uppercase text-gold-bright font-semibold mb-2">Next Step</p>
              <p className="font-display text-xl leading-[1.35] mb-5">
                Ready to view {property.name}?
              </p>
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex w-full items-center justify-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.78rem] tracking-[0.08em] uppercase py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Message on WhatsApp
              </Link>
            </div>
          </aside>
        </div>

        {gallery.length > 3 && (
          <section className="mt-20">
            <h2 className="font-display text-[1.75rem] text-navy-deep mb-8 after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-gradient after:mt-3">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((src, i) => (
                <button
                  key={`${src}-grid-${i}`}
                  type="button"
                  onClick={() => {
                    setActiveImage(i)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group"
                >
                  <Image
                    src={src}
                    alt={`${property.name} gallery ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
