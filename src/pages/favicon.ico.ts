export const prerender = true;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Clientless">
  <defs>
    <mask id="c-cut">
      <rect width="128" height="128" fill="white"/>
      <circle cx="57" cy="67" r="25" fill="black"/>
      <rect x="82" y="49" width="46" height="36" fill="black"/>
    </mask>
  </defs>
  <rect width="128" height="128" rx="28" fill="#101820"/>
  <path d="M82 24h18v86H82z" fill="#32d296"/>
  <circle cx="57" cy="67" r="43" fill="#f6f1e8" mask="url(#c-cut)"/>
</svg>`;

export function GET() {
  return new Response(favicon, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
}
