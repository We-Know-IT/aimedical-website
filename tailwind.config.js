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
          dark: "rgb(0, 99, 175)",
          light: "rgba(0, 99, 175, 0.5)",
        },
        "text-primary": colors.black,
        "text-secondary": colors.white,
        "bg-primary": colors.white,
        "bg-secondary": "rgba(243, 243, 243, 0.502)",
      },
    },
  },
  plugins: [],
};
