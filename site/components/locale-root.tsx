import type { ReactNode } from "react";
import { fontClassName } from "@/app/fonts";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import type { Locale } from "@/lib/dictionary";

export function LocaleRoot({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={lang} className={`${fontClassName} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-ink">
        <SiteHeader lang={lang} />
        <div className="pt-16 md:pt-20">{children}</div>
        <SiteFooter lang={lang} />
      </body>
    </html>
  );
}
