import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./globals.css";

const sans = localFont({
  src: [
    {
      path: "./fonts/schibsted-grotesk-latin-ext.woff2",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "./fonts/schibsted-grotesk-latin.woff2",
      weight: "400 900",
      style: "normal",
    },
  ],
  variable: "--font-schibsted",
  display: "swap",
});

const mono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-latin-ext.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-latin.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://panodzlewow.pl"),
  title: {
    default: "Pan od zlewów",
    template: "%s",
  },
  applicationName: "Pan od zlewów",
};

export const viewport: Viewport = {
  themeColor: "#e7eeef",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const langHeader = (await headers()).get("x-lang");
  const lang = langHeader === "en" ? "en" : "pl";

  return (
    <html
      lang={lang}
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
