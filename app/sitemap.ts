import type { MetadataRoute } from "next";

const base = "https://calldeals.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/solutions", "/industries", "/pricing", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
