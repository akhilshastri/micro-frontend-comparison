import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'supplierApp',
      filename: 'remoteEntry.js',
      exposes: {
        './SupplierComponent': './src/components/SupplierComponent.tsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 4001,
    cors: true
  },
  preview: {
    port: 4001,
    cors: true
  }
});
