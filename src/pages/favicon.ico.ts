export const prerender = true;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Clientless">
  <rect width="128" height="128" rx="28" fill="#101820"/>
  <text x="64" y="88" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="700" fill="#32d296">a</text>
  <text x="58" y="78" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="86" font-weight="700" fill="#f6f1e8">c</text>
</svg>`;

export function GET() {
  return new Response(favicon, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
}
