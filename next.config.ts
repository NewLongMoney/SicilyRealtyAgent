import type { NextConfig } from 'next'
// Cloudflare Pages static export (headers moved to public/_headers)
const nextConfig: NextConfig = { output: 'export', images: { unoptimized: true } }
export default nextConfig
