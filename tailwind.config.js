/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textC: "#838792",
        backgroundC: "#fff",
        primary: "#8B9EAC",
        secondary: "#5A87AC",
        accent: "#85C6F9",
      },
      fontFamily: {
        logo: ['"Black Ops One"', "system-ui"],
      },
    },
  },
  plugins: [],
};
