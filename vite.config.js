import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';

export default defineConfig({
  plugins: [react()],
  
  // Base pour GitHub Pages (change 'Mon-port-folio-react-vite' par ton repo exact)
  base: '/Mon-port-folio-react-vite/',

  server: {
    middlewareMode: false,
    setupMiddlewares(middlewares) {
      // Permet le routing React sur Vite dev
      middlewares.use(
        history({
          index: '/index.html',
        })
      );
      return middlewares;
    },
  },
});
