import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    // You might need to inline or externalize some dependencies if they cause issues.
    // For workspace packages, Vitest usually handles them correctly with tsconfigPaths.
    // deps: {
    //   inline: [/@hk\/.*/],
    // },
  },
}); 