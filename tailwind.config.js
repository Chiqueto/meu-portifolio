/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        header: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundColor: {
        main: "#161513",
        header: "#222222",
      },
    },
  },
  plugins: [],
};
