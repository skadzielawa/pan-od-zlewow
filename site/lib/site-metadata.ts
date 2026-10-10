import type { Metadata, Viewport } from "next";
import { getDictionary, localeUrl, siteUrl, type Locale } from "@/lib/dictionary";

export const viewport: Viewport = {
  themeColor: "#e7eeef",
  width: "device-width",
  initialScale: 1,
};

export const privacyPath = "przetwarzanie-danych";

export function buildMetadata(lang: Locale, path = ""): Metadata {
  const dict = getDictionary(lang);
  const url = localeUrl(lang, path);
  const title = path === privacyPath ? dict.privacyTitle : dict.metaTitle;
  const description = path === privacyPath ? dict.privacyDescription : dict.metaDescription;

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Pan od zlewów",
    title: title,
    description: description,
    alternates: {
      canonical: url,
      languages: {
        pl: localeUrl("pl", path),
        en: localeUrl("en", path),
        "x-default": localeUrl("pl", path),
      },
    },
    openGraph: {
      title,
      description,
      url,
      locale: lang === "pl" ? "pl_PL" : "en_GB",
      type: "website",
      siteName: "Pan od zlewów",
    },
  };
}
