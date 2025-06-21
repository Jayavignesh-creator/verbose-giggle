/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ef464b", // light blue
        },
        secondary: {
          light: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
