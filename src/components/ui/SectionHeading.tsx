import { cn } from '@/lib/utils'
import { BrandDivider } from '@/components/brand/BrandMark'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow, title, subtitle,
  align = 'left', className
}: Props) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <span className="block text-[0.65rem] tracking-[0.32em] uppercase text-gold-mid dark:text-gold font-semibold mb-5">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-[clamp(2.2rem,4.2vw,3.6rem)] text-navy-deep dark:text-white leading-[1.08] tracking-tight font-semibold">
        {title}
      </h2>
      <div className={cn('mt-6', align === 'center' ? 'flex justify-center' : '')}>
        <BrandDivider />
      </div>
      {subtitle && (
        <p className={cn(
          'text-navy-deep/60 dark:text-white/55 text-[1.02rem] leading-[1.8] mt-6',
          align === 'center' ? 'max-w-[540px] mx-auto' : 'max-w-[560px]'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
