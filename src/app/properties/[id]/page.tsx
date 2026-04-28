import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PROPERTIES, WHATSAPP_BASE } from '@/lib/data'

type Props = {
  params: Promise<{ id: string }>
}

const AMETHYST_GALLERY = [
  '/images/Amethyst/Entrance.jpg',
  '/images/Amethyst/enhanced_Living_Room.png',
  '/images/Amethyst/Arise.jpg',
  '/images/Amethyst/Rooftop lounge.jpg',
  '/images/Amethyst/251030_FINAL-RoofPool02_EMETHYST_Night.jpg',
  '/images/Amethyst/250908_D02_Rooftop Bar_V1_Op1-EMETHYST.jpg',
  '/images/Amethyst/magnifics_upscale-x9U1wBGYcAYaScMX17LE-2_people_sitted_young_beautiful_black_woman_and_man_in_comfortable_light_clothing_sitted_on_the_sof_ih3v8goq5jvyp6i1af23_0.png',
]

function getGallery(propertyId: string): string[] {
  if (propertyId === 'amethyst-springs') return AMETHYST_GALLERY
  return []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const property = PROPERTIES.find(p => p.id === id)

  if (!property) return {}

  return {
    title: `${property.name} | Gallery | Sicily Realty`,
    description: `${property.name} — ${property.bedrooms} in ${property.area}. Browse the full image gallery and request a private viewing.`,
    alternates: { canonical: `/properties/${property.id}` },
    openGraph: {
      title: `${property.name} | Sicily Realty`,
      description: `${property.name} — ${property.bedrooms} in ${property.area}.`,
      url: `/properties/${property.id}`,
      images: [{ url: property.image, width: 1200, height: 630 }],
    },
  }
}

export default async function PropertyGalleryPage({ params }: Props) {
  const { id } = await params
  const property = PROPERTIES.find(p => p.id === id)

  if (!property) notFound()

  const images = getGallery(property.id)
  const waUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(property.whatsappText)}`

  return (
    <main className="min-h-screen bg-navy-deep pt-24 md:pt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div className="min-w-0">
            <Link
              href="/properties#properties"
              className="inline-flex text-[0.7rem] tracking-[0.18em] uppercase text-gold/80 hover:text-gold transition-colors"
            >
              ← Back to gallery
            </Link>
            <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.08] text-white mt-3">
              {property.name}
            </h1>
            <p className="text-sicily-body/80 text-[0.98rem] leading-[1.75] max-w-[760px] mt-4">
              {property.description} · {property.bedrooms} · {property.area.charAt(0).toUpperCase() + property.area.slice(1)} · {property.price}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href={waUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-gold-gradient text-navy-deep font-bold text-[0.82rem] tracking-[0.08em] uppercase px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              Request a viewing
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(images.length > 0 ? images : [property.image]).map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="card-dark rounded-2xl overflow-hidden border border-gold/10"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`${property.name} photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 card-dark rounded-2xl border border-gold/12 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[0.68rem] tracking-[0.18em] uppercase text-gold/80 font-semibold mb-2">
              Next step
            </p>
            <p className="text-white text-[1.05rem] leading-[1.75]">
              Want a private viewing or the current availability sheet for {property.name}?
            </p>
          </div>
          <Link
            href={waUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-gold border border-gold/30 text-[0.82rem] font-semibold tracking-[0.08em] uppercase px-7 py-3.5 rounded-full hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent transition-all duration-250"
          >
            Message on WhatsApp →
          </Link>
        </div>
      </div>
    </main>
  )
}

