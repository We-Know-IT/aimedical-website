const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        xl: "1.75rem",
      },
    },
    extend: {
      colors: {
        blue: {
          100: "rgb(0, 99, 175)",
          85: "rgba(0,99,175, 0.85)",
          50: "rgba(0, 99, 175, 0.5)",
          hover: "rgb(0, 77, 138)",
        },

        primary: {
          DEFAULT: "#0063AF",
          dark: "#004275",
          light: "#008cf7",
        },

        error: {
          DEFAULT: "#f44336",
          dark: "#d32f2f",
          light: "#e57373",
        },

        warning: {
          DEFAULT: "#ffa726",
          dark: "#f57c00",
          light: "#ffb74d",
        },

        success: {
          DEFAULT: "#66bb6a",
          dark: "#388e3c",
          light: "#81c784",
        },

        "color-on-primary": colors.black,
        "color-on-secondary": colors.black,
        "color-on-blue": colors.white,
        "background-primary": colors.white,
        "background-secondary": "rgba(243, 243, 243, 0.502)",

        white: {
          hover: "rgba(235, 235, 235, 0.9)",
          DEFAULT: "rgb(255, 255, 255)",
        },
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
        "5xl": "3rem",
      },
      boxShadow: {
        md: "0 0 6px -1px rgb(0 0 0 / 0.1), 0 0 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 0 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};

/*

Font sizes in design:

48 / 16 = 3rem
42 / 16 = 2.625REM
34px/16px = 2.125rem
28px / 16px = 1.74 rem
26px / 16px = 1.625rem
18px / 16 = 1.125 rem
16/16 = 1 rem
14px / 16 = 0.875

*/
