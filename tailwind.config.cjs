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
      },
      animation: {
        moveRight: "moveRight 3s linear infinite",
        moveRightDelay: "moveRight 3s 0.5s linear infinite",
      },
    },
  },
  plugins: [],
};
