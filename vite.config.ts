import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import generouted from '@generouted/react-router/plugin'
import devtoolsJson from 'vite-plugin-devtools-json'
import beep from '@rollup/plugin-beep'
import { imagetools } from 'vite-imagetools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    generouted(), 
    devtoolsJson(), 
    beep(), 
    imagetools({
      defaultDirectives: [
        ['format', 'webp']
      ]
    })
  ],
  css: {
    postcss: {
      map: true
    }
  }
})
