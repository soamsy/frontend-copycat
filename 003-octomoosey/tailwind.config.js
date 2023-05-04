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
  plugins: ["flowbite/plugin"],
}

