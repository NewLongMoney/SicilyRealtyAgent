'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { FaqItem } from '@/lib/data'

interface Props { items: FaqItem[] }

export function FaqSection({ items }: Props) {
  return (
    <section id="faq" className="py-[120px] bg-section-warm border-t border-section-divider">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Common Questions"
          title="Questions We Hear Often"
        />
        <div className="max-w-[720px] mx-auto mt-14">
          <Accordion type="single" collapsible className="space-y-0">
            {items.map(item => (
              <AccordionItem
                key={item.id}
                value={item.id}
                id={item.id === 'foreigners' ? 'faq-foreigners' : undefined}
                className="border-b border-gold/10 data-[state=open]:border-gold/20 scroll-mt-32"
              >
                <AccordionTrigger className="text-[0.98rem] text-navy-deep/90 font-medium text-left py-6 hover:text-gold-mid hover:no-underline transition-colors [&[data-state=open]]:text-gold-mid">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[0.9rem] text-navy-deep/65 leading-[1.8] pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
