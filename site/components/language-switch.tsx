"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, type Locale } from "@/lib/dictionary";

export function LanguageSwitch({ lang }: { lang: Locale }) {
  const pathname = usePathname() ?? "/";
  const other: Locale = lang === "pl" ? "en" : "pl";
  const withoutLocale = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const path = withoutLocale === "/" ? "" : withoutLocale.replace(/^\//, "");

  return (
    <Link
      href={localePath(other, path)}
      hrefLang={other}
      className="text-sm text-ash-light underline-offset-4 hover:text-paper hover:underline"
    >
      {other === "en" ? "EN" : "PL"}
    </Link>
  );
}
