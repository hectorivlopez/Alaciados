/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#627254',
          100: '#929982',
          200: '#627254'
        },
        secondary: '#A4A084',
        white: {
          DEFAULT: '#FFF',
          100: '#DDD',
          200: '#D8D8D8'
        },
        black: {
          DEFAULT: '#000',
          100: '#424242',
          200: '#232533'
        },
        gray: {
          100: '#6F6F6F',
          200: '#CCCCCC'
        }
      },
      fontFamily: {
        pthin: ['Poppins-Thin', 'sans-serif'],
        pextralight: ['Poppins-ExtraLight', 'sans-serif'],
        plight: ['Poppins-Light', 'sans-serif'],
        pregular: ['Poppins-Regular', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        psemibold: ['Poppins-SemiBold', 'sans-serif'],
        pbold: ['Poppins-Bold', 'sans-serif'],
        pextrabold: ['Poppins-ExtraBold', 'sans-serif'],
        pblack: ['Poppins-Black', 'sans-serif']
      }
    }
  },
  plugins: []
}
