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
    backgroundImage: {
      'treebg': "url('/background1.jpg')",
    },
    screens: {
      'phone': '514px',
      'tablet': '1140px',
      'desktop': '1520px',
      'larger': '2000px'
    },
  },
  plugins: [],
}

