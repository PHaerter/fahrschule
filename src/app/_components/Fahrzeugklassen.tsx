"use client";

import { useState } from "react";
import { Car, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

export default function Fahrzeugklassen() {
  const [activeTab, setActiveTab] = useState("B96");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  //TODO: Beschreibung der Klassen Anpasses
  const tabContent: { [key: string]: { title: string; content: JSX.Element } } =
    {
      B: {
        title: "Klasse B",
        content: (
          <>
            <p className="mb-4">
              Führerscheinklasse B berechtigt zum Führen von Kraftfahrzeugen mit
              einer zulässigen Gesamtmasse von nicht mehr als 3.500 kg.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pkw</li>
              <li>Kleinbusse</li>
              <li>Leichte Nutzfahrzeuge</li>
            </ul>
          </>
        ),
      },
      BF17: {
        title: "Klasse BF 17",
        content: (
          <>
            <ul className="space-y-4 text-gray-600">
              <li>
                • zulässiger Gesamtmasse des Anhängers von mehr als 750 kg und
              </li>
              <li>
                • zulässiger Gesamtmasse der Fahrzeugkombination von mehr als
                3.500 kg und nicht mehr als 4.250 kg
              </li>
            </ul>
            <p className="mt-6 text-gray-600">
              Die Fahrerlaubnis der Klasse B berechtigt auch zum Führen von
              dreirädrigen Kraftfahrzeugen im Inland, im Falle eines
              Kraftfahrzeuges mit einer Motorleistung von mehr als 15 kW jedoch
              nur, soweit der Inhaber der Fahrerlaubnis mindestens 21 Jahre alt
              ist.
            </p>
          </>
        ),
      },
      BE: {
        title: "Klasse BE",
        content: (
          <>
            <p className="mb-4">
              Die Klasse B196 ist eine Erweiterung der Klasse B für Krafträder
              mit:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hubraum von nicht mehr als 125 cm³</li>
              <li>Motorleistung von nicht mehr als 11 kW</li>
              <li>Leistungsgewicht von nicht mehr als 0,1 kW/kg</li>
            </ul>
            <p className="mt-4">
              Voraussetzungen: Mindestalter 25 Jahre, mindestens 5 Jahre im
              Besitz der Klasse B, Schulung von mindestens 13,5 Stunden.
            </p>
          </>
        ),
      },
      B96: {
        title: "Klasse B 96",
        content: (
          <>
            <p className="mb-4">
              Die Fahrerlaubnis der Klasse BE berechtigt zum Führen von:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Fahrzeugkombinationen aus einem Zugfahrzeug der Klasse B und
                einem Anhänger oder Sattelanhänger mit einer zulässigen
                Gesamtmasse von nicht mehr als 3.500 kg
              </li>
            </ul>
            <p className="mt-4">
              Es gibt keine Beschränkung der Gesamtmasse der
              Fahrzeugkombination.
            </p>
          </>
        ),
      },
    };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Kontakt</h1>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-4 items-start">
            <div className="w-full flex-shrink-0">
              <nav className="grid grid-cols-2 md:grid-cols-1 h-full">
                <TabButton
                  icon={<Car className="h-5 w-5" />}
                  title="Klasse B"
                  isActive={activeTab === "B"}
                  onClick={() => setActiveTab("B")}
                  onMouseEnter={() => setHoveredTab("B")}
                  onMouseLeave={() => setHoveredTab(null)}
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
                />
              </nav>
            </div>
            <div className="col-span-1 md:col-span-3 flex-grow overflow-auto h-auto md:h-auto border-l border-t">
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
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
}: {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <button
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
