/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};
