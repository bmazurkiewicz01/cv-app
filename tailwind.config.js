/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "rgb(20,31,57)",
        secondary: "rgb(180,195,228)",
        focus: "#fefeff",
        tertiary: "#b4c3e4",
      },
      backgroundColor: {
        primary: "#162240",
        secondary: "#fefeff",
        box: "#f2f4fa",
        "blue-box": "#3983fa",
        "tertiary-700": "#293f71",
        "tertiary-800": "rgba(31,47,85,0.8)",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      borderColor: {
        primary: "#E6EBF6",
      },
    },
  },
  plugins: [],
};
