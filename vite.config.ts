import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
    port: 8080,
  },
  resolve: {
    alias: {
      src: '/src',
      domains: '/src/domains',
      pages: '/src/pages',
    },
  },
});
