// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkFlexibleContainers from 'remark-flexible-containers';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    remarkPlugins: [remarkFlexibleContainers],
  },
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
});
