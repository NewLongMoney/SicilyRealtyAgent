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
    <section id="faq" className="py-[120px] bg-navy-mid">
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
                className="border-b border-gold/10 data-[state=open]:border-gold/20"
              >
                <AccordionTrigger className="text-[0.98rem] text-white/90 font-medium text-left py-6 hover:text-gold-bright hover:no-underline transition-colors [&[data-state=open]]:text-gold-bright">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[0.9rem] text-sicily-body/85 leading-[1.8] pb-5">
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
