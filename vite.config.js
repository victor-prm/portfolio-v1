import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/portfolio-v1/' : '/',
    server: {
      historyApiFallback: true,
    },
    build: {
      outDir: 'docs',
      assetsDir: 'assets',
      emptyOutDir: true,
    },
  }
})