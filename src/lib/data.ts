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
  // Intentionally empty until Sicily supplies written permission for named quotes.
  // See REMOVED_CLAIMS.md for the previous entries.
]

export const INSIGHTS: InsightArticle[] = [
  // Market insight cards withheld until Sicily supplies sourced figures.
  // Previous invented +12% / 8.2% stats removed — see REMOVED_CLAIMS.md.
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
