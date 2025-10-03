import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  build: {
    target: 'esnext',
  },
  plugins: [
    nodePolyfills({
      include: ['path', 'buffer', 'process'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
    remixVitePlugin({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    UnoCSS(),
    tsconfigPaths(),
  ],
  envPrefix: ["VITE_", "OPENAI_LIKE_API_", "OLLAMA_API_BASE_URL"],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  define: {
    global: 'globalThis',
    module: '{ exports: {} }',
    exports: '{}',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});