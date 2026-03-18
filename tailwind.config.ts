import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep:  '#071C2F',
          mid:   '#0A2A47',
          light: '#123E63',
          glow:  '#0D2240',
        },
        gold: {
          bright: '#F6C667',
          DEFAULT:'#E5A93C',
          mid:    '#C8841F',
          base:   '#9F5A12',
          dim:    'rgba(229,169,60,0.18)',
        },
        sicily: {
          body:  '#A8BDD0',
          muted: '#527090',
          border:'rgba(229,169,60,0.18)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans:    ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient':   'linear-gradient(135deg, #F6C667, #E5A93C, #C8841F)',
        'gold-gradient-v': 'linear-gradient(to bottom, #F6C667, #C8841F)',
        'navy-gradient':   'radial-gradient(circle, #123E63 0%, #0A2A47 50%, #071C2F 100%)',
        'card-gradient':   'linear-gradient(160deg, #0D2240 0%, #071C2F 100%)',
      },
      animation: {
        'fade-up':       'fadeUp 0.9s ease forwards',
        'scroll-pulse':  'scrollPulse 2.5s ease-in-out infinite',
        'shimmer':       'shimmer 4s linear infinite',
        'float-up':      'floatUp 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(0.5)' },
          '50%':      { opacity: '1',   transform: 'scaleY(1)' },
        },
        shimmer: {
          to: { backgroundPosition: '200% center' },
        },
        floatUp: {
          from: { transform: 'translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          to:   { transform: 'translateY(-120px)', opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
