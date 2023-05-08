/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "scarlet": "#ff6f61",
      },
      fontFamily: {
      }
    },
  },
  plugins: ["flowbite/plugin", function({ addUtilities, addComponents, e, prefix, config }) {
    const newUtilities = {
      '.horizontal-tb': {
        writingMode: 'horizontal-tb',
      },
      '.vertical-rl': {
        writingMode: 'vertical-rl'
      },
      '.vertical-lr': {
        writingMode: 'vertical-lr'
      }
    }
    addUtilities(newUtilities)
  }],
}

