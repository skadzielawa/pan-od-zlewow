import Link from "next/link";
import { HeaderLockup } from "@/components/header-lockup";
import {
  getDictionary,
  phoneHref,
  type Locale,
} from "@/lib/dictionary";

const callClass =
  "inline-flex h-11 items-center whitespace-nowrap bg-paper px-4 text-[15px] font-medium text-ink active:translate-y-px hover:shadow-[inset_0_0_0_1px_#12181b]";

export function SiteHeader({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const other = lang === "pl" ? "en" : "pl";

  return (
    <header className="site-header fixed inset-x-0 top-0 z-10 flex h-16 items-center justify-between gap-3 border-b border-ash-light/20 bg-ink px-5 text-paper md:h-20 md:px-10">
      <a className="skip" href="#content">
        {dict.skip}
      </a>
      <HeaderLockup lang={lang} />
      <div className="flex items-center gap-4 md:gap-5">
        <Link
          href={`/${other}`}
          hrefLang={other}
          className="text-sm text-ash-light underline-offset-4 hover:text-paper hover:underline"
        >
          {other === "en" ? "EN" : "PL"}
        </Link>
        <a className={callClass} href={phoneHref}>
          {dict.call}
        </a>
      </div>
    </header>
  );
}

export function SiteFooter({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <footer className="border-t border-ash">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] flex-col gap-3 py-10 md:w-[min(1120px,calc(100%-5rem))]">
        <p className="font-medium tracking-[-0.03em]">Pan od zlewów</p>
        <p>{dict.footerArea}</p>
        <p>{dict.footerInvoice}</p>
        <a className="w-fit font-medium underline-offset-4 hover:underline" href={phoneHref}>
          {dict.call}
        </a>
        <p className="max-w-[42ch] text-sm leading-relaxed text-ash">{dict.phoneHours}</p>
        <p className="text-sm text-ash">panodzlewow.pl</p>
        <div className="mt-6 flex max-w-[42ch] flex-col gap-1 text-sm leading-relaxed text-ash">
          <p>{dict.footerBrand}</p>
          <p>S5 Digital Szymon Kądzielawa</p>
          <p>Medweckiego 87</p>
          <p>32-083 Balice</p>
          <p>
            <a className="underline-offset-4 hover:underline" href="mailto:panodzlewow@gmail.com">
              panodzlewow@gmail.com
            </a>
          </p>
          <p>{dict.footerTax}</p>
          <p>REGON: 522444230</p>
          <p>© 2026 S5 Digital</p>
        </div>
      </div>
    </footer>
  );
}
