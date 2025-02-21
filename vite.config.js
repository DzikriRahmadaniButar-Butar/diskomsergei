import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    [react()],
    compression({ algorithm: 'gzip' }),
    viteImagemin({
      webp: {
        quality: 80,
      },
      pngquant: {
        quality: [0.7, 0.9], // Optimasi PNG
      },
      mozjpeg: {
        quality: 80, // Optimasi JPG
      },
    }),
  ],
})
