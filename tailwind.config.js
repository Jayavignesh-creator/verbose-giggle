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
      animation: {
        pulse: "pulse 1s infinite",
      },
    },
  },
  plugins: [],
};
