import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coldbrookrecovery.co',
  compressHTML: true,

  build: {
    inlineStylesheets: 'always'
  },

  integrations: [sitemap()]
});