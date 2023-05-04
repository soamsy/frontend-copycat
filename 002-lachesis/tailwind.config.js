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
        lora: ["Lora", "serif"],
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
      }
    },
  },
  plugins: ["flowbite/plugin"],
}

