/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#fdb853",
        secondary: "#e08210",
        background: "#f7f4eb",
        backgroundDark: "#eeeade",
        black: "#121212",
      },
    },
  },
  plugins: [],
};
