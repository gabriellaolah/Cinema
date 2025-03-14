import { defineConfig } from 'vite';
import { definePlugin } from 'sanity';

export default defineConfig({
  root: '.', // ensures vite treats current dir explicitly as root
  css: {
    postcss: {
      plugins: [
        require('@tailwindcss/postcss')({ config: './tailwind.config.js' }),
        require('autoprefixer'),
      ],
    },
  },
});

