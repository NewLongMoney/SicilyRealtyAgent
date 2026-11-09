import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  variant?: 'light' | 'dark' | 'auto'
  showWordmark?: boolean
  className?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
}

/** Portal / keystone symbol + Sicily wordmark. */
export function BrandMark({
  variant = 'auto',
  showWordmark = true,
  className,
  href = '/',
  size = 'md',
}: Props) {
  const mono = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
  const title = size === 'sm' ? 'text-[1.05rem]' : size === 'lg' ? 'text-2xl' : 'text-[1.35rem]'
  const forcedDark = variant === 'dark'
  const forcedLight = variant === 'light'

  const titleCls = cn(
    'block font-display font-semibold tracking-[0.045em] leading-none',
    title,
    forcedDark && 'text-white',
    forcedLight && 'text-navy-deep',
    variant === 'auto' && 'text-navy-deep dark:text-white'
  )
  const subCls = cn(
    'block mt-1.5 text-[0.55rem] tracking-[0.4em] uppercase font-semibold',
    forcedDark && 'text-gold',
    forcedLight && 'text-gold-mid',
    variant === 'auto' && 'text-gold-mid dark:text-gold'
  )

  const inner = (
    <span className={cn('inline-flex items-center gap-3 min-w-0', className)}>
      <span className={cn('relative flex-shrink-0', mono)} aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/symbol.svg" alt="" className="h-full w-full" />
      </span>
      {showWordmark && (
        <span className="leading-none min-w-0 hidden sm:block">
          <span className={titleCls}>Sicily</span>
          <span className={subCls}>Realty</span>
        </span>
      )}
    </span>
  )

  if (href === '') return inner
  return (
    <Link href={href} className="flex-shrink-0 group" aria-label="Sicily Realty home">
      {inner}
    </Link>
  )
}

export function BrandDivider({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)} aria-hidden>
      <span className="h-px w-10 bg-gold-gradient" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/symbol.svg" alt="" className="h-5 w-5 opacity-90" />
      <span className="h-px w-10 bg-gold-gradient" />
    </span>
  )
}
