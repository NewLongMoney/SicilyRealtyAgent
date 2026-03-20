import Link from 'next/link'
import { Home, LayoutGrid, MessageCircle, HelpCircle, Phone } from 'lucide-react'
import { WHATSAPP_BASE } from '@/lib/data'

export function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[8000] bg-navy-deep/97 backdrop-blur-xl border-t border-gold/15 pb-safe grid grid-cols-5">
      {[
        { href: '/',            icon: <Home size={18} />,      label: 'Home' },
        { href: '/properties',  icon: <LayoutGrid size={18} />, label: 'Properties' },
        {
          href: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sicily, I'd like to enquire")}`,
          icon: <MessageCircle size={18} />,
          label: 'Chat',
          isWa: true,
        },
        { href: '#faq',   icon: <HelpCircle size={18} />, label: 'FAQ' },
        { href: '#contact', icon: <Phone size={18} />, label: 'Contact' },
      ].map((item, i) => (
        <Link
          key={i}
          href={item.href}
          target={item.isWa ? '_blank' : undefined}
          rel={item.isWa ? 'noopener' : undefined}
          className={
            item.isWa
              ? 'flex flex-col items-center justify-center relative -top-2.5'
              : 'flex flex-col items-center justify-center gap-1 py-2 text-sicily-muted hover:text-gold transition-colors'
          }
        >
          {item.isWa ? (
            <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.3)] text-white">
              {item.icon}
            </span>
          ) : (
            <>
              {item.icon}
              <span className="text-[0.57rem] tracking-wide">{item.label}</span>
            </>
          )}
        </Link>
      ))}
    </nav>
  )
}
