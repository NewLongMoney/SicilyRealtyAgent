export interface Property {
  id: string
  name: string
  area: 'kilimani' | 'westlands' | 'kileleshwa' | 'lavington' | 'riverside'
  category: 'signature' | 'select' | 'intelligent'
  status: 'offplan' | 'complete' | 'new' | 'bestseller'
  bedrooms: string
  price: string
  description: string
  image: string
  whatsappText: string
}

export interface Testimonial {
  id: string
  initial: string
  name: string
  role: string
  quote: string
}

export interface InsightArticle {
  id: string
  date: string
  category: string
  title: string
  excerpt: string
  image: string
  stats?: { value: string; label: string }[]
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const PROPERTIES: Property[] = [
  {
    id: 'montbleu',
    name: 'Montbleu',
    area: 'westlands',
    category: 'select',
    status: 'bestseller',
    bedrooms: '2-3 Bedrooms',
    price: 'KES 8.5M',
    description: 'Off Plan · 2-3 Bedrooms · Premium Luxury Living',
    image: '/images/Montbleu/122ca3bc-6baf-4aaf-a0b8-a12a83cc2849.jpg',
    whatsappText: "Hi, I'd love to view Montbleu",
  },
  {
    id: 'golden-mansion',
    name: 'Golden Mansion',
    area: 'westlands',
    category: 'signature',
    status: 'offplan',
    bedrooms: '3-4 Bedrooms',
    price: 'KES 12.5M',
    description: 'Off Plan · 3-4 Bedrooms · Exclusive Apartments',
    image: '/images/Golden mansion/07a1bb7a-1842-40b3-9d31-f80645f543ef.jpg',
    whatsappText: "Hi, I'd love to view Golden Mansion",
  },
  {
    id: 'ivy-park',
    name: 'Ivy Park',
    area: 'kilimani',
    category: 'select',
    status: 'bestseller',
    bedrooms: '1-2 Bedrooms',
    price: 'KES 6.8M',
    description: 'Off Plan · 1-2 Bedrooms · Modern Finishes',
    image: '/images/Ivy Park/1072801d-c49e-4171-bca6-7fb00f4aeb06.jpg',
    whatsappText: "Hi, I'd love to view Ivy Park",
  },
  {
    id: 'amethyst-springs',
    name: 'Amethyst Springs',
    area: 'kilimani',
    category: 'select',
    status: 'new',
    bedrooms: '2-3 Bedrooms',
    price: 'KES 9.2M',
    description: 'Kilimani Luxury · 2-3 Bedrooms · Prime Units',
    image: '/images/hero.png',
    whatsappText: "Hi, I'd love to view Amethyst Springs",
  },
  {
    id: 'project-1050',
    name: 'Project 1050',
    area: 'kilimani',
    category: 'signature',
    status: 'offplan',
    bedrooms: '4-5 Bedrooms',
    price: 'KES 15.8M',
    description: 'Off Plan · 4-5 Bedrooms · Premium Architecture',
    image: '/images/Project 1050/08b02ec9-15ba-4a5b-bcce-2b9d27445cda.jpg',
    whatsappText: "Hi, I'd love to view Project 1050",
  },
  {
    id: 'the-diplomat',
    name: 'The Diplomat',
    area: 'westlands',
    category: 'select',
    status: 'offplan',
    bedrooms: '2-3 Bedrooms',
    price: 'KES 11.2M',
    description: 'Off Plan · 2-3 Bedrooms · Exclusive Residences',
    image: '/images/Diplomat/1a978b59-8ca1-4b77-9cd5-029280704327.jpg',
    whatsappText: "Hi, I'd love to view The Diplomat",
  },
  {
    id: 'gemini',
    name: 'Gemini',
    area: 'westlands',
    category: 'select',
    status: 'offplan',
    bedrooms: '1-2 Bedrooms',
    price: 'KES 7.5M',
    description: 'Off Plan · 1-2 Bedrooms · Modern Condos',
    image: '/images/Gemini/56f3586f-ffe8-418c-bfa8-52afe44c953f.jpg',
    whatsappText: "Hi, I'd love to view Gemini",
  },
  {
    id: 'pandora',
    name: 'Pandora',
    area: 'westlands',
    category: 'intelligent',
    status: 'offplan',
    bedrooms: '2-3 Bedrooms',
    price: 'KES 10.5M',
    description: 'Off Plan · 2-3 Bedrooms · Smart Homes',
    image: '/images/Pandora/1cbbf675-ceb1-485e-981e-57236733b507.jpg',
    whatsappText: "Hi, I'd love to view Pandora",
  },
]

export const BEST_SELLERS: Property[] = [
  PROPERTIES.find(p => p.id === 'golden-mansion')!,
  PROPERTIES.find(p => p.id === 'project-1050')!,
  PROPERTIES.find(p => p.id === 'ivy-park')!,
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    initial: 'J',
    name: 'James & Mary W.',
    role: 'Runda Homeowners',
    quote: 'Sicily understood our vision and protected our budget. We closed ahead of schedule without compromising on quality. The level of professionalism was outstanding.',
  },
  {
    id: '2',
    initial: 'P',
    name: 'Peter O.',
    role: 'First-time Buyer',
    quote: 'As a first-time buyer, the process felt daunting. Sicily made every viewing purposeful and every decision informed. Her patience and market knowledge were invaluable throughout.',
  },
  {
    id: '3',
    initial: 'G',
    name: 'Grace M.',
    role: 'Property Investor',
    quote: 'Professional, responsive, and genuinely invested in our success. Sicily made our investment property acquisition seamless from due diligence to final transfer.',
  },
  {
    id: '4',
    initial: 'D',
    name: 'David M.',
    role: 'Diaspora Investor · London, UK',
    quote: 'Managing a property purchase from London could have been a nightmare. Sicily handled every step remotely — viewings, legal coordination, payment — without a single dropped ball. I signed without setting foot in Nairobi.',
  },
  {
    id: '5',
    initial: 'A',
    name: 'Amina K.',
    role: 'First Home · Kilimani',
    quote: 'I had a very specific budget and a very specific vision. Most agents ignored one or the other. Sicily took both seriously and found me something I genuinely love. I closed three months after our first call.',
  },
  {
    id: '6',
    initial: 'R',
    name: 'Robert & Susan O.',
    role: 'Portfolio Investors',
    quote: 'This is our third acquisition through Sicily Realty. The market intelligence alone is worth the relationship — we have consistently entered developments before the price correction.',
  },
]

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'q1-2026',
    date: 'March 2026',
    category: 'Market Analysis',
    title: "Why Nairobi's Prime Residential Market Held Firm in Q1 2026",
    excerpt: "While global property markets softened in early 2026, Nairobi's premium residential corridor — Westlands to Kilimani — recorded a 12% year-on-year uplift in transacted values.",
    image: '/images/hero.png',
    stats: [
      { value: '+12%', label: 'Property Growth' },
      { value: '8.2%', label: 'Rental Yield' },
    ],
  },
  {
    id: 'infrastructure-2026',
    date: 'February 2026',
    category: 'Infrastructure',
    title: 'The Roads Being Built Right Now That Will Reprice Nairobi Property',
    excerpt: 'Infrastructure is the oldest signal in real estate. When a road cuts travel time by half, the land around it reprices — sometimes before the tarmac is dry.',
    image: '/images/hero.png',
    stats: [],
  },
  {
    id: 'postcodes-2026',
    date: 'January 2026',
    category: 'Investment Guide',
    title: 'Five Nairobi Postcodes Where Capital Goes to Work in 2026',
    excerpt: "Not every Nairobi postcode performs the same. This breakdown maps five zones where the combination of infrastructure spend, population movement, and supply constraint creates conditions for real capital appreciation.",
    image: '/images/hero.png',
    stats: [],
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: '1',
    question: 'What makes Sicily Realty different from other agents in Nairobi?',
    answer: "Most agencies operate on volume — the more viewings, the better. We operate on precision. You will not be handed off to a junior. You will not receive listings that miss your brief. One advisor, one standard, start to finish.",
  },
  {
    id: '2',
    question: 'Do you charge buyers a fee?',
    answer: "On selected off-plan developments, our advisory fee is absorbed by the developer. On secondary market and private sales, our structure is transparent and agreed upfront — no hidden charges, no surprises on completion day.",
  },
  {
    id: '3',
    question: 'How long does it take to buy property in Kenya?',
    answer: "A straightforward off-plan acquisition typically takes 2–4 weeks from reservation to signed agreement. Title transfer on completed units runs 60–90 days depending on developer readiness and legal due diligence.",
  },
  {
    id: '4',
    question: 'Can diaspora Kenyans buy property through Sicily Realty?',
    answer: "Yes. A significant portion of our clients are based in the UK, US, Canada, and the Gulf. We handle the full process remotely — virtual viewings, legal representation, and M-Pesa or international wire payment coordination.",
  },
  {
    id: '5',
    question: 'What is the minimum budget to buy an apartment in Nairobi?',
    answer: "The entry point for a quality 1-bedroom apartment in a prime Nairobi location currently sits around KES 6.8 million for off-plan units. Sicily Realty works across the KES 6.8M to KES 20M range.",
  },
]

export const WHATSAPP_BASE = 'https://wa.me/254799124122'
export const PHONE = '+254799124122'
export const EMAIL = 'info@sicily.co.ke'
export const AREAS = ['Kilimani','Westlands','Kileleshwa','Lavington','Riverside']
