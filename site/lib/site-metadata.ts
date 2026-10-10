import type { Metadata, Viewport } from "next";
import { getDictionary, localeUrl, siteUrl, type Locale } from "@/lib/dictionary";

export const viewport: Viewport = {
  themeColor: "#e7eeef",
  width: "device-width",
  initialScale: 1,
};

export function buildMetadata(lang: Locale): Metadata {
  const dict = getDictionary(lang);
  const url = localeUrl(lang);

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Pan od zlewów",
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        pl: localeUrl("pl"),
        en: localeUrl("en"),
        "x-default": localeUrl("pl"),
      },
    },
    openGraph: {
      title: dict.metaTitle,
      description: dict.metaDescription,
      url,
      locale: lang === "pl" ? "pl_PL" : "en_GB",
      type: "website",
      siteName: "Pan od zlewów",
    },
  };
}
