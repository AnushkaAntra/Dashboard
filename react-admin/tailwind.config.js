/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    colors: {
      lightPrimary: "#C6EBC5",
      lightTextPrimary: "#000000",
      lightestPrimary: "#AFC8AD",

      darkPrimary: "#182c25",
      darkTextPrimary: "#FFFFFF",
      darkestPrimary: "#455b55",

      secondary: "#EEF0E5",
      darkSecondary: "#B6C4B6",
    },
    extend: {},
  },
  plugins: [],
};
