/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#240D57",
        secondary: "#4F4F4F",
        gradientOne: "#8456EC",
        gradientTwo: "#E87BF8",
        bgColor: "#F6F2FF",
        neutral: "#828282",
      },
      fontSize: {
        "6xl": "64px",
      },
    },
  },
  plugins: [],
};
