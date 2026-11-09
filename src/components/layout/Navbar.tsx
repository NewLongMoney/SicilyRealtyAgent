'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone } from 'lucide-react'
import { PHONE, PHONE_DISPLAY, AREAS } from '@/lib/data'
import { BrandMark } from '@/components/brand/BrandMark'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/properties', label: 'Residences' },
  { href: '/#about', label: 'Advisory' },
  { href: '/#insights', label: 'Market' },
  { href: '/#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-paper/90 dark:bg-navy-deep/90 backdrop-blur-md border-b border-navy-deep/8 dark:border-white/8'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-[76px] flex items-center justify-between gap-4">
        <BrandMark size="md" />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.68rem] tracking-[0.22em] uppercase text-navy-deep/70 dark:text-white/70 hover:text-gold-mid dark:hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={`tel:${PHONE}`}
            className="hidden md:inline-flex items-center gap-2 h-10 px-4 rounded-full border border-navy-deep/15 dark:border-white/15 text-[0.68rem] tracking-[0.14em] uppercase text-navy-deep dark:text-white hover:border-gold/60 hover:text-gold-mid dark:hover:text-gold transition-colors"
          >
            <Phone size={13} strokeWidth={1.6} />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center h-10 px-5 rounded-full bg-navy-deep dark:bg-gold text-paper dark:text-navy-deep text-[0.68rem] tracking-[0.16em] uppercase font-semibold hover:bg-navy-mid dark:hover:bg-gold-bright transition-colors"
          >
            Enquire
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-deep/15 dark:border-white/15 text-navy-deep dark:text-white"
              >
                <Menu size={18} strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,360px)] bg-paper dark:bg-navy-deep border-l border-navy-deep/10 dark:border-white/10 p-0"
            >
              <div className="flex flex-col h-full pt-16 px-8 pb-10">
                <BrandMark size="lg" href="" />
                <nav className="mt-12 flex flex-col gap-1">
                  {NAV.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl text-navy-deep dark:text-white py-2 hover:text-gold-mid dark:hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto space-y-4">
                  <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold-mid">Areas</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-navy-deep/70 dark:text-white/60">
                    {AREAS.map((a) => (
                      <Link key={a} href={`/properties?area=${a.toLowerCase()}`} onClick={() => setOpen(false)} className="hover:text-gold-mid">
                        {a}
                      </Link>
                    ))}
                  </div>
                  <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 text-navy-deep dark:text-white mt-6">
                    <Phone size={14} /> {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
