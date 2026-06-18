import type { ApiEnvelope, IndustryDetail, IndustrySummary } from "@/types";

/**
 * Server-side CMS client for the Calldeals Dashboard (.NET) API.
 *
 * All calls run on the server (Next.js App Router fetches server-side), which
 * sidesteps the API's restrictive CORS policy. Image paths returned by the CMS
 * are relative to the API host and are resolved with `mediaUrl()`.
 */

const API_BASE = (process.env.API_BASE_URL ?? "http://localhost:5050").replace(/\/+$/, "");
const MEDIA_BASE = (process.env.MEDIA_BASE_URL ?? API_BASE).replace(/\/+$/, "");

/** Revalidate window for ISR (seconds). */
const REVALIDATE = 300;

const IMAGE_EXT = /\.(webp|png|jpe?g|gif|svg|avif)$/i;

/** True when the value looks like an uploaded image file (vs. an emoji/icon name). */
export function isImageFile(value: string | null | undefined): boolean {
  return !!value && (IMAGE_EXT.test(value) || /^https?:\/\//i.test(value));
}

/**
 * Resolve a CMS image reference to an absolute URL (or null).
 *
 * The CMS stores only the bare filename (e.g. `abc.webp`) and serves it from
 * `wwwroot/uploads/{folder}/` (see Dashboard `IndustrySubServices`/`FileUploadService`),
 * so the per-entity `folder` is required to build the path. Absolute URLs and
 * values that already contain a path are passed through. Non-image values
 * (e.g. an emoji icon) return null so callers can render them as text.
 */
export function mediaUrl(
  value: string | null | undefined,
  folder?: string
): string | null {
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  if (!isImageFile(value)) return null;
  const clean = value.replace(/^\/+/, "");
  if (clean.includes("/")) return `${MEDIA_BASE}/${clean}`;
  if (folder) return `${MEDIA_BASE}/uploads/${folder}/${clean}`;
  return `${MEDIA_BASE}/uploads/${clean}`;
}

/** Thrown for real API failures (outage, 5xx, success=false) — NOT for 404. */
export class ApiError extends Error {
  readonly status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

/**
 * GET an envelope-wrapped resource.
 * - Returns `null` ONLY for a genuine 404 (resource missing).
 * - Throws `ApiError` for unreachable host / non-2xx / `success:false`, so a
 *   transient outage is never silently masked as "not found".
 */
async function apiGet<T>(path: string): Promise<T | null> {
  let res: Response;
  try {
    res = await fetch(`${API_BASE}${path}`, { next: { revalidate: REVALIDATE } });
  } catch (err) {
    throw new ApiError(`API unreachable at ${API_BASE}${path}: ${(err as Error).message}`, 503);
  }

  if (res.status === 404) return null;
  if (!res.ok) throw new ApiError(`API responded ${res.status} for ${path}`, res.status);

  const envelope = (await res.json()) as ApiEnvelope<T>;
  if (!envelope.success) {
    throw new ApiError(envelope.message || `API returned success=false for ${path}`, 502);
  }
  return envelope.data ?? null;
}

/**
 * List all industries. Safe to soft-fail: returns `[]` when the API is down so
 * the site still builds and the hub/`generateStaticParams` degrade gracefully.
 */
export async function getIndustries(): Promise<IndustrySummary[]> {
  try {
    return (await apiGet<IndustrySummary[]>("/api/Industry")) ?? [];
  } catch {
    return [];
  }
}

/**
 * Fetch a single industry (with all related sections) by its slug (`hashTag`).
 * Returns `null` for a real 404 (→ caller renders notFound()); throws on a true
 * API error (→ error boundary / 500) so existing pages never 404 during an outage.
 */
export async function getIndustryBySlug(slug: string): Promise<IndustryDetail | null> {
  return apiGet<IndustryDetail>(`/api/Industry/by-slug/${encodeURIComponent(slug)}`);
}
