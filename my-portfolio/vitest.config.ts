/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
    alias: {
      '\\.(png|jpg|jpeg|gif|svg|webp|mp4|mov|avi|webm)$': path.resolve(
        __dirname,
        'src/test/mocks/fileMock.ts'
      ),
    },
  },
});
