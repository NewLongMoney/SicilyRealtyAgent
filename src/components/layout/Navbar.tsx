'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, Phone, MapPin, Home, Mail, HelpCircle, ChevronDown, Building2, Key } from 'lucide-react'
import { PHONE, AREAS } from '@/lib/data'
import { cn } from '@/lib/utils'

type NavDropdown = {
  label: string
  icon: typeof Home
  items: { href: string; label: string }[]
}

const NAV_DROPDOWNS: NavDropdown[] = [
  {
    label: 'For Sale',
    icon: Building2,
    items: [
      { href: '/properties?intent=sale&type=apartments', label: 'Apartments' },
      { href: '/properties?intent=sale&type=villas', label: 'Villas' },
    ],
  },
  {
    label: 'For Rent',
    icon: Key,
    items: [
      { href: '/properties?intent=rent&type=apartments', label: 'Apartments' },
      { href: '/properties?intent=rent&type=villas', label: 'Villas' },
    ],
  },
  {
    label: 'Listings',
    icon: MapPin,
    items: [
      { href: '/properties?type=apartments', label: 'Apartments' },
      { href: '/properties?type=villas', label: 'Villas' },
    ],
  },
]

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#faq-foreigners', label: 'Can Foreigners Buy Property', icon: HelpCircle },
  { href: '/#faq', label: 'Sicily Realty FAQ', icon: HelpCircle },
  { href: '/#contact', label: 'Contact Us', icon: Mail },
]

function NavDropdownMenu({
  dropdown,
  lightNav,
}: {
  dropdown: NavDropdown
  lightNav: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          'text-[0.72rem] tracking-[0.08em] uppercase transition-all duration-300 relative',
          'flex items-center gap-1.5 py-2',
          lightNav ? 'text-navy-deep/80 hover:text-gold-mid' : 'text-white/90 hover:text-gold-bright',
          open && (lightNav ? 'text-gold-mid' : 'text-gold-bright')
        )}
      >
        <dropdown.icon size={14} />
        {dropdown.label}
        <ChevronDown size={12} className={cn('transition-transform duration-300', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="min-w-[160px] rounded-xl border border-gray-200 bg-white shadow-lg shadow-black/10 py-2">
            {dropdown.items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-[0.72rem] tracking-[0.06em] uppercase text-navy-deep/75 hover:text-gold-mid hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const isHome = pathname === '/'
  const lightNav = scrolled || !isHome

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          lightNav
            ? 'bg-white/98 backdrop-blur-xl border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-[80px] flex items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0 group flex items-center gap-3">
            <Image
              src="/images/logo-main.png"
              alt="Sicily Realty"
              width={220}
              height={72}
              className="h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
              priority
            />
            <div className="hidden sm:block leading-tight">
              <span className={cn(
                'block font-display text-xl md:text-2xl font-bold tracking-tight transition-colors',
                lightNav ? 'text-navy-deep' : 'text-white'
              )}>
                Sicily Realty
              </span>
              <span className={cn(
                'block text-[0.6rem] tracking-[0.18em] uppercase font-semibold transition-colors',
                lightNav ? 'text-gold-mid' : 'text-gold-bright'
              )}>
                Nairobi Property Advisory
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            <Link
              href="/"
              onMouseEnter={() => setHoveredLink('/')}
              onMouseLeave={() => setHoveredLink(null)}
              className={cn(
                'text-[0.72rem] tracking-[0.08em] uppercase transition-all duration-300 relative',
                'flex items-center gap-1.5 py-2',
                lightNav ? 'text-navy-deep/80 hover:text-gold-mid' : 'text-white/90 hover:text-gold-bright',
                hoveredLink === '/' && (lightNav ? 'text-gold-mid' : 'text-gold-bright')
              )}
            >
              <Home size={14} />
              Home
            </Link>

            {NAV_DROPDOWNS.map(dropdown => (
              <NavDropdownMenu key={dropdown.label} dropdown={dropdown} lightNav={lightNav} />
            ))}

            {NAV_LINKS.slice(1).map(link => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={cn(
                  'text-[0.72rem] tracking-[0.08em] uppercase transition-all duration-300 relative',
                  'flex items-center gap-1.5 py-2 whitespace-nowrap',
                  lightNav ? 'text-navy-deep/80 hover:text-gold-mid' : 'text-white/90 hover:text-gold-bright',
                  hoveredLink === link.href && (lightNav ? 'text-gold-mid' : 'text-gold-bright')
                )}
              >
                <link.icon size={14} />
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="text-gold-mid text-sm font-medium tracking-wide hover:text-gold-bright transition-all duration-300 flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <Phone size={14} />
              </div>
              <span>+254 799 124 122</span>
            </a>
            <Button
              asChild
              className="bg-gold-gradient text-navy-deep font-bold text-[0.75rem] tracking-wider uppercase rounded-full px-5 shadow-md hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.02] border-0"
            >
              <Link href="/#contact" className="flex items-center gap-2">
                Book a Viewing
              </Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="w-11 h-11 flex items-center justify-center bg-gold/10 border border-gold/25 rounded-xl transition-all duration-300 hover:bg-gold/20">
                <Menu size={20} className={lightNav ? 'text-navy-deep' : 'text-white'} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white border-l border-gray-200 w-[320px] p-8 overflow-y-auto"
            >
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo-main.png"
                    alt="Sicily Realty"
                    width={180}
                    height={58}
                    className="h-12 w-auto"
                  />
                  <div>
                    <div className="font-display text-xl text-navy-deep font-bold">Sicily Realty</div>
                    <div className="text-[0.6rem] tracking-[0.16em] uppercase text-gold-mid font-semibold">
                      Nairobi Property Advisory
                    </div>
                  </div>
                </div>

                <nav className="flex flex-col gap-5">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="font-display text-lg text-navy-deep hover:text-gold-mid transition-colors flex items-center gap-3"
                  >
                    <Home size={18} />
                    Home
                  </Link>

                  {NAV_DROPDOWNS.map(dropdown => (
                    <div key={dropdown.label}>
                      <p className="text-[0.65rem] tracking-[0.14em] uppercase text-gold-mid font-semibold mb-2 flex items-center gap-2">
                        <dropdown.icon size={14} />
                        {dropdown.label}
                      </p>
                      <div className="pl-6 flex flex-col gap-2">
                        {dropdown.items.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-[0.9rem] text-navy-deep/75 hover:text-gold-mid transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {NAV_LINKS.slice(1).map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-[0.9rem] text-navy-deep hover:text-gold-mid transition-colors flex items-center gap-3"
                    >
                      <link.icon size={18} />
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <a
                    href={`tel:${PHONE}`}
                    className="text-gold-mid font-medium flex items-center gap-3 text-base"
                  >
                    <Phone size={18} />
                    +254 799 124 122
                  </a>
                  <Button
                    asChild
                    className="w-full bg-gold-gradient text-navy-deep font-bold text-[0.85rem] tracking-wider uppercase rounded-full py-3 border-0"
                  >
                    <Link href="/#contact" onClick={() => setOpen(false)}>
                      Book a Viewing
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div
        className={cn(
          'fixed top-[80px] left-0 right-0 z-40 hidden lg:block transition-all duration-400',
          lightNav
            ? 'bg-gray-50/95 backdrop-blur-lg border-b border-gray-200'
            : 'bg-navy-mid/92 backdrop-blur-lg border-b border-gold/20'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-2.5 flex items-center gap-4 flex-wrap">
          <span className={cn(
            'text-[0.58rem] tracking-[0.16em] uppercase font-semibold flex items-center gap-2',
            lightNav ? 'text-gold-mid' : 'text-gold'
          )}>
            <MapPin size={11} />
            Focus Areas:
          </span>
          {AREAS.map((area, i) => (
            <span key={area} className="flex items-center gap-4">
              <Link
                href={`/properties?area=${area.toLowerCase()}`}
                className={cn(
                  'text-[0.68rem] tracking-[0.08em] uppercase transition-all duration-300 hover:text-gold-mid',
                  lightNav ? 'text-navy-deep/65' : 'text-sicily-body hover:text-gold'
                )}
              >
                {area}
              </Link>
              {i < AREAS.length - 1 && (
                <span className={lightNav ? 'text-gray-300' : 'text-sicily-muted'}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
