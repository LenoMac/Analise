/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        first: {
          '0%': { 
            transform: 'translate(0, 24)',
          },
          '100%': {
            transform: 'translate(0, -140px)',
          },
        },
        second:{
          '0%': { 
            transform: 'translate(0, 0px)',
          },
          '100%': {
            transform: 'translate(0, -140px)',
          },
        },
        third: {
          '0%': { 
            transform: 'translate(0, -100px)',
          },
          '100%': {
            transform: 'translate(0, -140px)',
          },
        }
      },
      textColor: ['#FC2A93'],
    },
  },
  plugins: [],
}


