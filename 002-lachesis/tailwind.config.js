/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "fake-black": "#121212",
      },
      fontFamily: {
        elsie: ["Elsie", "sans-serif"],
        montserrat: ["montserrat", "monospace"],
      }
    },
  },
  plugins: ["flowbite/plugin"],
}

