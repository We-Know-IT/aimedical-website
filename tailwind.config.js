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
        xl: "2rem",
        "2xl": "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1380px",
        "2xl": "1600px", // Increased from default 1536px
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
        "translate-down": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "focus-in": {
          "0%": {
            opacity: 0,
            "-webkit-filter": "blur(12px)",
            filter: "blur(12px)",
          },
          "100%": {
            opacity: 1,
            "-webkit-filter": "blur(0)",
            filter: "blur(0)",
          },
        },
        "bounce-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(40px)" },
        },
        "bounce-up": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40px)" },
        },
        "zoom-slow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "flow-down": {
          "0%": { 
            transform: "translateY(-50%)",
            opacity: 1
          },
          "100%": { 
            transform: "translateY(50%)",
            opacity: 1
          },
        },
        "flow-up": {
          "0%": { 
            transform: "translateY(50%)",
            opacity: 1
          },
          "100%": { 
            transform: "translateY(-50%)",
            opacity: 1
          },
        },
        "flow-alternate": {
          "0%": { 
            transform: "translateY(-10%)",
            opacity: 1
          },
          "50%": { 
            transform: "translateY(10%)",
            opacity: 1
          },
          "100%": { 
            transform: "translateY(-10%)",
            opacity: 1
          },
        },
        "marquee-vertical": {
          "100%": { 
            transform: "translateY(-50%)"
          },
        },
        "marquee-vertical2": {
          "0%": { 
            transform: "translateY(-25%)"
          },
          "100%": { 
            transform: "translateY(25%)"
          },
        },        
        "marquee-vertical3": {
          "100%": { 
            transform: "translateY(-52%)"
          },
        },
        "marquee-vertical4": {
          "0%": { 
            transform: "translateY(-25%)"
          },
          "100%": { 
            transform: "translateY(27%)"
          },
        },
      },
      animation: {
        right: "right 0.5s ease-out",
        up: "up 0.5s ease-out ",
        "fade-in": "fade-in 0.5s ease-out 0.2",
        "fade-up": "fade-in 1.25s ease-out , translate-up 0.75s ease-out ",
        "fade-down": "fade-out 1.25s ease-in , translate-down 0.75s linear",
        "focus-in": "focus-in 500ms cubic-bezier(0.11, 0, 0.5, 0) 1",
        "bounce-down": "bounce-down 3s ease-in-out infinite",
        "bounce-up": "bounce-up 3s ease-in-out infinite",
        "zoom-slow": "zoom-slow 8s ease-in-out infinite",
        "flow-down": "flow-down 8s linear infinite",
        "flow-up": "flow-up 8s linear infinite",
        "flow-alternate": "flow-alternate 8s ease-in-out infinite",
        "marquee-vertical": "marquee-vertical var(--marquee-duration) linear infinite",
        "marquee-vertical2": "marquee-vertical2 var(--marquee-duration) linear infinite",
      },

      colors: {
        darkblue: {
          DEFAULT: "#333333",
          hover: "#0163AE",
          light: "#008cf7",
          active: "#0163AE",
          "page-active": "#91908F",
        },
        cyan: {
          DEFAULT: "#00EAC8",
        },
        beige: {
          DEFAULT: "#F1EDE9",
          active: "#EAf4FB",
          dark: "#FAF9F7",
        },
        darkgray: {
          DEFAULT: "#333333",
          active:"#FFFFFF99",
          book: "#B7B4B2",
          
        },
        lightblue: {
          DEFAULT: "#F4F9FD",
          active: "#EAf4FB",
        },  
        primary: {
          DEFAULT: "#0163AE",
          hover: "#004275",
          light: "#008cf7",
          active: "#013054",
        },

        secondary: {
          DEFAULT: "#00EBC8",
          hover: "#00c7a6",
          light: "#00f7e3",
          active: "#00b38f",
        },

        error: {
          DEFAULT: "#f44336",
          dark: "#890100",
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
        "background-secondary": {
          DEFAULT: "#FAF9F7",
          dark: "rgba(243, 243, 243, 1.0)",
        },
        "background-accent": "rgba(33, 33, 33, 1)",
        "surface-primary": {
          DEFAULT: colors.white,
          hover: "rgba(235, 235, 235, 0.9)",
        },
        "on-bg-primary": {
          DEFAULT: "#494949",
          hover: colors.gray[500],
          active: colors.gray[600],
        },
        "on-bg-secondary": { DEFAULT: colors.black, hover: colors.gray[500] },
        "on-bg-accent": {
          DEFAULT: colors.white,
          hover: "rgba(235, 235, 235, 0.9",
        },
        "on-surface-primary": {
          DEFAULT: colors.black,
          hover: colors.gray[500],
          active: colors.gray[600],
        },
        "on-primary": {
          hover: colors.gray[200],
          active: colors.gray[300],
          DEFAULT: colors.white,
        },
        "on-secondary": {
          DEFAULT: "#4A4A4A",
          hover: "#4A4A4A",
          active: "#4A4A4A",
        },
      },
      fontFamily: {
        lato: ['"Lato"', "Arial", "Sans-serif"],
        openSans: ['"Open Sans"', "Arial", "Sans-serif"],
        robotoFlex: ['"Roboto Flex"', '"Inter"', '"Helvetica Neue"', '"Helvetica"', '"Arial Unicode MS"', "Arial", "Sans-serif"],
        sans: ['"Inter"', '"Helvetica Neue"', '"Helvetica"', '"Arial Unicode MS"', "Arial", "Sans-serif"],
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
