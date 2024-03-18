/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'light-gray': '#D9D9D9',
        'light-green': '#B4D9CE',
        'dark-green': '#184D59',
      }
    }
  },
  plugins: [],
}

