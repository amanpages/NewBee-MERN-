import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 6868,
    proxy:{
      "/api/":"http://localhost:5000",
      "/uploads/":"http://localhost:5000",
    }
  }
})
