/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#0A0A0A',
        'black-secondary': '#0A0A0A99',
        'orange-primary': '#FF8132',
        'white-primary': '#FFFFFF',
        'white-secondary': '#FFFFFFCC',
        'grey-primary': '#0A0A0A3D',
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
