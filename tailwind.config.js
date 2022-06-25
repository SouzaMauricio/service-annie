const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'annie-primary': '#CDA09B',
        'annie-second': '#FFFFFF',
        'annie-background': '#FAFAFA',
        'annie-text': '#404960'
      },
      maxWidth: {
        'max-content': '80rem'
      },
      minHeight: {
        64: '16rem'
      },
      height: {
        100: '25rem',
        104: '26rem'
      },
      width: {
        125: '31.25rem',
        22: '5.5rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ]
}
