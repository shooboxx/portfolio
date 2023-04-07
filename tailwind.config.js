/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'display': ['Glodok'],
    },

    extend: {
      colors: {
        'mute-yellow': '#F1EBB8',
        'ruby-red': '#FF0000',
        'burgandy': '#6A2838',
        'dark-burgandy': '#4E0909'
      },
    },
  },
  plugins: [],
}
