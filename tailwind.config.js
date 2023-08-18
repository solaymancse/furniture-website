/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "../index.html",
    "./src/**/*.{html,jsx,js,tsx}"
  ],
  theme: {
    extend: {
      height:{
        '716':'750px'
      },
    },
  },
  plugins: [],
}
