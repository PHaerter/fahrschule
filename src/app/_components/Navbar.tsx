import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-base-100 dark:bg-base-300 w-full z-20 start-0 border-b border-base-200 dark:border-base-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <img
            src="/WelleDrive-Logo.png"
            className="h-12"
            alt="WelleDrive Logo"
          />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="btn btn-primary">Kontakt</button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                  stroke="currentColor"
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 border-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-500 md:p-0"
                  aria-current="page"
                >
                  Startseite
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Führerschein
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Öffnungszeiten
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
