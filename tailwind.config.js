/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        main: ["Epilogue", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        syncoBlue: "#1d3370",
        syncoGreen: "#7dd249",
      },
    },
  },
  plugins: [],
};
