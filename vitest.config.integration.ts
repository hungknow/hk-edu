import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // it is recommended to define a name when using inline configs
    name: 'integration-test',
    include: ['integration-tests/**/*.test.ts'],
    environment: 'node',
  },
}); 