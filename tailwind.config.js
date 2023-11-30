/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      "primary": "#5149F2",
      "primary-50":"#E7DCFF",
      "secondary":"#1A8FE3",
      "white": "#ffffff",
      "black": "#111111",
      "gray":"#BDBDBD"
    },
    fontFamily: {
      sans: "Gilroy",
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
