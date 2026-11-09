import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  variant?: 'light' | 'dark'
  showWordmark?: boolean
  className?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
}

/** Hand-crafted monogram + optional wordmark. Uses existing navy/gold only. */
export function BrandMark({
  variant = 'light',
  showWordmark = true,
  className,
  href = '/',
  size = 'md',
}: Props) {
  const mono = size === 'sm' ? 'h-9 w-9' : size === 'lg' ? 'h-14 w-14' : 'h-11 w-11'
  const title = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg lg:text-xl'
  const onDark = variant === 'dark'

  const inner = (
    <span className={cn('inline-flex items-center gap-3 min-w-0', className)}>
      <span className={cn('relative flex-shrink-0', mono)} aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={onDark ? '/brand/monogram-on-navy.svg' : '/brand/monogram.svg'}
          alt=""
          className="h-full w-full"
        />
      </span>
      {showWordmark && (
        <span className="leading-tight min-w-0 hidden xs:block sm:block">
          <span
            className={cn(
              'block font-display font-bold tracking-[0.04em] truncate',
              title,
              onDark ? 'text-white' : 'text-navy-deep'
            )}
          >
            Sicily Realty
          </span>
          <span
            className={cn(
              'block text-[0.55rem] lg:text-[0.58rem] tracking-[0.28em] uppercase font-semibold',
              onDark ? 'text-gold' : 'text-gold-mid'
            )}
          >
            Property Advisory
          </span>
        </span>
      )}
    </span>
  )

  if (!href && href !== '') return inner
  if (href === '') return inner
  return (
    <Link href={href} className="flex-shrink-0" aria-label="Sicily Realty home">
      {inner}
    </Link>
  )
}

export function BrandDivider({ className }: { className?: string }) {
  return (
    <span
      className={cn('inline-flex items-center gap-3', className)}
      aria-hidden
    >
      <span className="h-px w-8 bg-gold-gradient" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/monogram.svg" alt="" className="h-4 w-4 opacity-80" />
      <span className="h-px w-8 bg-gold-gradient" />
    </span>
  )
}
