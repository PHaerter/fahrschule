import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full p-4 bg-base-200 border-0 shadow md:flex md:items-center md:justify-between md:p-6">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img
                src="/WelleDrive-Logo.png"
                className="h-12 justify-center"
                alt="WelleDrive Logo"
              />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Führerschein
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Öffnungszeiten
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Datenschutzhinweise
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
