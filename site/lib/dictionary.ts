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
  privacyLink: string;
  privacyTitle: string;
  privacyDescription: string;
  privacyUpdated: string;
  privacySections: { title: string; paragraphs: string[] }[];
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
  privacyLink: "Przetwarzanie danych",
  privacyTitle: "Przetwarzanie danych osobowych. Pan od zlewów",
  privacyDescription:
    "Informacja o przetwarzaniu danych osobowych przez S5 Digital przy korzystaniu ze strony panodzlewow.pl i przy kontakcie w sprawie usługi.",
  privacyUpdated: "Obowiązuje od 10 października 2026 r.",
  privacySections: [
    {
      title: "Kto jest administratorem",
      paragraphs: [
        "Administratorem danych jest S5 Digital Szymon Kądzielawa, Medweckiego 87, 32-083 Balice, NIP PL6751318817.",
        "W sprawach danych osobowych napisz na kontakt@panodzlewow.pl. Nie wyznaczyłem inspektora ochrony danych.",
      ],
    },
    {
      title: "Jakie dane przetwarzam i po co",
      paragraphs: [
        "Gdy otwierasz stronę, jej hosting przetwarza dane techniczne: adres IP, datę i godzinę, adres wywołanej strony oraz informacje o przeglądarce. Służą one do wyświetlenia strony i ochrony przed nadużyciami. Nie prowadzę własnej analityki i nie używam tych danych do reklamy.",
        "Gdy dzwonisz albo piszesz, przetwarzam dane, które sam podasz: imię, numer telefonu, adres e-mail, miejsce usługi i treść wiadomości. Służą one do odpowiedzi, umówienia wizyty i wykonania usługi.",
        "Gdy wystawiam fakturę, przetwarzam dane potrzebne do rachunku oraz do obowiązków podatkowych i rachunkowych.",
        "Nie podejmuję wobec Ciebie zautomatyzowanych decyzji i nie profiluję Cię.",
      ],
    },
    {
      title: "Podstawy przetwarzania",
      paragraphs: [
        "Wyświetlenie strony i jej zabezpieczenie opieram na prawnie uzasadnionym interesie (art. 6 ust. 1 lit. f RODO).",
        "Odpowiedź na zapytanie i umówienie usługi opieram na działaniach przed zawarciem umowy albo na wykonaniu umowy (art. 6 ust. 1 lit. b RODO).",
        "Fakturę i obowiązki księgowe opieram na obowiązku prawnym (art. 6 ust. 1 lit. c RODO).",
        "Podanie danych kontaktowych jest dobrowolne. Bez nich nie umówię wizyty.",
      ],
    },
    {
      title: "Komu przekazuję dane",
      paragraphs: [
        "Cloudflare utrzymuje stronę, zabezpiecza ruch i przekazuje pocztę wysłaną na kontakt@panodzlewow.pl.",
        "Google, jako dostawca skrzynki Gmail, otrzymuje treść wiadomości przekazanych na ten adres.",
        "Dane z faktury mogę przekazać biuru rachunkowemu albo organowi podatkowemu, jeśli przepis tego wymaga.",
      ],
    },
    {
      title: "Przekazanie poza Europejski Obszar Gospodarczy",
      paragraphs: [
        "Cloudflare i Google mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym. Takie przekazanie opiera się na standardowych klauzulach umownych przyjętych przez Komisję Europejską albo na decyzji stwierdzającej odpowiedni stopień ochrony.",
      ],
    },
    {
      title: "Jak długo przechowuję dane",
      paragraphs: [
        "Dane z korespondencji trzymam przez czas potrzebny do obsługi sprawy.",
        "Dane na fakturach trzymam przez okres wymagany przepisami podatkowymi i rachunkowymi.",
        "Nie zbieram logów odwiedzin do własnej bazy. Cloudflare przechowuje dane techniczne przez czas potrzebny do świadczenia i zabezpieczenia usługi.",
      ],
    },
    {
      title: "Twoje prawa",
      paragraphs: [
        "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania i przeniesienia. Możesz też wnieść sprzeciw wobec przetwarzania opartego na prawnie uzasadnionym interesie.",
        "Masz prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, https://uodo.gov.pl.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "Strona nie używa cookies analitycznych ani reklamowych. Nie wyświetlam banera zgody, bo nie uruchamiam takich narzędzi.",
        "Dostawca hostingu może zapisać cookies niezbędne do bezpieczeństwa strony. Nie służą one do śledzenia ani do reklamy.",
      ],
    },
  ],
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
  privacyLink: "Personal data",
  privacyTitle: "Personal data. Pan od zlewów",
  privacyDescription:
    "Information about personal data processed by S5 Digital when you use panodzlewow.pl or contact me about the service.",
  privacyUpdated: "Effective from 10 October 2026.",
  privacySections: [
    {
      title: "Who the controller is",
      paragraphs: [
        "The controller is S5 Digital Szymon Kądzielawa, Medweckiego 87, 32-083 Balice, Poland, EU VAT PL6751318817.",
        "For personal data, write to kontakt@panodzlewow.pl. I have not appointed a data protection officer.",
      ],
    },
    {
      title: "What data I process and why",
      paragraphs: [
        "When you open the site, its host processes technical data: the IP address, date and time, the page requested, and browser information. This is used to display the site and protect it from abuse. I do not run my own analytics and I do not use this data for advertising.",
        "When you call or write, I process the details you give me: your name, phone number, email address, the place of the job, and the content of the message. I use them to reply, book a visit, and carry out the job.",
        "When I issue an invoice, I process the details needed for the invoice and for tax and accounting duties.",
        "I do not make automated decisions about you and I do not profile you.",
      ],
    },
    {
      title: "Legal bases",
      paragraphs: [
        "Displaying and securing the site is based on a legitimate interest (GDPR Article 6(1)(f)).",
        "Replying to an enquiry and booking the service is based on steps before a contract, or on performing a contract (GDPR Article 6(1)(b)).",
        "Invoices and accounting duties are based on a legal obligation (GDPR Article 6(1)(c)).",
        "Giving contact details is voluntary. Without them I cannot book a visit.",
      ],
    },
    {
      title: "Who receives the data",
      paragraphs: [
        "Cloudflare hosts the site, protects the traffic, and forwards mail sent to kontakt@panodzlewow.pl.",
        "Google, as the Gmail provider, receives the content of messages forwarded to that address.",
        "Invoice details may go to an accountant or a tax authority when the law requires it.",
      ],
    },
    {
      title: "Transfers outside the European Economic Area",
      paragraphs: [
        "Cloudflare and Google may process data outside the European Economic Area. Such a transfer relies on the European Commission's standard contractual clauses, or on an adequacy decision.",
      ],
    },
    {
      title: "How long I keep data",
      paragraphs: [
        "I keep correspondence for as long as I need it to deal with the matter.",
        "I keep invoice details for the period required by tax and accounting law.",
        "I do not collect visit logs in my own database. Cloudflare keeps technical data for as long as it needs to provide and protect the service.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "You can ask for access to your data, and for it to be corrected, erased, restricted, or transferred. You can also object to processing based on a legitimate interest.",
        "You can lodge a complaint with the President of the Personal Data Protection Office, ul. Stawki 2, 00-193 Warsaw, Poland, https://uodo.gov.pl.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "The site does not use analytics or advertising cookies. I do not show a consent banner, because I do not run those tools.",
        "The host may store cookies that are necessary for the security of the site. They are not used for tracking or advertising.",
      ],
    },
  ],
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
