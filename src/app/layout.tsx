import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
