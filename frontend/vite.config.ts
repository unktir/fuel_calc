import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    !process.env.VITEST ? checker({ typescript: true }) : undefined,
    tsconfigPaths(),
    react(),
    svgr(),
  ],
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.mts',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.scss',
    ],
  },
  build: {
    outDir: 'build',
  },
});
