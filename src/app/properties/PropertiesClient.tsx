'use client'
import { useSearchParams } from 'next/navigation'
import { PropertiesSection } from '@/components/sections/PropertiesSection'
import { PROPERTIES } from '@/lib/data'

export function PropertiesClient() {
  const sp = useSearchParams()
  const requested = sp.get('property') ?? undefined
  const resolved = requested ? PROPERTIES.find(p => p.id === requested) : undefined
  return (
    <PropertiesSection
      key={sp.toString()}
      properties={PROPERTIES}
      initialCategory={sp.get('category') ?? undefined}
      initialArea={resolved?.area ?? sp.get('area') ?? undefined}
      initialType={sp.get('type') ?? undefined}
      initialListing={sp.get('intent') ?? undefined}
      initialBeds={sp.get('beds') ?? undefined}
      initialPrice={sp.get('price') ?? undefined}
      initialStatus={sp.get('status') ?? undefined}
      initialSort={sp.get('sort') ?? undefined}
      highlightedProperty={resolved?.id}
      compactHeading={false}
      showMap
    />
  )
}
