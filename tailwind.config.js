/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fbf9eb",
          100: "#f5f0cc",
          200: "#ece19c",
          300: "#e1cb63",
          400: "#d7b438",
          500: "#c79e2b",
          600: "#af7f23",
          700: "#895c1f",
          800: "#734a20",
          900: "#623f21",
          950: "#39200f",
        },
      },
    },
  },
  plugins: [],
};
