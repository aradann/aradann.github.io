import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import basicSsl from '@vitejs/plugin-basic-ssl';


export default defineConfig({
  plugins: [solidPlugin(), basicSsl()],
  build: {
    outDir: '../dist',
    sourcemap: true,
  },
  server: {
    port: 44300,
    https: true,
    host: '0.0.0.0',
    open: '../dist/index.html',
  },
});