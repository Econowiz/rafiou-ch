import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://rafiou.ch",
  integrations: [react(), mdx()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
