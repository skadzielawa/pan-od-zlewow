import type { ReactNode } from "react";
import { LocaleRoot } from "@/components/locale-root";
import { buildMetadata } from "@/lib/site-metadata";
import "../../globals.css";

export { viewport } from "@/lib/site-metadata";

export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <LocaleRoot lang="en">{children}</LocaleRoot>;
}
