/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs:'2px',
        md: '5px',
      },
    },
  },
  plugins: [],
};
