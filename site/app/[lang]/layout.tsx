import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  getDictionary,
  isLocale,
  locales,
  siteUrl,
  type Locale,
} from "@/lib/dictionary";

type LangLayoutProps = LayoutProps<"/[lang]">;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }

  const dict = getDictionary(lang);

  return {
    title: dict.metaTitle,
    description: dict.metaDescription,
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        pl: `${siteUrl}/pl`,
        en: `${siteUrl}/en`,
        "x-default": `${siteUrl}/pl`,
      },
    },
    openGraph: {
      title: dict.metaTitle,
      description: dict.metaDescription,
      url: `${siteUrl}/${lang}`,
      locale: lang === "pl" ? "pl_PL" : "en_GB",
      type: "website",
      siteName: "Pan od zlewów",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <>
      <SiteHeader lang={locale} />
      <div className="pt-16 md:pt-20">{children}</div>
      <SiteFooter lang={locale} />
    </>
  );
}
