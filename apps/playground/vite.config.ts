import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(_config => {
  return {
    clearScreen: false,

    plugins: [react({ fastRefresh: true, jsxRuntime: 'classic' })],

    server: {
      port: 3030,
      strictPort: true,
    },

    build: {
      target: ['es2019'],
      brotliSize: true,
      sourcemap: true,
      minify: true,
    },
  }
})
