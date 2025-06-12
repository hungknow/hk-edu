import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    // 'awilix': 'src/awilix/index.ts'
  },
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
}); 