/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Web Random/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
    textColor :
      {"Red" : "#C70039"},
      backgroundColor :
      {"Dark" : "#282B3D"},
      backgroundImage :
      {"BFC" : "url('../assett/img/Menu.png')"}
    },
  },
  plugins: [],
}

