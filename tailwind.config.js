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
      animation: {
        'fade-in-scale-up': 'fadeInScaleUp 1s ease-out' ,
        'fade-in': 'fadeIn 5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-up': 'scaleUp 0.3s ease-in-out',
      },
      keyframes: {
        fadeInScaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      scaleUp: {
        '0%': { transform: 'scale(0.95)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
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
     
     
    },
  },
  plugins: [
  ],
});
// fontFamily:{
//   sans:['Inter',...defaultTheme.fontFamily.sans],
// }

