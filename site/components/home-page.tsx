import { Mark } from "@/components/mark";
import {
  getDictionary,
  localeUrl,
  phoneHref,
  type Locale,
} from "@/lib/dictionary";

const wrap =
  "mx-auto w-[min(1120px,calc(100%-2.5rem))] md:w-[min(1120px,calc(100%-5rem))]";

const heading =
  "max-w-[18ch] text-[clamp(2.25rem,4.4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em]";

export function HomePage({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pan od zlewów",
    url: localeUrl(lang),
    telephone: "+48455449109",
    email: "panodzlewow@gmail.com",
    vatID: "PL6751318817",
    legalName: "S5 Digital Szymon Kądzielawa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Medweckiego 87",
      postalCode: "32-083",
      addressLocality: "Balice",
      addressCountry: "PL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48455449109",
      email: "panodzlewow@gmail.com",
      contactType: "customer service",
      availableLanguage: ["Polish", "English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
    },
    areaServed: ["Kraków", "Wieliczka", "Skawina"],
    priceRange: "299 PLN",
    currenciesAccepted: "PLN",
    description: dict.metaDescription,
    inLanguage: lang,
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero grid min-h-[calc(100dvh-4rem)] grid-cols-1 items-center gap-5 bg-ink px-5 py-6 text-paper md:min-h-[calc(100dvh-5rem)] md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,40rem)] lg:gap-14 lg:py-10">
        <Mark
          draw
          title={dict.markLabel}
          className="mark-draw h-auto w-[min(248px,64vw)] text-cyan lg:w-[min(100%,calc((100dvh-5rem-5rem)*640/600))]"
        />
        <div>
          <h1 className="max-w-[16ch] text-[clamp(2rem,3.8vw,3.5rem)] font-medium leading-[1.06] tracking-[-0.035em]">
            {dict.heroTitle}
          </h1>
          <p className="mt-5 text-[clamp(1.375rem,2.2vw,1.875rem)] font-medium tracking-[-0.025em]">
            {dict.heroPrice}
          </p>
          <p className="mt-3 max-w-[32ch] text-lg leading-snug text-ash-light">{dict.heroSub}</p>
          <a
            className="mt-7 inline-flex h-11 items-center whitespace-nowrap bg-paper px-4 text-[15px] font-medium text-ink hover:shadow-[inset_0_0_0_1px_#12181b] active:translate-y-px"
            href={phoneHref}
          >
            {dict.call}
          </a>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className={wrap}>
          <h2 className={heading}>{dict.scopeTitle}</h2>
          <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(220px,0.7fr)] lg:gap-16">
            <ul>
              {dict.scopeItems.map((item) => (
                <li
                  key={item}
                  className="text-[clamp(2.625rem,5.2vw,4.75rem)] font-medium leading-[1.12] tracking-[-0.04em]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="max-w-[34ch] text-lg leading-relaxed">{dict.scopeNo}</p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className={wrap}>
          <h2 className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="text-[clamp(6.5rem,16vw,13.75rem)] font-medium leading-none tracking-[-0.055em]">
              {dict.priceAmount}
            </span>
            <span className="font-mono text-base md:text-2xl">{dict.priceUnit}</span>
          </h2>
          <p className="mt-7 max-w-[38rem] text-lg leading-relaxed">{dict.priceLead}</p>
          <dl className="mt-12 grid grid-cols-1 gap-x-16 gap-y-9 md:grid-cols-2">
            {dict.terms.map((term) => (
              <div key={term.title} className="max-w-[36ch]">
                <dt className="text-xl font-medium tracking-[-0.02em]">{term.title}</dt>
                <dd className="mt-2 leading-relaxed">{term.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className={wrap}>
          <h2 className={heading}>{dict.trustTitle}</h2>
          <p className="mt-7 max-w-[36rem] text-lg leading-relaxed">{dict.trustBody}</p>
        </div>
      </section>

      <section className="pb-24 md:pb-28">
        <div className={wrap}>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            <a className="underline-offset-4 hover:underline" href={phoneHref}>
              {dict.phoneDisplay}
            </a>
          </h2>
          <p className="mt-6 max-w-[36rem] text-lg leading-relaxed">{dict.contactLead}</p>
          <p className="mt-3 max-w-[36rem] text-lg leading-relaxed">{dict.contactPrep}</p>
          <p className="mt-3 max-w-[36rem] leading-relaxed">{dict.phoneHours}</p>
        </div>
      </section>
    </main>
  );
}
