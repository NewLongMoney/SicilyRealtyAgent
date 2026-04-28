import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const siteUrl = new URL('https://sicilyrealty.co.ke')
const defaultOgImage = '/images/logo-main.png'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Sicily Realty | Luxury Property for Sale in Nairobi, Kenya — Kilimani & Westlands',
  description: 'Sicily Realty — Nairobi\'s most selective property advisory. Browse verified off-plan and ready apartments in Kilimani, Westlands, Kileleshwa and Lavington. KES 6.8M to 20M. Speak to your dedicated advisor today: +254 799 124 122.',
  keywords: 'luxury property for sale Nairobi, apartments for sale Kenya, off-plan property Kilimani, real estate agent Kenya, buy house Nairobi, Westlands apartments, investment property Nairobi 2026',
  icons: {
    icon: [{ url: '/images/favicon-96x96.png', type: 'image/png', sizes: '96x96' }],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/images/favicon-96x96.png'],
  },
  openGraph: {
    title: 'Sicily Realty | Luxury Property for Sale in Nairobi Kenya',
    description: "Nairobi's premier property advisory. Verified listings, off-plan investments, and expert guidance from first inquiry to final transfer.",
    url: siteUrl,
    siteName: 'Sicily Realty',
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: 'Sicily Realty luxury property advisory' }],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sicily Realty | Luxury Property for Sale in Nairobi, Kenya',
    description: "Nairobi's premier property advisory. Verified listings, off-plan investments, and expert guidance.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomNav />
      </body>
    </html>
  )
}
