// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://512austinhome.com',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    // Exclude paid-ad landing pages (noindex) from the sitemap
    sitemap({ filter: (page) => !page.includes('/home-value') }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
