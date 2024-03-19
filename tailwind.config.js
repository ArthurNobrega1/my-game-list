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
      },
      margin: {
        'calc(42px,header)': 'calc(calc(.003*calc(100vw - 1440px)) + calc(8.91667vw - 8.4375vh))',
        'calc(42px,inputGroup)': 'calc(calc(.0003*calc(100vw - 1440px)) + calc(2.91176vw + .0069vh))',
        'calc(-18px)': 'calc(calc(.003*calc(100vw - 1440px)) + calc(3.75vw - 7.03125vh))'
      },
      gap: {
        '18': '6.977%'
      },
      padding: {
        '19': '3.64%'
      }
    },
    borderRadius: {
      md: '0.625rem',
      lg: '0.9375rem'
    }
  },
  plugins: [],
}

