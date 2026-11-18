import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://avelatravel.com',
  compressHTML: true,
  /* /celebrations is noindex while Stacie reviews the layout, so it must not be
     submitted to Google either. A page can carry a robots tag and still walk into the
     sitemap, which is a mixed signal at best and, for a draft, publishes work nobody
     approved. Drop the filter when the page goes live. */
  integrations: [sitemap({ filter: (page) => !page.includes('/celebrations') })],
});
