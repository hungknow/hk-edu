import { defineConfig } from 'tsup';

export default defineConfig({
  target: 'node20',
  platform: 'node',
  entry: {
    index: 'src/index.ts',
  },
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  format: ['cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  noExternal: [ /(.*)/ ],
}); 