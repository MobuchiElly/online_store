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
        mainBg: "#FF7F58",
        layoutMainBg: "#DF6F46",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        "95px": "95px",
      },
    },
  },
  plugins: [],
};
