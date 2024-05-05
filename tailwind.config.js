const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'secondary': "#e2e8f0",
    },
    extend: {},
  },
  plugins: [],
});
