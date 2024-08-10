/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        mainBg: "#FF7F50",
        layoutMainBg: "#C05F3C",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        "14vh": "14.5vh",
      },
      height: {
        "57px": "57px",
        "87px": "87px",
        "226px": "226px",
        "425px": "425px",
      },
    },
  },
  plugins: [],
};
