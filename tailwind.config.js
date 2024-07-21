/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primaryColor: "#001f3f",
        headingColor: "#081e21",
        smallTextColor: "#6a0dae",
      }
    },
  },
  plugins: [],
}

