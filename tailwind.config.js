/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["winter","night"],
  },
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}

