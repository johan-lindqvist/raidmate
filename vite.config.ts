import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    global: {},
  },
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
      'app-constants': '/src/app-constants',
      components: '/src/components',
      domains: '/src/domains',
      pages: '/src/pages',
      theme: '/src/theme',
      types: '/src/types',
    },
  },
});
