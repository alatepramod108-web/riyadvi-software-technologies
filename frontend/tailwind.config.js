/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4D36D',
          dark: '#A37F15',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        brand: {
          deep: '#050507',
          surface: '#0E0E14',
          elevated: '#161622',
          border: 'rgba(255, 255, 255, 0.08)'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-card': '0 10px 35px -10px rgba(212, 175, 55, 0.15)',
      }
    },
  },
  plugins: [],
}
