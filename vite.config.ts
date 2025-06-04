import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import beep from '@rollup/plugin-beep'
import { imagetools } from 'vite-imagetools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), beep(), imagetools()],
  css: {
    postcss: {
      map: true
    }
  }
})
