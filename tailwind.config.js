/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-black': '#0a0a0a',
        'cafe-dark': '#1A1A1A',
        'cafe-beige': '#F5E6CA',
        'cafe-gold': '#D4AF37',
        'cafe-brown': '#3E2723',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
