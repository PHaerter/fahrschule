// _components/ClientScrollTracker.tsx
"use client";

import { useEffect } from "react";

export default function ScrollTracker() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          // Wenn der Abschnitt im Sichtbereich ist, aktualisiere die URL
          const id = section.getAttribute("id");
          if (id && window.location.hash !== `#${id}`) {
            window.history.replaceState(null, "", `#${id}`);
          }
          found = true;
        }
      });

      // Wenn kein Abschnitt sichtbar ist, setze den Hash auf leer
      if (!found && window.location.hash !== "") {
        window.history.replaceState(null, "", "#");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean-up für das Entfernen des Event-Listeners bei der Entladung der Seite
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
