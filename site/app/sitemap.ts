import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/dictionary";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/pl`,
      alternates: {
        languages: {
          pl: `${siteUrl}/pl`,
          en: `${siteUrl}/en`,
        },
      },
    },
    {
      url: `${siteUrl}/en`,
      alternates: {
        languages: {
          pl: `${siteUrl}/pl`,
          en: `${siteUrl}/en`,
        },
      },
    },
  ];
}
