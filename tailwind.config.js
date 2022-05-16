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
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
}
