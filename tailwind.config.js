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
        "tertiary-700": "#293f71",
        "tertiary-900": "#141f39",
        "clean-gray": "rgb(54,61,73)",
        "cv-heading": "rgb(0,61,116)",
        "input-box": "rgb(31,47,85)",
      },
      backgroundColor: {
        primary: "#162240",
        secondary: "#fefeff",
        box: "#f2f4fa",
        "blue-box": "#3983fa",
        "tertiary-10": "#f9fafd",
        "tertiary-20": "#f3f5fa",
        "tertiary-40": "#ecf0f8",
        "tertiary-700": "#293f71",
        "tertiary-800": "rgba(31,47,85,0.8)",
        "cv-header": "#003c75",
        "cv-sidebar": "rgb(244,244,244)",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
      borderColor: {
        primary: "#E6EBF6",
        secondary: "rgb(223,223,223)",
        "tertiary-150": "#cdd7ed",
        "tertiary-600": "#375496",
        "tertiary-700": "#293f71",
        "tertiary-800": "#1f2f55",
        "input-box": "rgb(218,221,223)",
      },
      gridTemplateRows: {
        "auto-1fr": "auto 1fr",
      },
      boxShadow: {
        "white-glow": "0 0 0.8rem #FFFFFF",
      },
    },
  },
  plugins: [],
};
