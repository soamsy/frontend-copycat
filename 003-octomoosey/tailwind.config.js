/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "scarlet": "#ff6f61",
      },
      fontFamily: {
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-in forwards"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(5rem)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
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

