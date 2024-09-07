const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      colors: {
        "MP-Blue": "#319ADE",
        "MP-DarkBlue": "#283D52",
        "MP-White": "#FFFFFF",
        "MP-Green": "#29CE72",
        "MP-Red": "#E9504B",
        "MP-RedUrgency": "#FE0000",
        "MP-BlueHover": "#4BA6E1",
        "MP-DarkBlueHover": "#3A5068",
        "MP-WhiteBackground": "#EBEEF3",
      },
    },
  },
  plugins: [],
});
