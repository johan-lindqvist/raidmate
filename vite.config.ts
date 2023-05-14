import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
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
      theme: '/src/theme',
    },
  },
});