/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoKR: ["Noto Sans KR", "sans-serif"],
      },
      keyframes: {
        typingCursor: {
          from: {
            borderRight: "2px solid white",
          },
          to: { borderRight: "2px solid black" },
        },
        fontGrow: {
          from: { transform: "translateY(3em)", opacity: "1" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        spinner: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        videoListDetail: {
          from: { opacity: 0, height: "0px" },
          to: { opacity: 1, height: "120px" },
        },
      },
      animation: {
        typingCursor: "typingCursor 0.8s ease-in-out 0ms 6",
        fontGrow: "fontGrow 1s 2.5s linear forwards ",
        spinnerRotation: "spinner 1s linear infinite",
        videoListDetail: "videoListDetail 0.3s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};
