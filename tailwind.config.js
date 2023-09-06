/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      'phone': '514px',
      'phone-side': '645px',
      'tablet': '1040px',
      'desktop': '1920px',
      'larger': '2560px'
    },
  },
  plugins: [],
}

