'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = (resolvedTheme ?? theme) === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300',
        'border-navy-deep/15 text-navy-deep/70 hover:border-gold/50 hover:text-gold-mid',
        'dark:border-white/15 dark:text-white/70 dark:hover:border-gold/50 dark:hover:text-gold',
        className
      )}
    >
      {mounted ? (
        isDark ? <Sun size={15} strokeWidth={1.6} /> : <Moon size={15} strokeWidth={1.6} />
      ) : (
        <span className="h-3.5 w-3.5" />
      )}
    </button>
  )
}
