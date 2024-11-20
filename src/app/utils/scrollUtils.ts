import { useEffect } from "react";
import { useRouter } from "next/navigation";

//TODO : Scrollen nach dem Seitenwechsel not working
// Funktion: Scrollen zu einer bestimmten Section
export const scrollToSection = (id: string): void => {
  const anchor = document.getElementById(id);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth" });
  }
};

// Funktion: Wechsel zur Root-Seite und Scrollen
export const handleNavigationAndScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
  router: ReturnType<typeof useRouter>
): void => {
  e.preventDefault();

  if (window.location.pathname !== "/") {
    // Speichere das Scrollziel und wechsle zur Root-Seite
    localStorage.setItem("scrollTarget", targetId);
    router.push("/");
  } else {
    // Direkt scrollen, wenn wir bereits auf der Root-Seite sind
    scrollToSection(targetId);
  }
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
