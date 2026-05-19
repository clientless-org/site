import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeNext from "starlight-theme-next";

export default defineConfig({
  site: "https://clientless.dev",
  output: "static",
  integrations: [
    starlight({
      title: "Clientless",
      description:
        "A new application architecture where backend composition streams portable UI to every host.",
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
