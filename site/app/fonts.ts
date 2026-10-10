import localFont from "next/font/local";

export const sans = localFont({
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

export const mono = localFont({
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

export const fontClassName = `${sans.variable} ${mono.variable}`;
