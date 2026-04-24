import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@beluga-icon/core': new URL('./packages/core/src/index.ts', import.meta.url).pathname,
    },
    dedupe: ['react', 'react-dom'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['packages/*/src/**'],
      exclude: ['packages/*/src/icons/**'],
    },
  },
})
