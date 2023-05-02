/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*index.html"],
  theme: {
    extend: {
      colors: {
        "transparent-gray": "rgba(60, 60, 60, 0.5)",
        "transparent-blue": "rgba(24, 66, 255, 0.4)",
      }
    },
  },
  plugins: [],
}

