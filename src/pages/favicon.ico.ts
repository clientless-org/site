export const prerender = true;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Clientless">
  <rect width="128" height="128" rx="28" fill="#101820"/>
  <path d="M30 68c0-22 16-38 38-38 12 0 22 4 30 12L84 57c-4-5-9-8-16-8-11 0-19 8-19 19s8 19 19 19c7 0 12-3 16-8l14 15c-8 8-18 12-30 12-22 0-38-16-38-38Z" fill="#f6f1e8"/>
  <path d="M76 31h24v66H76V82h8V46h-8V31Z" fill="#32d296"/>
</svg>`;

export function GET() {
  return new Response(favicon, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
  });
}

