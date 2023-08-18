/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1300px",
      },
    },
    colors: {
      'primary': '#e50914',
      'secondary': '#141414',
      'white': '#e5e5e5'
    },
    extend: {},
  },
  plugins: [],
}