import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WHATSAPP_BASE } from '@/lib/data'
import type { InsightArticle } from '@/lib/data'

interface Props { articles: InsightArticle[] }

export function InsightsSection({ articles }: Props) {
  return (
    <section id="insights" className="py-[120px] bg-navy-mid">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Market Intelligence"
          title="Intelligence, Not Noise"
          subtitle="The Nairobi property market moves fast. Here is what is actually happening — and what it means for your next move."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {articles.map(article => (
            <article
              key={article.id}
              className="card-dark rounded-2xl overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:border-gold/35 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="block text-[0.62rem] tracking-[0.16em] uppercase text-gold font-semibold mb-2.5">
                  {article.date} · {article.category}
                </span>
                <h3 className="font-display text-[1.08rem] text-white leading-[1.35] mb-3 transition-colors group-hover:text-gold-bright">
                  {article.title}
                </h3>
                <p className="text-[0.84rem] text-sicily-body/75 leading-[1.72] mb-4">
                  {article.excerpt}
                </p>

                {article.stats && article.stats.length > 0 && (
                  <div className="flex gap-6 py-3 border-y border-gold/10 mb-4">
                    {article.stats.map(s => (
                      <div key={s.label}>
                        <span className="block font-display text-[2.2rem] gold-text-v font-bold leading-none">{s.value}</span>
                        <span className="block text-[0.62rem] tracking-[0.12em] uppercase text-sicily-muted mt-1">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <span className="text-gold text-[0.78rem] font-semibold tracking-[0.06em]">
                  Read Analysis →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Market Brief CTA */}
        <div className="mt-16 text-center">
          <p className="text-white text-[1.05rem] mb-6">Want the full 2026 Sicily Market Brief?</p>
          <Link
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I'd like the 2026 Sicily Market Brief")}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-gold border border-gold/30 text-[0.85rem] font-semibold tracking-[0.06em] uppercase px-8 py-4 rounded-full hover:bg-gold-gradient hover:text-navy-deep hover:border-transparent transition-all duration-250"
          >
            Request via WhatsApp →
          </Link>
        </div>
      </div>
    </section>
  )
}
