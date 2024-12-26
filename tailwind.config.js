/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        oryon: {
          navy: '#1B234A',
          turquoise: '#5CCDC0'
        }
      }
    },
  },
  plugins: [],
};