/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '840px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      
      'xs': {'max': '580px'},
    },
    square:{
      width: "20%"
    },
    extend: {
      colors: {
        primary: "#131E47 ",
        players: "#03CFD633",
        completedBG: "rgba(33, 150, 83, 0.2)",
        reviewBG: "rgba(245, 154, 16, 0.2)",
        expiredBG: "rgba(254, 17, 17, 0.2)",
        redoBG: "rgba(19, 30, 71, 0.2)"
      },
    },
  },
};
  