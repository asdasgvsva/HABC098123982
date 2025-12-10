import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0A1929',
        'navy-deep': '#1E3A5F',
        'neon-accent': '#00D9FF',
        'blue-accent': '#3B82F6',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

