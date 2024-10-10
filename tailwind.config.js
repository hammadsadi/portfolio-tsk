/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        motserat: ["Montserrat, 'sans - serif'"],
        poppin: ["Poppins, 'sans - serif'"],
      },
      colors: {
        primary: "#FD6F00",
      },
    },
  },
  plugins: [],
};
