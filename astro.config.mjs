// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// The site address for link previews is set in src/data/wedding.ts (meta.siteUrl).
export default defineConfig({
  // Makes `npm run dev` reachable from a phone on the same Wi-Fi (local testing only).
  server: { host: true },

  // Fonts are downloaded from Google at build time and served from this site,
  // so guests' phones never make an extra connection to Google Fonts.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Great Vibes',
      cssVariable: '--font-great-vibes',
      weights: [400],
      styles: ['normal'],
      fallbacks: ['cursive'],
    },
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Lato',
      cssVariable: '--font-lato',
      weights: [400, 700],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
