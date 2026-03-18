'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EMAIL, PHONE, WHATSAPP_BASE } from '@/lib/data'
import { CheckCircle, Mail, MapPin, Phone } from 'lucide-react'

type FormState = {
  name: string; phone: string; email: string
  intent: string; message: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', email: '', intent: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = "bg-navy-light/30 border-gold/20 text-white placeholder:text-sicily-muted focus:border-gold/55 focus:bg-navy-light/45 rounded-lg h-12 text-[0.92rem] transition-colors"
  const labelClass = "block text-[0.68rem] tracking-[0.14em] uppercase text-gold/85 font-semibold mb-2"

  return (
    <section id="contact" className="py-[120px] bg-navy-deep">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let&apos;s Talk Property"
          subtitle="Tell us what you're looking for. We'll come back with something worth your time — not a generic callback."
        />

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 mt-16 items-start">

          {/* Form */}
          <div className="card-dark rounded-2xl p-10 shadow-[0_20px_60px_rgba(3,8,16,0.5)]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="text-navy-deep" size={24} />
                </div>
                <h3 className="font-display text-xl text-white mb-3">Enquiry Received</h3>
                <p className="text-sicily-body/80 text-sm leading-relaxed">
                  We&apos;ll be in touch within 24 hours. For urgent enquiries,{' '}
                  <a href={WHATSAPP_BASE} className="text-gold hover:text-gold-bright transition-colors">
                    message us on WhatsApp
                  </a>.
                </p>
              </div>
            ) : (
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
                    <option value="buy">I am ready to buy</option>
                    <option value="sell">I have a property to sell</option>
                    <option value="invest">I want my money working in property</option>
                    <option value="rent">I am looking for a rental</option>
                    <option value="viewing">I want a private viewing</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Additional Requirements</label>
                  <Textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us more about what you're looking for..."
                    className={`${inputClass} h-28 resize-none`} />
                </div>
                <Button
                  type="submit" disabled={loading}
                  className="w-full h-14 bg-gold-gradient text-navy-deep font-bold text-[0.88rem] tracking-[0.12em] uppercase rounded-lg shadow-[0_6px_20px_rgba(229,169,60,0.25)] hover:shadow-[0_10px_32px_rgba(229,169,60,0.4)] hover:-translate-y-px transition-all border-0"
                >
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8 pt-2">
            {[
              { icon: MapPin, label: 'Address', value: 'Westlands, Nairobi, Kenya' },
              { icon: Mail,   label: 'Email',   value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Phone,  label: 'Phone',   value: '+254 799 124 122', href: `tel:${PHONE}` },
            ].map(item => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon size={16} className="text-gold" />
                </div>
                <div>
                  <p className="text-[0.65rem] tracking-[0.16em] uppercase text-gold/70 font-semibold mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white hover:text-gold-bright transition-colors text-[0.95rem]">{item.value}</a>
                  ) : (
                    <p className="text-white text-[0.95rem]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="mt-4 rounded-xl overflow-hidden border border-gold/15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8196!2d36.8031!3d-1.2673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0x46e3b0de38c1b47a!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1"
                width="100%"
                height="220"
                className="border-0 opacity-80"
                style={{ filter: 'invert(0.88) hue-rotate(180deg) saturate(0.8)' }}
                allowFullScreen
                loading="lazy"
                title="Sicily Realty — Westlands, Nairobi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
