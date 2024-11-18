import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output folder for Vercel
    emptyOutDir: false
  },
  server: {
    proxy: {
      "/api": "http://localhost:3500", // Proxy backend requests in dev
    },
  },
})
