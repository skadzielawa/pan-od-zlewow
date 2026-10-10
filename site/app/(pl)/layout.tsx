import type { ReactNode } from "react";
import { LocaleRoot } from "@/components/locale-root";
import { buildMetadata } from "@/lib/site-metadata";
import "../globals.css";

export { viewport } from "@/lib/site-metadata";

export const metadata = buildMetadata("pl");

export default function PolishLayout({ children }: { children: ReactNode }) {
  return <LocaleRoot lang="pl">{children}</LocaleRoot>;
}
