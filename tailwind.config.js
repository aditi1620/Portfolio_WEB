/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js"],
  theme: {
    screens:{
      xs:"360px",
      sm:"412px",
      md:"640px",
      lg:"768px",
      xl:"1080px",
      xxl:"1280px",
      xxxl:"1530px",
    },
    extend: {
      backgroundImage:{
        'bg1':"url('./portfolio_front_img.png')",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


