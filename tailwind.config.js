/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0d0d0d',
          charcoal: '#171717',
          muted: '#262626',
          border: '#333333',
          sand: '#d2b48c',
          gold: '#c5a880',
          cream: '#f8f6f0',
          lightgray: '#f5f5f3'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.22em',
      }
    },
  },
  plugins: [],
}
