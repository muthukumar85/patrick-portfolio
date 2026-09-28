import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['drag-eco-luxury-translation.trycloudflare.com', 'patrick-ruban.netlify.app'],

  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react') || id.includes('react-dom')) return 'vendor'
          if (id.includes('framer-motion')) return 'motion'
        },
      },
    },
  },
})
// add server.allowedHosts graduates-fleece-brick-supplements.trycloudflare.com'],
