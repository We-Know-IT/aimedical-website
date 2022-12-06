const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        blue: {
          100: "rgb(0, 99, 175)",
          85: "rgba(0,99,175, 0.85)",
          50: "rgba(0, 99, 175, 0.5)",
          accent: "#28B2FF",
        },
        "color-primary": colors.black,
        "color-secondary": colors.white,
        "bg-primary": colors.white,
        "bg-secondary": "rgba(243, 243, 243, 0.502)",
      },
      fontFamily: {
        lato: ['"Lato"', "Arial", "Sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
