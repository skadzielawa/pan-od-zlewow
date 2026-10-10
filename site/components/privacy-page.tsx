import { getDictionary, type Locale } from "@/lib/dictionary";

const wrap =
  "mx-auto w-[min(1120px,calc(100%-2.5rem))] md:w-[min(1120px,calc(100%-5rem))]";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g);

  return parts.map((part, index) => {
    if (part.startsWith("http")) {
      const href = part.replace(/[.,]+$/, "");
      const tail = part.slice(href.length);
      return (
        <span key={index}>
          <a className="underline underline-offset-4" href={href}>
            {href}
          </a>
          {tail}
        </span>
      );
    }
    if (part.includes("@")) {
      return (
        <a key={index} className="underline underline-offset-4" href={`mailto:${part}`}>
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function PrivacyPage({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <main id="content" className="py-16 md:py-24">
      <article className={wrap}>
        <h1 className="max-w-[16ch] text-[clamp(2.25rem,4.4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em]">
          {dict.privacyTitle.split(". ")[0]}
        </h1>
        <p className="mt-6 text-ash">{dict.privacyUpdated}</p>
        <div className="mt-14 flex max-w-[40rem] flex-col gap-12">
          {dict.privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-medium tracking-[-0.03em]">{section.title}</h2>
              <div className="mt-4 flex flex-col gap-4 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
