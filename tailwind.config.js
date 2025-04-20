/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        retro: ['Orbitron', 'sans-serif'], 
        alt: ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  plugins: [],
}

  