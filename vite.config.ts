import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routers': path.resolve(__dirname, './src/routers'),
      '@types': path.resolve(__dirname, './src/types'),
      '@wrappers': path.resolve(__dirname, './src/wrappers'),
      '@modules': path.resolve(__dirname, './src/modules'),
    }
  }
})
