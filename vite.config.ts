import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/streamV2', // Or whatever your repository name is
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
      },
    },
  },
})