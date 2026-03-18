import { cn } from '@/lib/utils'

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
        <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-gold font-semibold mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        'font-display text-[clamp(2.2rem,3.5vw,3.2rem)] text-white leading-[1.15]',
        'after:content-[""] after:block after:h-0.5 after:bg-gold-gradient after:rounded-sm after:mt-3.5',
        align === 'center' ? 'after:w-[52px] after:mx-auto' : 'after:w-[52px]'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-sicily-body/80 text-[0.95rem] leading-[1.75] mt-5',
          align === 'center' ? 'max-w-[520px] mx-auto' : 'max-w-[480px]'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
