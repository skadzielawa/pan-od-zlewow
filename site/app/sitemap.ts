import type { MetadataRoute } from "next";
import { localeUrl, locales } from "@/lib/dictionary";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    pl: localeUrl("pl"),
    en: localeUrl("en"),
  };

  return locales.map((lang) => ({
    url: localeUrl(lang),
    alternates: { languages },
  }));
}
