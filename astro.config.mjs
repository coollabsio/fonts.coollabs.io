import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://fonts.coollabs.io",
  trailingSlash: "never",
  build: {
    format: "file"
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
    }
  },
  server: {
    host: '0.0.0.0'
  },
  integrations: [svelte(), sitemap()]
});
