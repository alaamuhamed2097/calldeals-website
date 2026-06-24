import type { MetadataRoute } from "next";
import { getIndustries, getSolutions, slugify } from "@/lib/api";

const base = (process.env.SITE_URL ?? "https://calldeals.example.com").replace(/\/+$/, "");

// Re-generate hourly so newly published industries/solutions appear.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/solutions",
    "/industries",
    "/pricing",
    "/about",
    "/contact",
    "/how-it-works",
  ];

  // Soft-fail to [] when the API is down, so the sitemap still builds.
  const [industries, solutions] = await Promise.all([getIndustries(), getSolutions()]);

  const industryRoutes = industries
    .filter((i) => i.hashTag?.trim())
    .map((i) => `/industries/${i.hashTag}`);

  const solutionRoutes = solutions
    .filter((s) => s.name?.trim())
    .map((s) => `/solutions/${slugify(s.name)}`);

  // Dedupe — CMS data can contain duplicate slugs/hashTags, and duplicate
  // <loc> entries are bad for SEO.
  const routes = [...new Set([...staticRoutes, ...industryRoutes, ...solutionRoutes])];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
