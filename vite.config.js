/* eslint-env node */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 部署配置
  // 如果使用 username.github.io 儲存庫，請設為 '/'
  // 如果使用專案儲存庫，請設為 '/repository-name/'
  //base: process.env.NODE_ENV === 'production' ? '/academic-website/' : '/',
  base: '/',
  
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      /* eslint-disable-next-line no-undef */
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // 建置優化
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})
