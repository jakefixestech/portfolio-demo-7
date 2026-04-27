import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://coldbrookrecovery.co',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  }
});
