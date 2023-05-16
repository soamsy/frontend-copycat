/** @type {import('tailwindcss').Config} */
  export default {
    content: ["index.html", "./src/**/*.{js,vue}"],
    theme: {
      extend: {
        fontFamily: {
          "lato": ["Lato", "sans-serif"],
        },
      },
    },
    plugins: [require('tailwindcss-themer')({
      themes: [
        {
          name: 'vivid',
          extend: {
            colors: {
              "backdrop-bg": "#F40000",
              "backdrop-fg": "#000",
              "content-bg": "#000",
              "content-fg": "#EEE",
              "content-highlight": "#F40000",
              "critique-bg": "#222",
              "alert": "#F40000",
            }
          }
        },
        {
          name: 'relaxed',
          extend: {
            colors: {
              "backdrop-bg": "#DDD",
              "backdrop-fg": "#000",
              "content-bg": "#000",
              "content-fg": "#EEE",
              "content-highlight": "#EEE",
              "critique-bg": "#222",
              "alert": "#F40000",
            }
          }
        },
        {
          name: 'vanilla',
          extend: {
            colors: {
              "backdrop-bg": "#DDD",
              "backdrop-fg": "#000",
              "content-bg": "#EEE",
              "content-fg": "#000",
              "content-highlight": "#000",
              "critique-bg": "#CCC",
              "alert": "#F40000",
            }
          }
        },
      ]
    })],
  }

