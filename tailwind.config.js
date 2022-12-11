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
        blue: {
          100: "rgb(0, 99, 175)",
          85: "rgba(0,99,175, 0.85)",
          50: "rgba(0, 99, 175, 0.5)",
          hover: "rgb(0, 77, 138)",
        },

        "color-on-primary": colors.black,
        "color-on-secondary": colors.black,
        "color-on-blue": colors.white,
        "background-primary": colors.white,
        "background-secondary": "rgba(243, 243, 243, 0.502)",
      },
      fontFamily: {
        lato: ['"Lato"', "Arial", "Sans-serif"],
      },

      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.625rem",
        "2xl": "1.74rem",
        "3xl": "2.125rem",
        "4xl": "2.625rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

/*

Font sizes in design:

42 / 16 = 2.625REM
34px/16px = 2.125rem
28px / 16px = 1.74 rem
26px / 16px = 1.625rem
18px / 16 = 1.125 rem
16/16 = 1 rem
14px / 16 = 0.875

*/
