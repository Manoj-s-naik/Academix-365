/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-minus-header": "calc(100vh - 7rem)",
      },
      boxSizing: {
        'border-box': 'border-box',
      },
    },
  },
  plugins: [],
};
