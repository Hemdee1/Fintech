/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi: "Satoshi, sans-serif",
        Zendot: "Zen Dots, cursive",
      },
      width: {
        fullscreen: "1512px",
      },
      colors: {
        primary: "#000210",
        secondary: "#777A98",
      },
      keyframes: {
        moveRight: {
          "0%": { left: "-40px" },
          "20%": {
            left: "300px",
          },
          "100%": {
            left: "300px",
          },
        },
        shoot: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "40%": {
            transform: "translate(1500px, 1500px)",
          },
          "100%": {
            transform: "translate(1500px, 1500px)",
          },
        },
        shine: {
          "50%": {
            opacity: 0.1,
            scale: 0.2,
          },
          "100%": {
            opacity: 1,
            scale: 1,
          },
        },
      },
      animation: {
        moveRight: "moveRight 3s linear infinite",
        moveRightDelay: "moveRight 3s 0.5s linear infinite",
        shoot: "shoot 3s ease-out infinite",
        shine: "shine 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
