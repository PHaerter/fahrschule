"use client";

import { useRouter } from "next/navigation";

import { handleNavigationAndScroll } from "../utils/scrollUtils";
import Image from "next/image";

//TODO: Impressum
// Seitenliste
const footerLinks = [
  { href: "#fahrzeugklassen", label: "Führerschein" },
  { href: "#oeffnungszeiten", label: "Öffnungszeiten" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
  {
    href: "/datenschutz",
    label: "Datenschutzhinweise",
    external: true,
  }, // Externes Ziel
  {
    href: "/impressum",
    label: "Impressum",
    external: true,
  },
];

export default function Footer(): JSX.Element {
  const router = useRouter();

  // Funktion zum Generieren der Footer-Links
  const renderFooterLinks = () =>
    footerLinks.map((link) =>
      link.external ? (
        <li key={link.href}>
          <a
            href={link.href}
            className="hover:underline me-4 md:me-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        </li>
      ) : (
        <li key={link.href}>
          <a
            onClick={() =>
              handleNavigationAndScroll(link.href.substring(1), router)
            } // Entferne das '#' für die ID
            className="hover:underline me-4 md:me-6"
          >
            {link.label}
          </a>
        </li>
      )
    );

  return (
    <footer className="w-full bg-info border-0 shadow md:flex md:items-center md:justify-between">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse  mr-5">
            <Image
              src="/WelleDrive-Logo.webp"
              className="h-12 justify-center"
              alt="WelleDrive Logo"
              width="106"
              height="48"
              style={{
                filter: "brightness(0%) contrast(100%) saturate(0)",
              }}
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-lg font-medium text-black sm:mb-0">
            {renderFooterLinks()}
          </ul>
        </div>
      </div>
    </footer>
  );
}
