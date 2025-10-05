import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import history from 'connect-history-api-fallback'

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
    setupMiddlewares(middlewares) {
      middlewares.use(history())
      return middlewares
    },
  },
})
