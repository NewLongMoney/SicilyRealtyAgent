import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'

export const metadata: Metadata = {
  title: 'Sicily Realty | Luxury Property for Sale in Nairobi, Kenya — Kilimani & Westlands',
  description: 'Sicily Realty — Nairobi\'s most selective property advisory. Browse verified off-plan and ready apartments in Kilimani, Westlands, Kileleshwa and Lavington. KES 6.8M to 20M. Speak to your dedicated advisor today: +254 799 124 122.',
  keywords: 'luxury property for sale Nairobi, apartments for sale Kenya, off-plan property Kilimani, real estate agent Kenya, buy house Nairobi, Westlands apartments, investment property Nairobi 2026',
  openGraph: {
    title: 'Sicily Realty | Luxury Property for Sale in Nairobi Kenya',
    description: "Nairobi's premier property advisory. Verified listings, off-plan investments, and expert guidance.",
    url: 'https://sicilyrealty.co.ke',
    siteName: 'Sicily Realty',
    images: [{ url: '/images/logo-main.png' }],
    locale: 'en_KE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://sicilyrealty.co.ke' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
