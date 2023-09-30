/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "../index.html",
    "./src/**/*.{html,jsx,js,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      height:{
        '716':'750px'
      },
    },
  },
  plugins: [
  
  ],
}
