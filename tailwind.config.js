/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        glitch: ['"Press Start 2P"', 'monospace'],
        retro: ['"Orbitron"', 'sans-serif'],
        poster: ['"Bebas Neue"', 'sans-serif'],
        horror: ['"Creepster"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'], // optional elegance
        mono: ['"Courier Prime"', 'monospace'], // fits 16mm labeling style
      },
      colors: {
        husets: {
          paper: '#e5dcc5',
          ink: '#111111',
          glow: '#fff7dc',
          oldyellow: '#f3ead3',
          dustygray: '#444444',
        },
      },
      dropShadow: {
        subtle: '0 0 6px rgba(255, 239, 184, 0.4)',
      },
    },
  },
  plugins: [],
};
