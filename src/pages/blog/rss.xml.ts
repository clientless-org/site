import { getCollection } from "astro:content";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET({ site }: { site?: URL }) {
  const baseUrl = site ?? new URL("https://clientless.org");
  const posts = (await getCollection("blog")).sort(
    (left, right) => right.data.pubDate.valueOf() - left.data.pubDate.valueOf(),
  );
  const items = posts
    .map((post) => {
      const link = new URL(`/blog/${post.id}/`, baseUrl).toString();
      return `<item>
  <title>${escapeXml(post.data.title)}</title>
  <description>${escapeXml(post.data.description)}</description>
  <link>${link}</link>
  <guid>${link}</guid>
  <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
</item>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Clientless Blog</title>
  <description>Essays on capabilities, personal interfaces, and the end of fixed app containers.</description>
  <link>${new URL("/blog/", baseUrl).toString()}</link>
  ${items}
</channel>
</rss>`, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
