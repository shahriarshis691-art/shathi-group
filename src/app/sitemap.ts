import { type MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: new URL("/", siteConfig.url).href,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: new URL("/about", siteConfig.url).href,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/businesses", siteConfig.url).href,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: new URL("/contact", siteConfig.url).href,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
