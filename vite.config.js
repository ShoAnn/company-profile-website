import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/company-profile-website',
  plugins: [react()],
  server: {
    port: 3000,
  }
})
