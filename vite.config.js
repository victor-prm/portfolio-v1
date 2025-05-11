import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/', // or './' if deploying to subfolder like GitHub Pages
  server: {
    historyApiFallback: true, // enable SPA routing with History API fallback
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html', // single page app: single entry point
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'pages', // folder to copy
          dest: ''      // copy into root of dist/
        }
      ]
    })
  ]
});