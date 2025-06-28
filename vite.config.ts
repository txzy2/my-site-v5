import {defineConfig} from 'vite';
import {fileURLToPath, URL} from 'node:url';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-site-v5/', // Важно! Замените на имя вашего репозитория
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist', // Папка для сборки (по умолчанию и так dist)
    emptyOutDir: true, // Очищать папку перед сборкой
    sourcemap: false // Отключить sourcemaps для production
  }
});
