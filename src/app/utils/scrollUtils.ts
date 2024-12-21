import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Funktion: Scrollen zu einer bestimmten Section
export const scrollToSection = (id: string): void => {
  const anchor = document.getElementById(id);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth" });
  }
};

// Funktion: Wechsel zur Root-Seite und Scrollen
export const handleNavigationAndScroll = (
  targetId: string,
  router: ReturnType<typeof useRouter>
): void => {
  // Navigation zur Seite
  router.push("/#" + targetId);
  scrollToSection(targetId);
};

// Effekt: Scrollen nach dem Seitenwechsel
export const useScrollEffect = (): void => {
  useEffect(() => {
    const targetId = localStorage.getItem("scrollTarget");
    if (targetId) {
      // MutationObserver, um DOM-Änderungen zu überwachen
      const observer = new MutationObserver(() => {
        const anchor = document.getElementById(targetId);
        if (anchor) {
          console.log("Anchor found in useScrollEffect:", anchor);
          anchor.scrollIntoView({ behavior: "smooth" });
          observer.disconnect(); // Beobachtung stoppen, wenn gescrollt wurde
        }
      });

      // Beobachte den gesamten Body auf DOM-Änderungen
      observer.observe(document.body, { childList: true, subtree: true });
      localStorage.removeItem("scrollTarget");
    }
  }, []);
};
