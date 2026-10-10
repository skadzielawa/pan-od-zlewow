import { HomePage } from "@/components/home-page";
import { isLocale, type Locale } from "@/lib/dictionary";
import { notFound } from "next/navigation";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }

  return <HomePage lang={lang as Locale} />;
}
