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
      gridTemplateColumns: {
        // Simple 16 column grid
        "advantage-card": "40px auto",
      },
      keyframes: {
        right: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        up: {
          "0%": { transform: "scale(1, 0)" },
          "100%": { transform: "scale(1, 1)" },
        },
        "translate-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        circle: {
          "0%": {
            "stroke-dashoffset": "calc(3.14 * 100px)",
          },
          "100%": {
            "stroke-dashoffset": "calc(3.14 * 100px / 2 - 15px)",
          },
        },
      },
      animation: {
        right: "right 0.5s ease-out",
        up: "up 0.5s ease-out ",
        "fade-in": "fade-in 0.5s ease-out 0.2",
        circle: "circle 1s ease-in-out",
        "slide-up": "translate-up 1s ease-out, fade-in 1.5s ease-out 0.25s",
      },

      colors: {
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
        "background-primary": {
          DEFAULT: colors.white,
          hover: "rgba(235, 235, 235, 0.9)",
        },
        "background-secondary": "rgba(243, 243, 243, 0.502)",
        "surface-primary": colors.white,
        "on-bg-primary": { DEFAULT: colors.black, hover: colors.gray[500] },
        "on-bg-secondary": { DEFAULT: colors.black, hover: colors.gray[500] },
        "on-surface-primary": {
          DEFAULT: colors.black,
          hover: colors.gray[500],
        },
        "on-primary": {
          hover: "rgba(235, 235, 235, 0.9)",
          DEFAULT: colors.white,
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
