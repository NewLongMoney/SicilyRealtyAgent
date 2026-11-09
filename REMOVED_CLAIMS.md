# Removed / softened claims (2026-11-09 lean build)

These were removed from the live site because they were not verified client-supplied facts.
Sicily Realty can restore any item by sending confirmed figures/quotes.

## Numeric / rating claims removed
- Hero stats: "28+ Successful Closings"
- Hero stats: "KES 180M Transaction Value Guided"
- Hero stats: "5.0 Client Rating"
- About cards: "28+ Acquisitions Closed" / "KES 180M Total Value Advised" / "5.0 Verified Client Rating"
- About advisor strip: same three stats
- Testimonials footer: "5.0 average rating" + five filled stars presented as average
- JSON-LD `aggregateRating` (`ratingValue: 5.0`, `reviewCount: 18`) on homepage RealEstateAgent schema

## Testimonials removed from homepage
All six named quotes (pending written client permission):
1. James & Mary W. — Runda Homeowners
2. Peter O. — First-time Buyer
3. Grace M. — Property Investor
4. David M. — Diaspora Investor · London, UK
5. Amina K. — First Home · Kilimani
6. Robert & Susan O. — Portfolio Investors

## Market / insight claims removed or rewritten
- Market brief headline tying "Q1 2026" to hard uplift numbers
- "+12% YoY value growth"
- "8.2% Avg. rental yield"
- Body copy asserting 12% uplift, 7.5–8.5% yields, and "closed transactions" as the source of those figures
- Insight articles with fabricated stats (`+12%`, `8.2%`) kept out of the homepage

## Still shown (verified contact facts already on site)
- Phone +254 799 124 122
- Email info@sicilyrealty.co.ke
- WhatsApp wa.me/254799124122
- Social profile links already in footer
- Listing names, unit tables, and from-prices already in `properties.ts` (client should reconfirm currency figures when ready)
