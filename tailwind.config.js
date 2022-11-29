/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        800: "800px",
        900: "900px",
      },
      colors: {
        yellow: "#ecd8bd",
        black: "#212121",
        white: "#f7f7f7",
        grey: "#4f4f4f",
      },
    },
    fontFamily: {
      base: ["Merriweather", "serif"],
      num: ["MiriamLibre", "sans-serif"],
    },
    fontSize: {
      16: "16px",
      18: "18px",
      22: "22px",
      24: "24px",
      36: "36px",
      48: "48px",
      64: "64px",
    },
  },
  plugins: [],
};
