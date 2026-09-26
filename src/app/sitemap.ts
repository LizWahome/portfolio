import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://portfolio-kodibill.vercel.app";

  const projectRoutes = projects
    .filter((p) => p.status !== "Upcoming")
    .map((p) => ({
      url: `${base}/projects/${p.slug}`,
    }));

  return [{ url: base }, ...projectRoutes];
}
