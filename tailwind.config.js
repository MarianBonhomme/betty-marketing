/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'bodoni': 'Bodoni_Moda'
    },
    extend: {
      colors: {
        'white': '#F5F5F5',
        'light': '#EEE6DB',
        'primary': '#BBA381', 
        'secondary': '#846346', 
        'dark': '#5B5B5B', 
        'black': '#0F0E0E'
      },
      boxShadow: {
        'card': 'rgba(0, 0, 0, 0.16) 0px 1px 4px;'
      }
    },
  },
  plugins: [],
}

