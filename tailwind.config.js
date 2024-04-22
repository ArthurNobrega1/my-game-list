/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'julius': ['Julius Sans One', 'sans-serif']
      },      
      colors: {
        'light-gray': '#D9D9D9',
        'light-green': '#B4D9CE',
        'light-green-600': '#7D9790',
        'dark-green': '#184D59',
        'light-green-600': '#155952'
      },
      margin: {
        'calc(42px,header)': 'calc(calc(.003*calc(100vw - 1440px)) + calc(8.91667vw - 8.4375vh))',
        'calc(42px,inputGroup)': 'calc(calc(.0003*calc(100vw - 1440px)) + calc(2.91176vw + .0069vh))',
        'calc(-18px)': 'calc(calc(.003*calc(100vw - 1440px)) + calc(3.75vw - 6.53125vh))'
      },
      gap: {
        '9px': '.625vw',
        '18px': '1.75781vh'
      },
      padding: {
        '19px': '3.64%'
      },
      backgroundImage: {
        home : "url('/public/background.png')"
      }
    },
    borderRadius: {
      md: '.625rem', // 10px
      lg: '.9375rem', // 15px
      xl: '1.25rem' // 20px
    }
  },
  plugins: [],
}

