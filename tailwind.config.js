/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ['bg-navbar-scrolled'],
  theme: {
    extend: {
      colors: {
        primary: "#023047",
        'navbar-scrolled': "#c89f9c",
      },
    },
  },
  plugins: [],
};
