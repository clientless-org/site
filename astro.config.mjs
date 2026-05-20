import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeNext from "starlight-theme-next";

export default defineConfig({
  site: "https://clientless.dev",
  output: "static",
  vite: {
    server: {
      allowedHosts: ["jasons-mac-mini.local"],
    },
  },
  integrations: [
    starlight({
      title: "Clientless",
      description:
        "A new way to build apps where capabilities assemble into personal interfaces inside any host.",
      favicon: "/favicon.svg",
      plugins: [starlightThemeNext()],
      logo: {
        src: "./public/favicon.svg",
      },
      customCss: ["./src/styles/starlight.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/clientless",
        },
      ],
      sidebar: [
        {
          label: "Clientless",
          items: [
            { label: "Docs Home", slug: "docs" },
            { label: "The Thesis", slug: "docs/thesis" },
            { label: "Architecture", slug: "docs/architecture" },
            {
              label: "json-render Streams",
              slug: "docs/architecture/json-render-streams",
            },
          ],
        },
        {
          label: "Hosts",
          items: [
            { label: "Host Model", slug: "docs/hosts" },
            { label: "Static Sites", slug: "docs/static-sites" },
          ],
        },
      ],
    }),
  ],
});
