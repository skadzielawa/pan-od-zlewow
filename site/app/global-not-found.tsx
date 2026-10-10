import type { Metadata } from "next";
import { fontClassName } from "@/app/fonts";
import { localePath } from "@/lib/dictionary";
import "./globals.css";

export const metadata: Metadata = {
  title: "404. Pan od zlewów",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="pl" className={`${fontClassName} h-full antialiased`}>
      <body className="min-h-dvh bg-paper font-sans text-ink">
        <main className="mx-auto flex min-h-dvh w-[min(1120px,calc(100%-2.5rem))] flex-col justify-center py-16 md:w-[min(1120px,calc(100%-5rem))]">
          <h1 className="text-[clamp(6.5rem,28vw,18rem)] font-medium leading-none tracking-[-0.06em]">
            404
          </h1>
          <p className="mt-6 max-w-[28rem] text-lg leading-relaxed">
            Nie ma takiej strony.
          </p>
          <a
            className="mt-8 inline-flex h-11 w-fit items-center bg-ink px-4 text-[15px] font-medium text-paper hover:shadow-[inset_0_0_0_1px_#e7eeef]"
            href={localePath("pl")}
          >
            Przejdź na stronę główną
          </a>
          <p className="mt-8 max-w-[28rem] text-ash" lang="en">
            This page does not exist.{" "}
            <a
              className="underline underline-offset-4 hover:text-ink"
              href={localePath("en")}
              hrefLang="en"
            >
              Go to the homepage
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
