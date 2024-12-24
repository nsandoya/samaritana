// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nsandoya.github.io/',
  base: '/samaritana/', 
  vite: {
    define: {
      'import.meta.env.STRAPI_URL': process.env.STRAPI_URL,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
  ],
});