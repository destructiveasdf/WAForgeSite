/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-horizontal': 'bounce-horizontal 1s infinite',
      },
      keyframes: {
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],

    }
    
  },
  plugins: [],
}

