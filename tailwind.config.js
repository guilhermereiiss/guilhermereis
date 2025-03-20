/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vaporwave: {
          background: 'linear-gradient(180deg, #ff6ec7, #7853ff)',
          text: '#ffffff',
          neonPink: '#ff6ec7',
          neonBlue: '#7853ff',
          neonGreen: '#00ff9f',
          neonYellow: '#ffd300',
        },
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive'],
        sans: ['"Roboto"', 'sans-serif'],
      },
      container: {
        padding: '1rem',
      },
    },
  },
  plugins: [],
};