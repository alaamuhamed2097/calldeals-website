import { NextRequest } from "next/server";

/**
 * Media proxy for CMS-uploaded images.
 *
 * The Dashboard "Admin" app serves uploads from `{MEDIA_BASE}/uploads/...`,
 * usually on a separate host over a self-signed dev cert. Streaming the bytes
 * through this route (which uses the global `fetch`/undici — the only client
 * here that honours `NODE_TLS_REJECT_UNAUTHORIZED`) keeps the browser on a
 * trusted same-origin URL and sidesteps the API host's CORS policy.
 *
 * `mediaUrl()` in `lib/api.ts` builds the `/media/...` URLs this route serves.
 */
// Normalise the configured base so the final URL has exactly one `/uploads/`
// segment, whether MEDIA_BASE_URL is set to the host root or already ends in
// `/uploads` (both conventions are used across environments).
const MEDIA_ROOT = (process.env.MEDIA_BASE_URL ?? "http://localhost:5209")
  .replace(/\/+$/, "")
  .replace(/\/uploads$/i, "");

/** Cache resolved images at the edge/proxy for an hour. */
const CACHE_CONTROL = "public, max-age=3600, stale-while-revalidate=86400";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  if (!path?.length) return new Response(null, { status: 404 });

  const target = `${MEDIA_ROOT}/uploads/${path.map(encodeURIComponent).join("/")}`;

  let upstream: Response;
  try {
    upstream = await fetch(target, { next: { revalidate: 3600 } });
  } catch {
    // Media host unreachable (e.g. Admin app not running) — 502, not a crash.
    return new Response(null, { status: 502 });
  }

  if (!upstream.ok || !upstream.body) {
    return new Response(null, { status: upstream.status === 404 ? 404 : 502 });
  }

  const headers = new Headers();
  const contentType = upstream.headers.get("content-type") ?? "application/octet-stream";
  headers.set("content-type", contentType);
  headers.set("cache-control", CACHE_CONTROL);

  return new Response(upstream.body, { status: 200, headers });
}
