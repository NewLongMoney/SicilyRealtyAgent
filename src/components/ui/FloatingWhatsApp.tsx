'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { WHATSAPP_BASE } from '@/lib/data'
import { MessageCircle } from 'lucide-react'

const WA_HREF = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Sicily, I'm interested in a property")}`

export function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Link
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sicily on WhatsApp"
      className={cn(
        'fixed z-[999] flex items-center justify-center gap-2',
        'bg-[#25D366] text-white font-semibold shadow-2xl',
        'transition-transform duration-300 hover:scale-[1.03] active:scale-95',
        'bottom-[5.25rem] right-4 rounded-full sm:bottom-6 sm:right-6',
        'h-12 px-4 sm:h-auto sm:px-5 sm:py-3.5',
        mounted && 'animate-[wa-pop_0.5s_ease-out]'
      )}
    >
      <MessageCircle size={20} strokeWidth={2.25} className="shrink-0" />
      <span className="text-[0.82rem] tracking-wide whitespace-nowrap">Chat with Sicily</span>
    </Link>
  )
}
