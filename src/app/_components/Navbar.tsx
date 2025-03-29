"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { handleNavigationAndScroll } from "../utils/scrollUtils";
import Image from "next/image";
import { JSX } from "react";

const pages = [
  { href: "#oeffnungszeiten", label: "Öffnungszeiten" },
  { href: "#fahrzeugklassen", label: "Führerschein" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null); // Referenz auf das Dropdown-Menü
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Referenz auf den Button

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Schließen des Menüs, wenn außerhalb geklickt wird
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Überprüfen, ob der Klick außerhalb des Buttons oder Menüs war
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false); // Menü schließen
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

  const renderNavItemsDesktop = () =>
    pages.map((page) => (
      <li key={page.href} className="inline-block px-3">
        <a
          onClick={() =>
            handleNavigationAndScroll(page.href.substring(1), router)
          }
          className="block py-2 px-3 text-gray-900 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
        >
          {page.label}
        </a>
      </li>
    ));

  const renderNavItemsMobile = () =>
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
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center space-x-6">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 border-0">
            {renderNavItemsDesktop()}
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
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
            ref={buttonRef} // Referenz auf den Button
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden 
              ${
                isMenuOpen ? "bg-black text-white" : "bg-transparent text-black"
              } 
              focus:outline-none`}
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? "text-white" : "text-black"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef} // Die Referenz auf das Menü
        className={`absolute ${isMenuOpen ? "block" : "hidden"} 
          ${isMenuOpen ? "bg-black text-white" : "bg-transparent text-black"} 
          right-0 p-2 rounded shadow-lg md:hidden`}
        style={{ minWidth: "150px" }}
      >
        <ul className="flex flex-col">{renderNavItemsMobile()}</ul>
      </div>
    </nav>
  );
}
