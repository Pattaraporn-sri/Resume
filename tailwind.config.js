/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ['Kanit', 'sans-serif'],
        CreteRound: ['Crete Round', 'serif'],
        Athiti: ["Athiti", 'sans-serif'],
        Prompt: ["Prompt", "sans-serif"],
        Merriweather: ["Merriweather", "serif"]
      }
    },
  },
  plugins: [],
}

