import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': {
      VITE_API_ENDPOINT: JSON.stringify(process.env.VITE_API_ENDPOINT)
    }
  }
});
