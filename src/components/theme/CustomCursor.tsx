'use client'

import { useEffect, useState } from 'react'

/** Subtle gold cursor dot — desktop + fine pointer only; respects reduced motion. */
export function CustomCursor() {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setOn(true)
    const el = document.createElement('div')
    el.className = 'cursor-dot'
    document.body.appendChild(el)
    const move = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (t?.closest('a, button, [role="button"]')) el.classList.add('is-hover')
      else el.classList.remove('is-hover')
    }
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      el.remove()
    }
  }, [])

  return on ? null : null
}
