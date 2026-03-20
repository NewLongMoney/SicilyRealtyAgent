'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, MapPin, Home, Mail, Users, TrendingUp, HelpCircle } from 'lucide-react'
import { PHONE, AREAS } from '@/lib/data'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/properties', label: 'Properties', icon: MapPin },
  { href: '#about', label: 'About Us', icon: Users },
  { href: '#insights', label: 'Insights', icon: TrendingUp },
  { href: '#faq', label: 'FAQ', icon: HelpCircle },
  { href: '#contact', label: 'Contact Us', icon: Mail },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Main navbar */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-navy-deep/98 backdrop-blur-xl border-b border-gold-dim shadow-2xl shadow-black/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative">
              <Image
                src="/images/logo-main.png"
                alt="Sicily Realty"
                width={160}
                height={52}
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-gold/30"
              />
              <div className="absolute inset-0 bg-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </div>
          </Link>

          {/* Enhanced Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={cn(
                  'text-[0.75rem] tracking-[0.1em] uppercase transition-all duration-300 relative',
                  'flex items-center gap-2 py-2',
                  scrolled ? 'text-sicily-body hover:text-gold-bright' : 'text-white/90 hover:text-gold-bright',
                  hoveredLink === link.href && 'text-gold-bright scale-105'
                )}
              >
                <span className="transition-transform duration-300 hover:scale-110">
                  {typeof link.icon === 'string' ? link.icon : <link.icon size={14} />}
                </span>
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-px bg-gold-gradient transition-all duration-500 rounded-full',
                    hoveredLink === link.href ? 'w-full' : 'w-0'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Enhanced Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="text-gold text-sm font-medium tracking-wide hover:text-gold-bright transition-all duration-300 flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Phone size={14} className="transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="group-hover:scale-105 transition-transform duration-300">+254 799 124 122</span>
            </a>
            <Button
              asChild
              className="bg-gold-gradient text-navy-deep font-bold text-[0.8rem] tracking-wider uppercase rounded-full px-6 shadow-lg hover:shadow-gold/40 transition-all duration-300 hover:scale-105 hover:-translate-y-px border-0"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Book a Viewing
                <Phone size={14} />
              </Link>
            </Button>
          </div>

          {/* Enhanced Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="w-11 h-11 flex items-center justify-center bg-gold-dim border border-gold/25 rounded-xl transition-all duration-300 hover:bg-gold/20 hover:scale-105 hover:shadow-gold/30 group">
                <Menu size={20} className="text-white transition-transform duration-300 group-hover:scale-110" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-navy-deep/98 backdrop-blur-xl border-l border-gold-dim w-[320px] p-8"
            >
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/logo-main.png"
                    alt="Sicily Realty"
                    width={140}
                    height={44}
                    className="h-10 w-auto"
                  />
                  <div className="text-gold text-sm font-bold">Sicily Realty</div>
                </div>
                
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-xl text-white hover:text-gold transition-all duration-300 flex items-center gap-3 py-2 hover:translate-x-2 group"
                    >
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {typeof link.icon === 'string' ? link.icon : <link.icon size={20} />}
                      </span>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                
                <div className="border-t border-gold/20 pt-6 space-y-4">
                  <a
                    href={`tel:${PHONE}`}
                    className="text-gold font-medium flex items-center gap-3 text-lg hover:text-gold-bright transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <Phone size={18} />
                    </div>
                    <span className="group-hover:scale-105 transition-transform duration-300">+254 799 124 122</span>
                  </a>
                  
                  <Button
                    asChild
                    className="w-full bg-gold-gradient text-navy-deep font-bold text-[0.9rem] tracking-wider uppercase rounded-full py-3 shadow-lg hover:shadow-gold/40 transition-all duration-300 hover:scale-105 border-0"
                  >
                    <Link href="#contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2">
                      <Phone size={16} />
                      Book a Viewing
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Enhanced Areas strip — desktop only */}
      <div
        className={cn(
          'fixed top-[72px] left-0 right-0 z-40 hidden md:block transition-all duration-400',
          scrolled ? 'bg-navy-mid/96 backdrop-blur-lg border-b border-gold-dim/50' : 'bg-navy-mid/92 backdrop-blur-lg border-b border-gold/20'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-8 py-3 flex items-center gap-4 flex-wrap">
          <span className="text-[0.6rem] tracking-[0.18em] uppercase text-gold font-semibold flex items-center gap-2">
            <MapPin size={12} />
            Focus Areas:
          </span>
          {AREAS.map((area, i) => (
            <span key={area} className="flex items-center gap-4">
              <Link
                href={`/properties?area=${area.toLowerCase()}`}
                className="text-[0.72rem] tracking-[0.1em] uppercase text-sicily-body hover:text-gold transition-all duration-300 hover:scale-105 relative group"
              >
                {area}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
              {i < AREAS.length - 1 && (
                <span className="text-sicily-muted text-xs">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
