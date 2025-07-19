/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        topheadercolor:'linear-gradient(90deg, rgb(120, 96, 252) 0%, rgb(33, 183, 222) 50%, rgb(127, 235, 140) 100%);',
        primary:'rgb(83, 56, 158)',
        ctabg:'rgb(29, 41, 57);',
        secondary:'#DB4444',
        textFooter:'#fff',
        Fieldbg:'#F5F5F5'
      }
    },
  },
  plugins: [],
}

