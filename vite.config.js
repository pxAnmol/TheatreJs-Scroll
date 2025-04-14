import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'theatre': ['@theatre/core', '@theatre/studio', '@theatre/r3f']
        }
      }
    }
  },
})
