import type {
  ApiEnvelope,
  Banner,
  IndustryDetail,
  IndustrySummary,
  Partner,
  SolutionDetail,
  SolutionSummary,
} from "@/types";
import { BannerType } from "@/types";

/**
 * Server-side CMS client for the Calldeals Dashboard (.NET) API.
 *
 * All calls run on the server (Next.js App Router fetches server-side), which
 * sidesteps the API's restrictive CORS policy. Image paths returned by the CMS
 * are relative to the API host and are resolved with `mediaUrl()`.
 */

const API_BASE = (process.env.API_BASE_URL ?? "http://localhost:5050").replace(/\/+$/, "");

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
  // Resolve to a same-origin `/media/...` path that Next proxies to the media
  // host (see `rewrites` in next.config.mjs). Keeping it same-origin avoids
  // self-signed cert rejections in the browser and the API's CORS policy.
  const clean = value.replace(/^\/+/, "");
  if (clean.startsWith("uploads/")) return `/media/${clean.slice("uploads/".length)}`;
  if (clean.includes("/")) return `/media/${clean}`;
  if (folder) return `/media/${folder}/${clean}`;
  return `/media/${clean}`;
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

/**
 * All solutions (soft-fails to `[]`). The home "Our Solutions" section filters
 * to `showInHomePage` and orders by `displayOrder`.
 */
export async function getSolutions(): Promise<SolutionSummary[]> {
  try {
    return (await apiGet<SolutionSummary[]>("/api/Solution")) ?? [];
  } catch {
    return [];
  }
}

/** Home partners/logos (soft-fails to `[]`). */
export async function getPartners(): Promise<Partner[]> {
  try {
    return (await apiGet<Partner[]>("/api/Partner")) ?? [];
  } catch {
    return [];
  }
}

/** All banners (soft-fails to `[]`). */
export async function getBanners(): Promise<Banner[]> {
  try {
    return (await apiGet<Banner[]>("/api/Banner")) ?? [];
  } catch {
    return [];
  }
}

/** The most recent "sub home banner" image, or `null` when none exists. */
export async function getSubHomeBanner(): Promise<Banner | null> {
  const banners = await getBanners();
  return banners.find((b) => b.type === BannerType.SubHomeBanner) ?? null;
}

/**
 * URL-safe slug from a solution name. Solutions have no slug/`hashTag` field in
 * the CMS, so the public `/solutions/[slug]` route derives one from the name
 * (e.g. "Call Center" → "call-center") and resolves it back via `getSolutions()`.
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Fetch a single solution (with related sections) by its CMS id. */
export async function getSolutionById(id: string): Promise<SolutionDetail | null> {
  return apiGet<SolutionDetail>(`/api/Solution/${encodeURIComponent(id)}`);
}

/**
 * Resolve a name-derived slug to a full solution detail. Since the API has no
 * by-slug endpoint, we match the slug against the solution list, then fetch the
 * detail by id. Returns `null` when no solution matches the slug.
 */
export async function getSolutionBySlug(slug: string): Promise<SolutionDetail | null> {
  // Use the throwing `apiGet` (not soft-failing `getSolutions`) so a real API
  // outage surfaces as the error boundary — consistent with industries —
  // instead of a misleading 404. A successful-but-empty list still yields null.
  const list = (await apiGet<SolutionSummary[]>("/api/Solution")) ?? [];
  const match = list.find((s) => slugify(s.name) === slug);
  if (!match) return null;

  // The detail endpoint can fail on its sub-table queries (known backend bug).
  // Degrade gracefully to summary-only so the page still renders the hero/intro;
  // related sections fill in automatically once the API returns them.
  try {
    const detail = await getSolutionById(match.id);
    if (detail) return detail;
  } catch {
    /* fall through to summary-only */
  }
  return { solution: match, features: [], testimonials: [], questions: [], blogs: [] };
}
