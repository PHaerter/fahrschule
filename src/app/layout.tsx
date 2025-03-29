import { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Fahrschule Brückemeier",
  description:
    "Bei uns lernst du das Fahren in entspannter Atmosphäre. Egal, ob du ganz neu anfängst oder schon erste Erfahrungen hast - wir begleiten dich Schritt für Schritt, bis du sicher auf der Straße bist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      data-theme="light"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="flex flex-col min-h-screen">
        <Head>
          <meta name="description" content={metadata.description ?? ""} />
          <meta property="og:image" content="" />
          <meta name="twitter:image" content="" />
        </Head>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
