import { defineConfig } from 'vite'

export default defineConfig({
 base: '/portfolio-v1/',
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
})