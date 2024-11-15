import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fahrschule Brückemeier",
  description:
    "Herzlich Willkommen · Deine Fahrschule in Itzehoe und Krempe · Abendunterricht für Fahrschüler · Verschiedene Führerscheinklassen · Heute Anfragen · Bewährte Fahrausbildung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning data-theme="light">
      <body>{children}</body>
    </html>
  );
}
