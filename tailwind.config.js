/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#ff2e57',
        'title':'#000000',
        'content':'#787C8B'

      }
    },
  },
  plugins: [],
}
