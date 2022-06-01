const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    //   extend: {},
    screens: {
      xs: "460px",
      ...defaultTheme.screens,
    },
  },

  plugins: [],
};
