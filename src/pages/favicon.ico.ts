export const prerender = true;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Clientless">
  <rect width="128" height="128" rx="28" fill="#101820"/>
  <text x="64" y="101" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="700" fill="#32d296">a</text>
  <text x="61" y="72" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="82" font-weight="700" fill="#f6f1e8">c</text>
</svg>`;

export function GET() {
  return new Response(favicon, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
}
