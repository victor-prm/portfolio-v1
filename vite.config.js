import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
})