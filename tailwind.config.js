const defaultTheme=require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'smoky-light': 'rgba(99, 164, 255, 0.7)', // Light blue
        'smoky-mid': 'rgba(67, 56, 202, 0.7)',   // Mid blue
        'smoky-dark': 'rgba(37, 99, 235, 0.7)',  // Dark blue
      },
      backgroundImage: {
        'smoky-gradient': 'linear-gradient(to bottom right, rgba(99, 164, 255, 0.7), rgba(67, 56, 202, 0.7), rgba(37, 99, 235, 0.7))',
      },
      blur: {
        'sm': '4px',  // Custom blur size
      },
      backgroundBlendMode: {
        'overlay': 'overlay',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s  alternate, blink .7s infinite"
      }
     
    },
  },
  plugins: [
    require('daisyui'),
  ],
});
// fontFamily:{
//   sans:['Inter',...defaultTheme.fontFamily.sans],
// }

