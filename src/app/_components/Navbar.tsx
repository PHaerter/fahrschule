"use client"; // Diese Zeile markiert die Datei als Client-Komponente

import Link from "next/link";
import { useRouter } from "next/navigation"; // Verwende `next/navigation` für Client-Side Navigation
import { useEffect } from "react";
import { handleNavigationAndScroll } from "../utils/scrollUtils";
import Image from "next/image";

// Seitenliste
const pages = [
  { href: "#oeffnungszeiten", label: "Öffnungszeiten" },
  { href: "#fahrzeugklassen", label: "Führerschein" },
  { href: "#faq", label: "FAQ" },
];

//TODO : Phone Page ICON Dropdown Menu
//TODO: FAQ statt Kontakt in der Navbar zum Scrollen
//TODO: Logo verlinken

export default function Navbar(): JSX.Element {
  const renderNavItems = () =>
    pages.map((page) => (
      <li key={page.href}>
        <a
          onClick={(e) =>
            handleNavigationAndScroll(page.href.substring(1), router)
          } // Entferne das '#' für die ID
          className="block py-2 px-3 text-gray-900 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
        >
          {page.label}
        </a>
      </li>
    ));

  const router = useRouter();

  useEffect(() => {
    // Überprüfe, ob ein Scroll-Ziel im lokalen Speicher vorhanden ist
    const targetId = localStorage.getItem("scrollTarget");
    if (targetId) {
      // Scrolle zur gespeicherten Sektion und lösche den Wert aus dem Speicher
      const observer = new MutationObserver(() => {
        const anchor = document.getElementById(targetId);
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth" });
          observer.disconnect(); // Observer deaktivieren, nachdem die Section gefunden wurde
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
      localStorage.removeItem("scrollTarget");
    }
  }, []);

  return (
    <nav className="bg-info w-full z-20 start-0 border-0" id="startseite">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/">
          <Image
            src="/WelleDrive-Logo.webp"
            className="h-12"
            alt="WelleDrive Logo"
            width="106"
            height="48"
            style={{
              filter: "brightness(0%) contrast(100%) saturate(0)",
            }}
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a>
            <button
              className="btn btn-sm h-10 btn-accent text-white"
              onClick={(e) => handleNavigationAndScroll("kontakt", router)}
            >
              Kontakt
            </button>{" "}
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 border-0">
            {renderNavItems()}
          </ul>
        </div>
      </div>
    </nav>
  );
}
