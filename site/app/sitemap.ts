import type { MetadataRoute } from "next";
import { localeUrl, locales } from "@/lib/dictionary";

export const dynamic = "force-static";

const paths = ["", "przetwarzanie-danych"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) => {
    const languages = {
      pl: localeUrl("pl", path),
      en: localeUrl("en", path),
    };

    return locales.map((lang) => ({
      url: localeUrl(lang, path),
      alternates: { languages },
    }));
  });
}
