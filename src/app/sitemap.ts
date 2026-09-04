import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com"; // replace once a custom domain is set

  const projectRoutes = projects
    .filter((p) => p.status !== "Upcoming")
    .map((p) => ({
      url: `${base}/projects/${p.slug}`,
    }));

  return [{ url: base }, ...projectRoutes];
}
