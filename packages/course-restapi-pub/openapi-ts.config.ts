import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './openapi.yaml',
  output: {
    indexFile: false, 
    path:'src',
  },
  plugins: [
    ...defaultPlugins,
    '@hey-api/client-fetch',
    'zod'],
});
