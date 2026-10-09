// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages user site: https://tiankaiwen23.github.io
  site: "https://tiankaiwen23.github.io",
  // hover-prefetch every internal link: nav transitions feel native
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // the floating "Menu" toolbar is dev-only and never ships, but it
  // overlaps the back-to-top button in preview — keep it off
  devToolbar: { enabled: false },
  redirects: { '/cv': '/cv.pdf', '/writing': '/blog', '/research': '/' },
});
