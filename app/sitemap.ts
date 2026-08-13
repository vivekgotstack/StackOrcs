import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://stackorcs.com";
  const routes = [
    "",
    "/services",
    "/approach",
    "/work",
    "/work/modastitch",
    "/work/chatsaver",
    "/insights",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/security",
    "/accessibility",
  ];
  return routes.map((route) => ({
    url: base + route,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
