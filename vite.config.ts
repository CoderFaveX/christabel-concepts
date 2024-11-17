import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Output folder for Vercel
  },
  server: {
    proxy: {
      "/api": "http://localhost:3500", // Proxy backend requests in dev
    },
  },
})
