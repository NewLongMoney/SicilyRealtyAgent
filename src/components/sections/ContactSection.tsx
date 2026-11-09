'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EMAIL, PHONE, WHATSAPP_BASE, PHONE_DISPLAY, ADVISOR } from '@/lib/data'
import { Mail, MapPin, Phone } from 'lucide-react'

type FormState = {
  name: string; phone: string; email: string
  intent: string; message: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', email: '', intent: '', message: ''
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone) return

    const lines = [
      `Hi Sicily, my name is ${form.name}.`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : '',
      form.intent ? `What I am looking for: ${form.intent}` : '',
      form.message ? `Additional requirements: ${form.message}` : '',
    ].filter(Boolean)

    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer')
  }

  const inputClass = "bg-navy-light/30 border-gold/20 text-white placeholder:text-sicily-muted focus:border-gold/55 focus:bg-navy-light/45 rounded-lg h-12 text-[0.92rem] transition-colors"
  const labelClass = "block text-[0.68rem] tracking-[0.14em] uppercase text-gold/85 font-semibold mb-2"

  return (
    <section id="contact" className="py-16 md:py-20 bg-white border-t border-section-divider">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let&apos;s Talk Property"
          subtitle="Share your brief and we will open a prefilled WhatsApp conversation so your enquiry reaches Sicily Realty instantly and with full context."
        />

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 mt-16 items-start">

          {/* Form */}
          <div className="card-dark p-10 md:p-12 shadow-[0_20px_60px_rgba(3,8,16,0.5)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={labelClass}>Full Name *</label>
                <Input name="name" value={form.name} onChange={handleChange}
                  placeholder="e.g. Jane Wanjiku" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone Number *</label>
                <Input name="phone" value={form.phone} onChange={handleChange}
                  placeholder="+254 7XX XXX XXX" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email (Optional)</label>
                <Input name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="jane@email.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>What are you looking for?</label>
                <select
                  name="intent" value={form.intent} onChange={handleChange}
                  className={`${inputClass} w-full px-3 appearance-none bg-navy-light/30 border border-gold/20`}
                >
                  <option value="">Select an option...</option>
                  <option value="I am ready to buy">I am ready to buy</option>
                  <option value="I want my money working in property">I want my money working in property</option>
                  <option value="I want a private viewing">I want a private viewing</option>
                  <option value="I am buying from abroad">I am buying from abroad</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Additional Requirements</label>
                <Textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell us more about your preferred area, budget, timeline, or unit type..."
                  className={`${inputClass} h-28 resize-none`} />
              </div>
              <p className="text-[0.78rem] leading-[1.7] text-navy-deep/55">
                This sends your brief to {ADVISOR.name} at Sicily Realty through WhatsApp with your details prefilled.
              </p>
              <Button
                type="submit"
                className="w-full h-14 bg-gold-gradient text-navy-deep font-bold text-[0.88rem] tracking-[0.12em] uppercase rounded-lg shadow-[0_6px_20px_rgba(229,169,60,0.25)] hover:shadow-[0_10px_32px_rgba(229,169,60,0.4)] hover:-translate-y-px transition-all border-0"
              >
                Continue on WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8 pt-2">
            {[
              { icon: MapPin, label: 'Address', value: 'Westlands, Nairobi, Kenya' },
              { icon: Mail,   label: 'Email',   value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Phone,  label: 'Phone',   value: PHONE_DISPLAY, href: `tel:${PHONE}` },
            ].map(item => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.16em] uppercase text-gold/70 font-semibold mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-navy-deep hover:text-gold-mid transition-colors text-[0.95rem] tabular-nums">{item.value}</a>
                  ) : (
                    <p className="text-navy-deep text-[0.95rem]">{item.value}</p>
                  )}
                  {item.label === 'Email' && (
                    <p className="text-[0.72rem] text-navy-deep/45 mt-1">Official inbox for sicilyrealty.co.ke</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map — OSM Westlands centroid (no API key). Exact office pin pending client address. */}
            <div className="mt-4 rounded-xl overflow-hidden border border-gold/15 shadow-sm">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.7855%2C-1.2820%2C36.8355%2C-1.2520&layer=mapnik&marker=-1.2670%2C36.8105"
                width="100%"
                height="220"
                className="border-0"
                allowFullScreen
                loading="lazy"
                title="Sicily Realty — Westlands, Nairobi"
              />
              <p className="px-3 py-2 text-[0.7rem] text-navy-deep/50 bg-white border-t border-gold/10">
                Meetings in Westlands, Nairobi — exact pin shared when you book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
