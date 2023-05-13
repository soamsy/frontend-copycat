/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        "persona-red": "#F40000",
      },
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}

