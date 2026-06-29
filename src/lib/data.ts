export type {
  Property,
  PropertyArea,
  PropertyCategory,
  PropertyType,
  PropertyListing,
  PropertyStatus,
  PropertyUnit,
} from './property-types'

export { img } from './property-types'
export {
  PROPERTIES,
  BEST_SELLERS,
  getPropertyById,
  AREA_LABELS,
  CATEGORY_LABELS,
} from './properties'

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
    id: 'foreigners',
    question: 'Can foreigners buy property in Kenya through Sicily Realty?',
    answer: "Yes. Non-Kenyan nationals can legally own freehold and leasehold property in Kenya, subject to standard legal requirements. Sicily Realty guides foreign buyers through due diligence, legal representation, title verification, and remote purchase coordination — whether you are based in the UK, US, Europe, or the Gulf.",
  },
  {
    id: '4',
    question: 'Can diaspora Kenyans buy property through Sicily Realty?',
    answer: "Yes. A significant portion of our clients are based in the UK, US, Canada, and the Gulf. We handle the full process remotely — virtual viewings, legal representation, and M-Pesa or international wire payment coordination.",
  },
  {
    id: '5',
    question: 'What is the minimum budget to buy an apartment in Nairobi?',
    answer: "Entry pricing for quality off-plan apartments in prime Nairobi locations currently starts from around KES 5 million. Sicily Realty works across developments from KES 5M to KES 62M+, covering studios through luxury duplex residences.",
  },
]

export const WHATSAPP_BASE = 'https://wa.me/254799124122'
export const PHONE = '+254799124122'
export const PHONE_DISPLAY = '+254 799 124 122'
export const EMAIL = 'info@sicilyrealty.co.ke'
export const AREAS = ['Kilimani', 'Westlands', 'Kileleshwa', 'Lavington', 'Riverside']

export const ADVISOR = {
  name: 'Sicily',
  title: 'Principal Real Estate Advisor',
  fullTitle: 'Sicily — Principal Real Estate Advisor',
}

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Sicily+Realty+Nairobi+reviews'

export const DEVELOPER_ON_REQUEST =
  'Developer details available on request — Sicily Realty shares track record and delivery history before you commit.'
