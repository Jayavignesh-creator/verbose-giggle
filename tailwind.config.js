/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#eb262a",
        },
        secondary: {
          light: "#ffffff",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulse: "pulse 1s infinite",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
