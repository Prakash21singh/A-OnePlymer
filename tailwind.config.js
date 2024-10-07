/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cr1: "url('/cr1.jpg')",
        cr2: "url('/cr2.jpg')",
        cr3: "url('/cr3.jpg')",
        cr4: "url('/cr4.jpg')",
        cr5: "url('/cr5.jpg')",
        hero: "url('/bg-hero2.jpg')",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        roboto: ["Roboto"],
        Montserrat: ["Montserrat"],
        lato: ["Lato"],
      },

      fontSize: {
        sm: "18px",
        md: "20px",
        lg: "22px",
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
          2: "#d1d5db",
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
          2: "#C40C0C",
        },
      },
      screens: {
        "-md": "930px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
