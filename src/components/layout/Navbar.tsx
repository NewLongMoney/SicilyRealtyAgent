'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, Phone, MapPin, Home, Mail, ChevronDown, Building2, Users } from 'lucide-react'
import { PHONE, PHONE_DISPLAY, AREAS } from '@/lib/data'
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
      { href: '/properties?intent=sale', label: 'All for Sale' },
    ],
  },
  {
    label: 'Listings',
    icon: MapPin,
    items: [
      { href: '/properties?type=apartments', label: 'Apartments' },
      { href: '/properties?type=villas', label: 'Villas' },
      { href: '/properties', label: 'All Listings' },
    ],
  },
]

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#about', label: 'About', icon: Users },
  { href: '/#contact', label: 'Contact', icon: Mail },
]

function NavDropdownMenu({ dropdown }: { dropdown: NavDropdown }) {
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
          'text-[0.7rem] tracking-[0.06em] uppercase transition-colors duration-200',
          'flex items-center gap-1 py-2 text-navy-deep/75 hover:text-gold-mid',
          open && 'text-gold-mid'
        )}
      >
        <dropdown.icon size={13} />
        {dropdown.label}
        <ChevronDown size={11} className={cn('transition-transform duration-200', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="min-w-[168px] rounded-xl border border-gray-200 bg-white shadow-lg py-2">
            {dropdown.items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-[0.72rem] tracking-[0.04em] uppercase text-navy-deep/75 hover:text-gold-mid hover:bg-gray-50 transition-colors"
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
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-3">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 min-w-0">
            <Image
              src="/images/logo-main.png"
              alt="Sicily Realty"
              width={200}
              height={64}
              className="h-11 sm:h-12 w-auto object-contain"
              priority
            />
            <div className="hidden md:block leading-tight min-w-0">
              <span className="block font-display text-lg lg:text-xl font-bold text-navy-deep tracking-tight truncate">
                Sicily Realty
              </span>
              <span className="block text-[0.55rem] lg:text-[0.58rem] tracking-[0.14em] uppercase text-gold-mid font-semibold">
                Property Advisory
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.7rem] tracking-[0.06em] uppercase flex items-center gap-1.5 py-2 text-navy-deep/75 hover:text-gold-mid transition-colors whitespace-nowrap"
              >
                <link.icon size={13} />
                {link.label}
              </Link>
            ))}

            {NAV_DROPDOWNS.map(dropdown => (
              <NavDropdownMenu key={dropdown.label} dropdown={dropdown} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${PHONE}`}
              className="hidden lg:flex items-center gap-2.5 text-navy-deep hover:text-gold-mid transition-colors group flex-shrink-0"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <span className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                <Phone size={15} className="text-gold-mid" />
              </span>
              <span className="text-[0.95rem] font-semibold tracking-wide tabular-nums whitespace-nowrap">
                {PHONE_DISPLAY}
              </span>
            </a>
            <Button
              asChild
              className="bg-gold-gradient text-navy-deep font-bold text-[0.72rem] tracking-wider uppercase rounded-full px-5 h-10 shadow-sm hover:shadow-md transition-all border-0 whitespace-nowrap"
            >
              <Link href="/#contact">Book a Viewing</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg"
                aria-label="Open menu"
              >
                <Menu size={20} className="text-navy-deep" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-gray-200 w-[300px] p-6 overflow-y-auto">
              <div className="flex flex-col gap-6 mt-6">
                <div>
                  <div className="font-display text-xl text-navy-deep font-bold">Sicily Realty</div>
                  <div className="text-[0.58rem] tracking-[0.14em] uppercase text-gold-mid font-semibold mt-1">
                    Property Advisory
                  </div>
                </div>

                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-[0.95rem] text-navy-deep hover:text-gold-mid flex items-center gap-2.5"
                    >
                      <link.icon size={17} />
                      {link.label}
                    </Link>
                  ))}

                  {NAV_DROPDOWNS.map(dropdown => (
                    <div key={dropdown.label}>
                      <p className="text-[0.62rem] tracking-[0.12em] uppercase text-gold-mid font-semibold mb-2">
                        {dropdown.label}
                      </p>
                      <div className="pl-3 flex flex-col gap-2">
                        {dropdown.items.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-[0.88rem] text-navy-deep/75 hover:text-gold-mid"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>

                <div className="border-t border-gray-200 pt-5 space-y-4">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-3 text-navy-deep font-semibold tabular-nums"
                  >
                    <Phone size={18} className="text-gold-mid" />
                    {PHONE_DISPLAY}
                  </a>
                  <Button asChild className="w-full bg-gold-gradient text-navy-deep font-bold rounded-full border-0">
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

      <div className="fixed top-[72px] left-0 right-0 z-40 hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-3 flex-wrap">
          <span className="text-[0.56rem] tracking-[0.14em] uppercase text-gold-mid font-semibold flex items-center gap-1.5 flex-shrink-0">
            <MapPin size={10} />
            Areas
          </span>
          {AREAS.map((area, i) => (
            <span key={area} className="flex items-center gap-3">
              <Link
                href={`/properties?area=${area.toLowerCase()}`}
                className="text-[0.65rem] tracking-[0.06em] uppercase text-navy-deep/60 hover:text-gold-mid transition-colors whitespace-nowrap"
              >
                {area}
              </Link>
              {i < AREAS.length - 1 && <span className="text-gray-300">·</span>}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
