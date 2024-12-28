"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { handleNavigationAndScroll } from "../utils/scrollUtils";
import Image from "next/image";

const pages = [
  { href: "#oeffnungszeiten", label: "Öffnungszeiten" },
  { href: "#fahrzeugklassen", label: "Führerschein" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const targetId = localStorage.getItem("scrollTarget");
    if (targetId) {
      const observer = new MutationObserver(() => {
        const anchor = document.getElementById(targetId);
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth" });
          observer.disconnect();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      localStorage.removeItem("scrollTarget");
    }
  }, []);

  const renderNavItems = () =>
    pages.map((page) => (
      <li key={page.href} className="text-right">
        <a
          onClick={() => {
            handleNavigationAndScroll(page.href.substring(1), router);
            setIsMenuOpen(false);
          }}
          className="inline-block py-2 px-3 text-white bg-black rounded hover:bg-gray-700"
        >
          {page.label}
        </a>
      </li>
    ));

  return (
    <nav
      className="bg-info w-full z-20 start-0 border-0 relative"
      id="startseite"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/">
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
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a>
            <button
              className="btn btn-sm h-10 btn-accent text-white"
              onClick={() => handleNavigationAndScroll("kontakt", router)}
            >
              Kontakt
            </button>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
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
        {/* Navbar items are hidden by default on mobile */}
      </div>
      <div
        className={`absolute ${
          isMenuOpen ? "block" : "hidden"
        } bg-black text-white right-0 p-2 rounded shadow-lg`}
        style={{ minWidth: "150px" }}
      >
        <ul className="flex flex-col">{renderNavItems()}</ul>
      </div>
    </nav>
  );
}
