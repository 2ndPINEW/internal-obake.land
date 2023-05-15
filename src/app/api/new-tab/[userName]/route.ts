export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname;
  const appRoutePath = path.replace("/api", "");
  const origin = url.origin;

  const res = await fetch(origin + appRoutePath);
  const body = await res.text();

  return new Response(body.toString(), {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "maxage=3600, stale-while-revalidate=3600, immutable",
    },
  });
}
