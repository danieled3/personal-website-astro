import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://danieled3.github.io',
  // Temporarily remove base for local development
  // base: '/personal-website-astro',
});
