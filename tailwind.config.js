/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      screens: {
        'sm': '900px'
      },
      spacing: {
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '50': '50%',
        '70': '70%',
        '85': '85%',
        '90': '90%'
      },
      fontSize: {
        'xs': '1.4rem',
        'sm': '1.6rem',
        'md': '1.8rem',
        'base': '2.4rem',
        'lg': '3.2rem',
        'xl': '5.4rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      colors: {
        'grdnt-100': 'hsl(236, 72%, 79%)',
        'grdnt-200': 'hsl(237, 63%, 64%)',
        gray: {
          DEFAULT: 'hsl(240, 90%, 100%)',
          100: 'hsl(234, 14%, 74%)',
          200: 'hsl(233, 13%, 49%)',
          300: 'hsl(232, 13%, 33%)'
        }
      }
    },
  },
  plugins: [],
}
