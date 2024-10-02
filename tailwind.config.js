/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "poppins"],
      },
      colors: {
        black: {
          1: "#0C0C0C",
          2: "#2C3639",
        },
        yellow: {
          1: "#F0A500",
          2: "#F4CE14",
        },
        gray: {
          1: "#F6F5F5",
        },
        white: {
          DEFAULT: "#F6F6F6",
        },
        one: "#D2B48C",
        two: "#2E8B57",
        three: "#D2691E",
        four: "#333333",
        primary: "#f8ffe4",
        secondary: "#e5f0fe",
        red: {
          1: "#B8001F",
        },
      },
      screens: {
        "-md": "930px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
