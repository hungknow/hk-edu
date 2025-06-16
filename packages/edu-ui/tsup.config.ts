import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    breadcrumb: 'src/components/breadcrumb.tsx',
    button: 'src/components/button.tsx',
    card: 'src/components/card.tsx',
    'dropdown-menu': 'src/components/dropdown-menu.tsx',
    input: 'src/components/input.tsx',
    sheet: 'src/components/sheet.tsx',
    table: 'src/components/table.tsx',
    tabs: 'src/components/tabs.tsx',
    tooltip: 'src/components/tooltip.tsx',
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
  noExternal: [
    "@radix-ui/react-dialog",
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-slot',
    '@radix-ui/react-tabs',
    "@radix-ui/react-tooltip"
  ],
  external: ["react"]
}); 