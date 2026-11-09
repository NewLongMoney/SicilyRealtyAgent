'use client'

import { useEffect, useMemo, useState } from 'react'
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
  ChevronLeft,
  Landmark,
  CreditCard,
  Phone,
  X,
} from 'lucide-react'
import type { Property } from '@/lib/data'
import { AREA_LABELS, CATEGORY_LABELS, WHATSAPP_BASE, DEVELOPER_ON_REQUEST, PHONE, PHONE_DISPLAY, PROPERTIES } from '@/lib/data'
import { osmEmbedUrl } from '@/lib/areas'
import { PropertyCard } from '@/components/ui/PropertyCard'
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
  const [lightbox, setLightbox] = useState(false)
  const gallery = images.length > 0 ? images : [property.image]
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(property.whatsappText)}`
  const brochureWa = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Hi Sicily, please share the brochure, floor plans, and current availability for ${property.name}.`
  )}`
  const devWaUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Hi Sicily, please share the full developer track record and delivery history for ${property.name}.`
  )}`
  const isDeveloperOnRequest =
    !property.developer || property.developer.toLowerCase().includes('on request')

  const similar = useMemo(() => {
    return PROPERTIES.filter(
      p => p.id !== property.id && (p.area === property.area || p.category === property.category)
    )
      .sort((a, b) => Math.abs(a.priceFrom - property.priceFrom) - Math.abs(b.priceFrom - property.priceFrom))
      .slice(0, 3)
  }, [property])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') setActiveImage(i => (i + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setActiveImage(i => (i - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, gallery.length])

  const residenceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: property.name,
    description: property.overview,
    url: `https://sicilyrealty.co.ke/properties/${property.id}`,
    image: gallery.slice(0, 6).map(src =>
      src.startsWith('http') ? src : `https://sicilyrealty.co.ke${src}`
    ),
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address ?? AREA_LABELS[property.area],
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
  }

  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: property.name,
    description: `${property.bedrooms} · ${property.price}`,
    url: `https://sicilyrealty.co.ke/properties/${property.id}`,
    priceCurrency: 'KES',
    price: property.priceFrom,
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'RealEstateAgent',
      name: 'Sicily Realty',
      telephone: '+254799124122',
      url: 'https://sicilyrealty.co.ke',
    },
  }

  return (
    <main className="min-h-screen bg-paper dark:bg-navy-deep pt-24 md:pt-[7.5rem] lg:pt-32 pb-28 md:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residenceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <Link
          href="/properties#properties"
          className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.14em] uppercase text-navy-deep/50 hover:text-gold-mid transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to all properties
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-start">
          <div>
            <button
              type="button"
              onClick={() => setLightbox(true)}
              className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(7,28,47,0.12)] border border-gray-100 group text-left"
            >
              <Image
                src={gallery[activeImage]}
                alt={`${property.name} — photo ${activeImage + 1}`}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-gold-gradient text-navy-deep text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
                  {STATUS_LABELS[property.status]}
                </span>
                <span className="bg-paper dark:bg-navy-deep/95 text-navy-deep text-[0.62rem] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {CATEGORY_LABELS[property.category]}
                </span>
              </div>
              <span className="absolute bottom-4 right-4 rounded-full bg-navy-deep/80 text-white text-[0.65rem] tracking-[0.12em] uppercase px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Open gallery
              </span>
            </button>

            {gallery.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-scroll-x">
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

            {gallery.length <= 2 && (
              <p className="mt-4 text-sm text-navy-deep/55 dark:text-white/50 italic">
                Professional photography &amp; virtual tour available on request — message Sicily on WhatsApp.
              </p>
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

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 mb-8 pb-8 border-b border-gray-100">
              <div className="min-w-0 rounded-xl bg-stats-warm/60 px-3 py-3 sm:bg-transparent sm:p-0">
                <p className="text-[0.6rem] tracking-[0.16em] uppercase text-navy-deep/40 dark:text-white/35 mb-1">From</p>
                <p className="font-display text-[1.35rem] sm:text-[2rem] gold-text-v font-bold leading-tight break-words">
                  {property.price}
                </p>
              </div>
              <div className="min-w-0 rounded-xl bg-stats-warm/60 px-3 py-3 sm:bg-transparent sm:p-0">
                <p className="text-[0.6rem] tracking-[0.16em] uppercase text-navy-deep/40 dark:text-white/35 mb-1">Layout</p>
                <p className="text-navy-deep font-semibold text-[0.88rem] sm:text-[0.95rem] leading-snug break-words">
                  {property.bedrooms}
                </p>
              </div>
              {property.completion && (
                <div className="min-w-0 rounded-xl bg-stats-warm/60 px-3 py-3 sm:bg-transparent sm:p-0">
                  <p className="text-[0.6rem] tracking-[0.16em] uppercase text-navy-deep/40 dark:text-white/35 mb-1 flex items-center gap-1">
                    <Calendar size={10} /> Completion
                  </p>
                  <p className="text-navy-deep font-semibold text-[0.88rem] sm:text-[0.95rem] break-words">
                    {property.completion}
                  </p>
                </div>
              )}
              {property.paymentPlanAvailable !== false && property.status !== 'complete' && (
                <div className="min-w-0 rounded-xl bg-stats-warm/60 px-3 py-3 sm:bg-transparent sm:p-0">
                  <p className="text-[0.6rem] tracking-[0.16em] uppercase text-navy-deep/40 dark:text-white/35 mb-1 flex items-center gap-1">
                    <CreditCard size={10} /> Payment
                  </p>
                  <p className="text-navy-deep font-semibold text-[0.88rem]">Plan available</p>
                </div>
              )}
            </div>

            <div className="rounded-xl border border-gray-100 bg-paper-soft dark:bg-navy-glow px-4 py-3.5 mb-6 flex items-start gap-3">
              <Landmark size={16} className="text-gold-mid flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-[0.58rem] tracking-[0.14em] uppercase text-navy-deep/45 dark:text-white/40 font-semibold mb-0.5">Developer</p>
                <p className="text-[0.88rem] text-navy-deep/75 dark:text-white/70 leading-[1.55]">
                  {property.developer ?? DEVELOPER_ON_REQUEST}
                </p>
                {isDeveloperOnRequest && (
                  <Link
                    href={devWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.06em] uppercase font-semibold text-navy-deep border border-navy-deep/10 dark:border-white/10 bg-paper dark:bg-navy-deep px-4 py-2.5 rounded-full hover:border-gold/40 hover:text-gold-mid transition-all"
                  >
                    <MessageCircle size={14} />
                    Request developer track record via WhatsApp
                  </Link>
                )}
              </div>
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
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-navy-deep/10 dark:border-white/10 text-navy-deep font-semibold text-[0.82rem] tracking-[0.08em] uppercase px-7 py-4 rounded-full hover:border-gold/40 hover:text-gold-mid transition-all"
              >
                <Phone size={16} />
                Call {PHONE_DISPLAY}
              </Link>
            </div>
            <Link
              href={brochureWa}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 text-[0.78rem] tracking-[0.08em] uppercase text-navy-deep/70 hover:text-gold-mid transition-colors font-semibold"
            >
              Request brochure &amp; floor plans
              <ChevronRight size={16} />
            </Link>

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
                        <tr className="bg-paper-soft dark:bg-navy-glow border-b border-gray-100">
                          <th className="px-5 py-3.5 text-[0.65rem] tracking-[0.14em] uppercase text-navy-deep/50 font-semibold">Unit</th>
                          <th className="px-5 py-3.5 text-[0.65rem] tracking-[0.14em] uppercase text-navy-deep/50 font-semibold">Size</th>
                          <th className="px-5 py-3.5 text-[0.65rem] tracking-[0.14em] uppercase text-navy-deep/50 font-semibold">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {property.units.map((unit, i) => (
                          <tr key={`${unit.label}-${i}`} className="border-b border-gray-50 last:border-0 hover:bg-paper-soft dark:bg-navy-glow/60 transition-colors">
                            <td className="px-5 py-4 text-[0.92rem] text-navy-deep font-medium">{unit.label}</td>
                            <td className="px-5 py-4 text-[0.88rem] text-navy-deep/55 dark:text-white/50">{unit.size ?? '—'}</td>
                            <td className="px-5 py-4 text-[0.92rem] text-gold-mid font-semibold">{unit.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {property.paymentPlanAvailable !== false && property.status !== 'complete' && (
                  <p className="mt-4 text-sm text-navy-deep/60 flex items-start gap-2">
                    <CreditCard size={15} className="text-gold-mid flex-shrink-0 mt-0.5" />
                    Flexible payment plans available — enquire for schedule via WhatsApp.
                  </p>
                )}
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

            <section>
              <h2 className="font-display text-[1.75rem] text-navy-deep mb-5 after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-gradient after:mt-3">
                Location · {AREA_LABELS[property.area]}
              </h2>
              <p className="text-navy-deep/60 text-sm mb-4">
                Map centred on the {AREA_LABELS[property.area]} neighbourhood. Exact building pins are shared on request after your brief.
              </p>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src={osmEmbedUrl(property.area)}
                  width="100%"
                  height="280"
                  className="border-0"
                  loading="lazy"
                  title={`${property.name} — ${AREA_LABELS[property.area]}, Nairobi`}
                />
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            {property.highlights && property.highlights.length > 0 && (
              <div className="rounded-2xl border border-gray-100 bg-paper-soft dark:bg-navy-glow p-6 shadow-sm">
                <h3 className="font-display text-xl text-navy-deep mb-4">Property Highlights</h3>
                <ul className="space-y-3">
                  {property.highlights.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[0.88rem] text-navy-deep/65 dark:text-white/60 leading-[1.6]">
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
                    <li key={item} className="flex items-start gap-2 text-[0.88rem] text-navy-deep/65 dark:text-white/60 leading-[1.6]">
                      <CheckCircle2 size={14} className="text-gold-mid flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl bg-navy-deep p-6 text-white shadow-[0_20px_50px_rgba(7,28,47,0.25)]">
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
              <Link
                href={`tel:${PHONE}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-white/20 text-white font-semibold text-[0.78rem] tracking-[0.08em] uppercase py-3.5 rounded-full hover:bg-paper dark:bg-navy-deep/5 transition-colors"
              >
                Call {PHONE_DISPLAY}
              </Link>
            </div>
          </aside>
        </div>

        {gallery.length > 1 && (
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
                    setLightbox(true)
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

        {similar.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-[1.75rem] text-navy-deep mb-8 after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-gradient after:mt-3">
              Similar residences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-[64px] inset-x-0 z-40 md:hidden px-3 pb-2 pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-lg grid grid-cols-2 gap-2 rounded-2xl bg-navy-deep/95 backdrop-blur border border-gold/20 p-2 shadow-[0_12px_40px_rgba(3,8,16,0.45)]">
          <Link
            href={waUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-1.5 bg-gold-gradient text-navy-deep font-bold text-[0.68rem] tracking-[0.06em] uppercase py-3 rounded-xl"
          >
            <MessageCircle size={14} /> WhatsApp
          </Link>
          <Link
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-1.5 bg-paper dark:bg-navy-deep text-navy-deep font-bold text-[0.68rem] tracking-[0.06em] uppercase py-3 rounded-xl"
          >
            <Phone size={14} /> Call
          </Link>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] bg-navy-deep/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`${property.name} gallery`}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <p className="text-[0.75rem] tracking-[0.12em] uppercase text-gold">
              {activeImage + 1} / {gallery.length}
            </p>
            <button
              type="button"
              onClick={() => setLightbox(false)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-sm hover:bg-paper dark:bg-navy-deep/10"
            >
              <X size={16} /> Close
            </button>
          </div>
          <div className="relative flex-1 mx-3 mb-3 rounded-2xl overflow-hidden">
            <Image
              src={gallery[activeImage]}
              alt={`${property.name} — photo ${activeImage + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => setActiveImage(i => (i - 1 + gallery.length) % gallery.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-paper dark:bg-navy-deep/90 text-navy-deep flex items-center justify-center hover:bg-paper dark:bg-navy-deep"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() => setActiveImage(i => (i + 1) % gallery.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-paper dark:bg-navy-deep/90 text-navy-deep flex items-center justify-center hover:bg-paper dark:bg-navy-deep"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
