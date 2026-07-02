import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/StreamedV2/', // Or whatever your repository name is
  plugins: [react()]
})