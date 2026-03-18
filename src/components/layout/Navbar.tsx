'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { PHONE, AREAS } from '@/lib/data'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '#about', label: 'About Us' },
  { href: '#insights', label: 'Insights' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact Us' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
            ? 'bg-navy-deep/96 backdrop-blur-xl border-b border-gold-dim shadow-2xl'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-main.png"
              alt="Sicily Realty"
              width={160}
              height={52}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.75rem] tracking-[0.1em] uppercase text-sicily-body hover:text-gold-bright transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="text-gold text-sm font-medium tracking-wide hover:text-gold-bright transition-colors flex items-center gap-2"
            >
              <Phone size={14} />
              +254 799 124 122
            </a>
            <Button
              asChild
              className="bg-gold-gradient text-navy-deep font-bold text-[0.8rem] tracking-wider uppercase rounded-full px-6 hover:opacity-90 transition-opacity shadow-lg hover:shadow-gold/30"
            >
              <Link href="#contact">Book a Viewing</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="w-11 h-11 flex items-center justify-center bg-gold-dim border border-gold/25 rounded-xl">
                <Menu size={20} className="text-white" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-navy-deep border-l border-gold-dim w-[300px] p-8"
            >
              <div className="flex flex-col gap-8 mt-8">
                <Image
                  src="/images/logo-main.png"
                  alt="Sicily Realty"
                  width={140}
                  height={44}
                  className="h-10 w-auto"
                />
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-2xl text-white hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <a
                  href={`tel:${PHONE}`}
                  className="text-gold font-medium flex items-center gap-2"
                >
                  <Phone size={16} />
                  +254 799 124 122
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Areas strip — desktop only */}
      <div
        className={cn(
          'fixed top-[72px] left-0 right-0 z-40 hidden md:block transition-all duration-400',
          'bg-navy-mid/92 backdrop-blur-lg border-b border-gold-dim/50'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-8 py-2.5 flex items-center gap-4 flex-wrap">
          <span className="text-[0.6rem] tracking-[0.18em] uppercase text-gold font-semibold">
            Focus Areas:
          </span>
          {AREAS.map((area, i) => (
            <span key={area} className="flex items-center gap-4">
              <Link
                href={`/properties?area=${area.toLowerCase()}`}
                className="text-[0.72rem] tracking-[0.1em] uppercase text-sicily-body hover:text-gold transition-colors"
              >
                {area}
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
