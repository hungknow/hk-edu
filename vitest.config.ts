import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      'packages/*',
      {
        // add "extends: true" to inherit the options from the root config
        extends: true,
        test: {
          include: ['src/**/*.test.ts'],
          environment: 'node',
        },
      },
    ],
  },
});