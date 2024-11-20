"use client";

import { useState, useEffect, useRef } from "react";
import { Car, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

export default function Fahrzeugklassen() {
  const [activeTab, setActiveTab] = useState("B96");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isBottomButtonVisible, setIsBottomButtonVisible] = useState(false);

  const bottomButtonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Update visibility based on scroll or resize
  useEffect(() => {
    const checkButtonPosition = () => {
      if (containerRef.current && bottomButtonRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const buttonRect = bottomButtonRef.current.getBoundingClientRect();

        // Check if the bottom button is at the bottom of the container
        setIsBottomButtonVisible(buttonRect.bottom <= containerRect.bottom);
      }
    };

    // Add event listeners for resizing or scrolling
    window.addEventListener("resize", checkButtonPosition);
    window.addEventListener("scroll", checkButtonPosition);

    // Initial check
    checkButtonPosition();

    return () => {
      window.removeEventListener("resize", checkButtonPosition);
      window.removeEventListener("scroll", checkButtonPosition);
    };
  }, []);

  const tabContent: { [key: string]: { title: string; content: JSX.Element } } =
    {
      B: {
        title: "Klasse B",
        content: (
          <>
            <p className="mb-2">
              Die Klasse B ist das, was du brauchst, um Autos zu fahren. Perfekt
              für Pkw, leichte Nutzfahrzeuge oder Kleinbusse bis 3,5 Tonnen.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maximal 8 Sitzplätze (außer Fahrer)</li>
              <li>Inklusive Anhänger bis 750 kg</li>
              <li>Gesamtgewicht mit Anhänger max. 3,5 Tonnen</li>
            </ul>
          </>
        ),
      },
      BF17: {
        title: "Klasse BF 17",
        content: (
          <>
            <p className="mb-2">
              Mit 17 ans Steuer? Mit BF17 darfst du schon vor deinem 18.
              Geburtstag fahren – aber nur mit Begleitperson.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gleiche Rechte wie bei Klasse B</li>
              <li>Begleitperson muss mindestens 30 Jahre alt sein</li>
              <li>
                Mindestens 5 Jahre Fahrpraxis und max. 1 Punkt in Flensburg
              </li>
            </ul>
          </>
        ),
      },
      BE: {
        title: "Klasse BE",
        content: (
          <>
            <p className="mb-2">
              Wenn du schwere Anhänger ziehen willst, brauchst du BE. Das ist
              der nächste Schritt nach der Klasse B.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zugfahrzeug der Klasse B mit Anhänger über 750 kg</li>
              <li>Gesamtkombination darf bis zu 7 Tonnen wiegen</li>
              <li>Perfekt für Pferdeanhänger, größere Wohnwagen und Co.</li>
            </ul>
          </>
        ),
      },
      B96: {
        title: "Klasse B 96",
        content: (
          <>
            <p className="mb-2">
              Mit B96 kannst du größere Anhänger ziehen als mit der normalen
              Klasse B – ideal für Urlaub oder Hobby.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zugfahrzeug der Klasse B mit Anhänger bis 4,25 Tonnen</li>
              <li>Kein extra Führerschein nötig – nur eine Schulung</li>
              <li>Beliebt für Caravans und größere Anhänger</li>
            </ul>
          </>
        ),
      },
    };

  return (
    <>
      <div
        className="w-full max-w-4xl mx-auto p-4 md:p-12"
        id="fahrzeugklassen"
      >
        <h1 className="text-3xl font-bold text-center mb-8">Fahrzeugklassen</h1>
        <Card className="rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 items-start">
            <div className="w-full flex-shrink-0 relative">
              <nav className="grid grid-cols-2 md:grid-cols-1 h-full">
                <TabButton
                  //TODO: Change icons
                  icon={<Car className="h-5 w-5" />}
                  title="Klasse B"
                  isActive={activeTab === "B"}
                  onClick={() => setActiveTab("B")}
                  onMouseEnter={() => setHoveredTab("B")}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="rounded-tl-lg"
                />
                <TabButton
                  icon={<Car className="h-5 w-5" />}
                  title="Klasse BF 17"
                  isActive={activeTab === "BF17"}
                  onClick={() => setActiveTab("BF17")}
                  onMouseEnter={() => setHoveredTab("BF17")}
                  onMouseLeave={() => setHoveredTab(null)}
                />
                <TabButton
                  icon={<Car className="h-5 w-5" />}
                  title="Klasse BE"
                  isActive={activeTab === "BE"}
                  onClick={() => setActiveTab("BE")}
                  onMouseEnter={() => setHoveredTab("BE")}
                  onMouseLeave={() => setHoveredTab(null)}
                />
                <TabButton
                  icon={<Truck className="h-5 w-5" />}
                  title="Klasse B 96"
                  isActive={activeTab === "B96"}
                  onClick={() => setActiveTab("B96")}
                  onMouseEnter={() => setHoveredTab("B96")}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={cn(
                    "rounded-bl-lg",
                    !isBottomButtonVisible && "rounded-none"
                  )}
                  ref={bottomButtonRef}
                />
              </nav>
            </div>
            <div className="col-span-1 md:col-span-3 flex-grow overflow-auto h-auto md:h-auto border-l border-t">
              <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {tabContent[hoveredTab || activeTab].title}
                </h1>
                {tabContent[hoveredTab || activeTab].content}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

function TabButton({
  icon,
  title,
  isActive = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = "",
  ref,
}: {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
  ref?: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        onMouseEnter();
        onClick();
      }}
      onMouseLeave={() => {
        onMouseLeave();
        onClick();
      }}
      className={cn(
        "flex items-start gap-4 p-4 w-full text-left transition-colors",
        "hover:bg-primary focus-visible:bg-primary focus-visible:outline-none",
        "border border-gray-300 md:border-0",
        className,
        isActive && "bg-primary text-white hover:bg-se focus-visible:bg-primary"
      )}
    >
      <div className="mt-1 text-current">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
      </div>
    </button>
  );
}
