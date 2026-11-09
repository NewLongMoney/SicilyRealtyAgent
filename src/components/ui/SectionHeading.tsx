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
  align = 'center', className
}: Props) {
  return (
    <div className={cn(
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      {eyebrow && (
        <span className="block text-[0.65rem] tracking-[0.28em] uppercase text-gold-mid font-semibold mb-5">
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        'font-display text-[clamp(2rem,3.4vw,3.1rem)] text-navy-deep leading-[1.12] tracking-tight font-semibold',
      )}>
        {title}
      </h2>
      <div className={cn('mt-5', align === 'center' ? 'flex justify-center' : '')}>
        <BrandDivider />
      </div>
      {subtitle && (
        <p className={cn(
          'text-navy-deep/58 text-[0.98rem] leading-[1.8] mt-6',
          align === 'center' ? 'max-w-[540px] mx-auto' : 'max-w-[520px]'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
