import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://avela.travel',
  compressHTML: true,
  integrations: [sitemap()],
});
