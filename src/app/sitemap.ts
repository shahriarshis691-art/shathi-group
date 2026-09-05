import { type MetadataRoute } from "next";
import { companies } from "@/data/companies";
import { cortexEngineers } from "@/data/cortexEngineers";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const route = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ): MetadataRoute.Sitemap[number] => ({
    url: new URL(path, siteConfig.url).href,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    route("/", 1, "yearly"),
    route("/about", 0.7, "yearly"),
    route("/leadership", 0.7, "yearly"),
    route("/esg", 0.6, "yearly"),
    route("/careers", 0.6, "monthly"),
    route("/ceravo", 0.8, "monthly"),
    route("/velorix", 0.8, "monthly"),
    ...companies.map((company) =>
      route(`/companies/${company.slug}`, 0.8, "monthly")
    ),
    ...cortexEngineers.map((engineer) =>
      route(
        `/companies/cortex-softsolutions/engineers/${engineer.slug}`,
        0.6,
        "monthly"
      )
    ),
  ];
}
