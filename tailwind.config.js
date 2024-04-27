const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    fontFamily: {
      sans: ['"Ubuntu"', ...fontFamily.sans],
      jakarta: ['"Ubuntu"', ...fontFamily.sans],
      mono: ['"Fira Code"', ...fontFamily.mono],
    },
    extend: {
      borderRadius: {
        sm: '4px',
      },
      screens: {
        lg: '997px',
        sm: '0px',
      },
      colors: {
        syncoBlue: '#1D3370',
        syncoGreen: '#7ED348',
      },
    },
  },
  plugins: [],
}
