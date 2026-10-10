export const locales = ["pl", "en"] as const;

export type Locale = (typeof locales)[number];

export type Dictionary = {
  metaTitle: string;
  metaDescription: string;
  skip: string;
  call: string;
  phoneDisplay: string;
  markLabel: string;
  heroTitle: string;
  heroPrice: string;
  heroSub: string;
  scopeTitle: string;
  scopeItems: [string, string, string];
  scopeNo: string;
  priceAmount: string;
  priceUnit: string;
  priceLead: string;
  terms: { title: string; body: string }[];
  trustTitle: string;
  trustBody: string;
  contactLead: string;
  contactPrep: string;
  phoneHours: string;
  footerArea: string;
  footerInvoice: string;
  footerBrand: string;
  footerTax: string;
};

const pl: Dictionary = {
  metaTitle: "Pan od zlewów. Udrażnianie zlewów i umywalek w Krakowie, 299 zł",
  metaDescription:
    "Udrażniam zlewy, umywalki i odpływy pralek w Krakowie, Wieliczce, Skawinie i okolicach. 299 zł brutto za odpływ, wieczorem ta sama cena, faktura VAT.",
  skip: "Przejdź do treści",
  call: "Zadzwoń",
  phoneDisplay: "455\u00a0449\u00a0109",
  markLabel: "Znak Pan od zlewów",
  heroTitle: "Udrażnianie zlewów, umywalek i\u00a0odpływów pralki.",
  heroPrice: "299\u00a0zł brutto za odpływ.",
  heroSub: "Kraków, Wieliczka, Skawina i okolice. Także wieczorem, w tej samej cenie.",
  scopeTitle: "Udrażniam tylko trzy rzeczy",
  scopeItems: ["Zlewy", "Umywalki", "Odpływy pralek"],
  scopeNo:
    "Nie udrażniam toalet i nie robię innych prac hydraulicznych, takich jak wymiana baterii, spłuczek, grzejników czy rur. Z tym lepiej zadzwonić do hydraulika.",
  priceAmount: "299",
  priceUnit: "zł brutto",
  priceLead:
    "Tyle kosztuje udrożnienie zlewu, umywalki albo odpływu pralki. Cena jest taka sama, czy zator siedzi w syfonie, czy głęboko w rurze, i nie zmienia się na miejscu.",
  terms: [
    {
      title: "Dojazd",
      body: "W Krakowie, Wieliczce i Skawinie dojazd jest w cenie. Mieszkasz gdzie indziej w okolicy Krakowa? Zadzwoń, dogadamy się, zanim przyjadę.",
    },
    {
      title: "Porządek",
      body: "Przyjeżdżam z czystym sprzętem. Jeśli podczas udrażniania zabrudzi się szafka albo podłoga, wycieram po sobie przed wyjściem.",
    },
    {
      title: "Gdy się nie uda",
      body: "Jeśli nie dam rady udrożnić odpływu, płacisz tylko 50\u00a0zł brutto za dojazd. Zamiast 299\u00a0zł, a nie dodatkowo.",
    },
    {
      title: "Wieczorem",
      body: "Przyjeżdżam też wieczorem i liczę tyle samo co w dzień. Za późną godzinę nie doliczam nic.",
    },
    {
      title: "Płatność",
      body: "Płacisz na miejscu zbliżeniowo: kartą, telefonem albo opaską z płatnościami. Terminal to aplikacja na moim telefonie. Gotówki nie przyjmuję, bo nie mam kasy fiskalnej. Do każdej usługi wystawiam fakturę VAT.",
    },
  ],
  trustTitle: "Przyjeżdżam o umówionej godzinie.",
  trustBody:
    "Umawiamy się na konkretną godzinę. Jeśli po drodze coś mnie zatrzyma, dzwonię od razu i mówię, o której będę. Nie musisz czekać w niepewności.",
  contactLead:
    "Powiedz, co się zatkało (zlew, umywalka czy odpływ pralki) i gdzie jesteś. Umówimy godzinę.",
  contactPrep:
    "Zanim przyjadę, zabierz rzeczy spod szafki. Jak mam dojście do odpływu, robota idzie od razu.",
  phoneHours:
    "Telefony odbieram od poniedziałku do piątku, od 8:00 do 20:00. Jak nie odbiorę, oddzwaniam.",
  footerArea: "Kraków, Wieliczka, Skawina i okolice.",
  footerInvoice: "Faktura VAT.",
  footerBrand: "Marka \u201ePan od zlewów\u201d należy do firmy S5 Digital.",
  footerTax: "NIP UE: PL6751318817",
};

const en: Dictionary = {
  metaTitle: "Pan od zlewów. Sink and basin unclogging in Kraków, 299 zł",
  metaDescription:
    "I unclog sinks, basins and washing machine drains in Kraków, Wieliczka, Skawina and nearby areas. 299 zł with VAT per drain, same price in the evening, VAT invoice.",
  skip: "Skip to content",
  call: "Call",
  phoneDisplay: "+48\u00a0455\u00a0449\u00a0109",
  markLabel: "Pan od zlewów mark",
  heroTitle: "Unclogging sinks, basins and washing machine drains.",
  heroPrice: "299\u00a0zł with VAT per drain.",
  heroSub: "Kraków, Wieliczka, Skawina and nearby areas. Evenings too, at the same price.",
  scopeTitle: "I unclog three things only",
  scopeItems: ["Sinks", "Basins", "Washing machine drains"],
  scopeNo:
    "I do not unclog toilets, and I do not do other plumbing work such as replacing taps, cisterns, radiators or pipes. For that, call a plumber.",
  priceAmount: "299",
  priceUnit: "zł with VAT",
  priceLead:
    "That is the price for unclogging a sink, a basin or a washing machine drain. It is the same whether the blockage is in the trap or deep in the pipe, and it does not change on site.",
  terms: [
    {
      title: "Travel",
      body: "In Kraków, Wieliczka and Skawina the trip is included. Live somewhere else near Kraków? Call, and we will sort the trip out before I come.",
    },
    {
      title: "Clean and tidy",
      body: "I arrive with clean equipment. If the cupboard or floor gets dirty while I clear the drain, I wipe it down before I leave.",
    },
    {
      title: "If I cannot clear it",
      body: "If I cannot unclog the drain, you pay only 50\u00a0zł with VAT for the trip. Instead of 299\u00a0zł, not on top of it.",
    },
    {
      title: "Evenings",
      body: "I also come in the evening and charge the same as during the day. Nothing extra for a late hour.",
    },
    {
      title: "Payment",
      body: "You pay on site, contactless: by card, phone or a payment band. The terminal is an app on my phone. I do not take cash, because I have no cash register. I issue a VAT invoice for every job.",
    },
  ],
  trustTitle: "I arrive at the time we agree.",
  trustBody:
    "We book a specific time. If something holds me up on the way, I call straight away and tell you when I will be there. You are not left waiting and wondering.",
  contactLead:
    "Tell me what is blocked (a sink, a basin or a washing machine drain) and where you are. We will book a time.",
  contactPrep:
    "Before I arrive, clear the cupboard under the drain. Once I can reach it, the job starts straight away.",
  phoneHours:
    "I answer the phone Monday to Friday, from 8:00 to 20:00. If I miss your call, I call you back.",
  footerArea: "Kraków, Wieliczka, Skawina and nearby areas.",
  footerInvoice: "VAT invoice.",
  footerBrand: "The Pan od zlewów brand belongs to S5 Digital.",
  footerTax: "EU VAT: PL6751318817",
};

const dictionaries: Record<Locale, Dictionary> = { pl, en };

export function isLocale(value: string): value is Locale {
  return value === "pl" || value === "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export const phoneHref = "tel:+48455449109";

export const siteUrl = "https://panodzlewow.pl";

/** Polish is the default locale and lives at the root, without a prefix. */
export function localePath(lang: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  if (lang === "pl") {
    return `/${clean}`;
  }
  return clean ? `/en/${clean}` : "/en";
}

export function localeUrl(lang: Locale, path = ""): string {
  const pathname = localePath(lang, path);
  return pathname === "/" ? siteUrl : `${siteUrl}${pathname}`;
}
