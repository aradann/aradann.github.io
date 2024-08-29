import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import basicSsl from '@vitejs/plugin-basic-ssl';


export default defineConfig({
  plugins: [solidPlugin(), basicSsl()],
  build: {
    outDir: '../dist',
    sourcemap: false,
    rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          chunkFileNames: '[name].js',
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'deps';
            }
          }
        }
  },
  },
  server: {
    port: 44300,
    https: true,
    host: '0.0.0.0',
    open: '../dist/index.html',
  },
});