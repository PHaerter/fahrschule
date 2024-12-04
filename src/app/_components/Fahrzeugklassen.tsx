"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import React from "react";

//TODO change default to B
export default function Fahrzeugklassen() {
  const [activeTab, setActiveTab] = useState("B96");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const bottomButtonRef = useRef<HTMLButtonElement | null>(null);

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
              <li>Begleitperson muss mindestens 35 Jahre alt sein</li>
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
      <div className="w-full max-w-4xl mx-auto p-12" id="fahrzeugklassen">
        <h1 className="text-3xl font-bold text-center mb-8">Fahrzeugklassen</h1>
        <Card className="rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 items-start">
            <div className="w-full flex-shrink-0 relative">
              <nav className="grid grid-cols-2 md:grid-cols-1 h-full">
                <TabButton
                  icon={<CarIcon height="24px" width="24" />}
                  title="Klasse B"
                  isActive={activeTab === "B"}
                  onClick={() => setActiveTab("B")}
                  onMouseEnter={() => setHoveredTab("B")}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="rounded-tl-lg"
                />
                <TabButton
                  icon={<CarIcon height="24px" width="24" />}
                  title="Klasse BF 17"
                  isActive={activeTab === "BF17"}
                  onClick={() => setActiveTab("BF17")}
                  onMouseEnter={() => setHoveredTab("BF17")}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="rounded-tr-lg md:rounded-none"
                />
                <TabButton
                  icon={<TrailerIcon height="15px" width="15px" />}
                  title="Klasse BE"
                  isActive={activeTab === "BE"}
                  onClick={() => setActiveTab("BE")}
                  onMouseEnter={() => setHoveredTab("BE")}
                  onMouseLeave={() => setHoveredTab(null)}
                />
                <TabButton
                  icon={<TrailerIcon height="15px" width="15px" />}
                  title="Klasse B 96"
                  isActive={activeTab === "B96"}
                  onClick={() => setActiveTab("B96")}
                  onMouseEnter={() => setHoveredTab("B96")}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="md:rounded-bl-lg"
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

function CarIcon({ fill = "#ffffff", height = "200px", width = "200px" }) {
  return (
    <svg
      id="svg"
      fill={fill}
      stroke={fill}
      width={width}
      height={height}
      version="1.1"
      viewBox="144 144 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="IconSvg_bgCarrier" strokeWidth="0"></g>
      <g
        id="IconSvg_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
      ></g>
      <g id="IconSvg_iconCarrier">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m588.93 365.89h-48.492l-91.523-81.344c-1.8906-1.6797-4.4102-2.625-6.9258-2.625h-209.92c-0.41797 0-0.83984 0.21094-1.2578 0.21094-0.73438 0.10547-1.4688 0.21094-2.2031 0.41797-0.62891 0.21094-1.1562 0.52344-1.6797 0.83984-0.63281 0.42188-1.1562 0.73438-1.6836 1.1562-0.52344 0.52344-0.94531 1.0508-1.4688 1.6797-0.31641 0.31641-0.62891 0.62891-0.83984 0.94531l-41.984 73.473c-1.4688 2.625-1.6797 5.5625-0.94531 8.1875-0.10156 0.73047-0.41797 1.4648-0.41797 2.3047v83.969c0 11.547 9.4453 20.992 20.992 20.992h22.043c4.8281 23.93 26.031 41.984 51.43 41.984 25.402 0 46.496-18.055 51.43-41.984h117.55c4.8281 23.93 26.031 41.984 51.43 41.984 25.402 0 46.496-18.055 51.43-41.984h53.531c11.547 0 20.992-9.4453 20.992-20.992v-57.727c0-17.32-14.168-31.488-31.488-31.488zm-314.88 131.2c-17.32 0-31.488-14.168-31.488-31.488 0-17.32 14.168-31.488 31.488-31.488s31.488 14.168 31.488 31.488c0 17.32-14.172 31.488-31.488 31.488zm220.41 0c-17.32 0-31.488-14.168-31.488-31.488 0-17.32 14.168-31.488 31.488-31.488 17.32 0 31.488 14.168 31.488 31.488 0 17.32-14.168 31.488-31.488 31.488zm104.96-41.984h-53.531c-4.8281-23.93-26.031-41.984-51.43-41.984-25.402 0-46.496 18.055-51.43 41.984h-117.55c-4.8281-23.93-26.031-41.984-51.43-41.984-25.402 0-46.496 18.055-51.43 41.984h-22.043v-83.969c0-0.62891-0.21094-1.1562-0.31641-1.7852l37.996-66.441h199.84l91.527 81.344c0.52344 0.41797 1.0508 0.62891 1.5742 0.94531 0.52344 0.31641 0.94531 0.73438 1.4688 0.94531 1.2578 0.52344 2.5195 0.73438 3.8828 0.73438h52.48c5.7734 0 10.496 4.7227 10.496 10.496v57.73z"
          strokeWidth="20"
        />
      </g>
    </svg>
  );
}

function TrailerIcon({ fill = "#ffffff", height = "200px", width = "200px" }) {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 283.494 283.494"
      xmlSpace="preserve"
      stroke={fill}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M268.494,113.482c-8.284,0-15,6.716-15,15v32.153H223V27.042c0-8.284-6.716-15-15-15H15c-8.284,0-15,6.716-15,15v182.11 c0,8.284,6.716,15,15,15h17.118c0.378,26.144,21.751,47.299,47.982,47.299s47.604-21.155,47.982-47.299H208c8.284,0,15-6.716,15-15 v-18.518h45.494c8.284,0,15-6.716,15-15v-47.153C283.494,120.198,276.778,113.482,268.494,113.482z M80.101,241.452 c-9.925,0-18-8.075-18-18s8.075-18,18-18s18,8.075,18,18S90.025,241.452,80.101,241.452z M193,194.153h-74.918 c-8.786-11.363-22.539-18.701-37.981-18.701s-29.195,7.338-37.981,18.701H30V42.042h163V194.153z"></path>{" "}
      </g>
    </svg>
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
        "hover:bg-info focus-visible:bg-info focus-visible:outline-none",
        "border border-gray-300 md:border-0",
        className,
        isActive && "bg-info text-white hover:bg-info focus-visible:bg-info"
      )}
    >
      <div className="mt-1 text-current flex flex-col items-center">
        <div className="flex justify-center items-center w-5 h-5">
          {React.cloneElement(icon as React.ReactElement, {
            fill: isActive ? "white" : "black",
          })}
        </div>
      </div>
      <div>
        <div className="font-medium">{title}</div>
      </div>
    </button>
  );
}
