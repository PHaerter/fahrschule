"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import React from "react";
import { JSX } from "react";

export default function FahrzeugklassenMotorrad() {
  const [activeTab, setActiveTab] = useState("A");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const bottomButtonRef = useRef<HTMLButtonElement | null>(null);

  const tabContent: { [key: string]: { title: string; content: JSX.Element } } =
    {
      A: {
        title: "Klasse A",
        content: (
          <>
            <p className="mb-2 text-justify">
              Die Klasse A erlaubt dir das Fahren von allen Motorrädern, ohne
              Einschränkungen bei Leistung und Hubraum. Ideal für alle, die das
              volle Motorrad-Erlebnis suchen.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Alle Motorräder erlaubt</li>
              <li>Kein Leistungs- oder Hubraumlimit</li>
              <li>Mindestalter: 24 Jahre (oder 20 Jahre nach 2 Jahren A2)</li>
            </ul>
          </>
        ),
      },
      A2: {
        title: "Klasse A2",
        content: (
          <>
            <p className="mb-2 text-justify">
              Die Klasse A2 ist für Motorräder mit einer maximalen Leistung von
              35 kW (48 PS) gedacht. Perfekt für Fahranfänger, die eine
              leistungsstärkere Maschine fahren möchten.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maximale Leistung: 35 kW (48 PS)</li>
              <li>Mindestalter: 18 Jahre</li>
              <li>Umstieg auf A nach 2 Jahren möglich</li>
            </ul>
          </>
        ),
      },
      A1: {
        title: "Klasse A1",
        content: (
          <>
            <p className="mb-2 text-justify">
              Mit der Klasse A1 kannst du Motorräder bis 125 cm³ und 11 kW (15
              PS) fahren. Diese Klasse ist ideal für Einsteiger und junge
              Fahrer.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maximal 125 cm³ und 11 kW (15 PS)</li>
              <li>Mindestalter: 16 Jahre</li>
              <li>Für leichte Krafträder und Motorräder</li>
            </ul>
          </>
        ),
      },
      B196: {
        title: "Klasse B196",
        content: (
          <>
            <p className="mb-2 text-justify">
              Der Zusatz B196 erweitert deinen Pkw-Führerschein, sodass du auch
              Motorräder der Klasse A1 fahren darfst, ohne eine zusätzliche
              Prüfung abzulegen.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Zusatz für Klasse B (Pkw-Führerschein)</li>
              <li>Erlaubt das Fahren von Motorrädern bis 125 cm³</li>
              <li>Mindestalter: 25 Jahre</li>
            </ul>
          </>
        ),
      },
      AM: {
        title: "Klasse AM",
        content: (
          <>
            <p className="mb-2 text-justify">
              Die Klasse AM ist der Führerschein für Roller, Mopeds, Minicars
              und kleine Quads, die eine Höchstgeschwindigkeit von 45 km/h
              erreichen.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maximale Geschwindigkeit: 45 km/h</li>
              <li>Für Roller, Mopeds, Minicars und Quads</li>
              <li>Ausbildung erfolgt auf einem Roller</li>
              <li>
                Mindestalter: 15 Jahre (oder 16 Jahre in einigen Bundesländern)
              </li>
            </ul>
          </>
        ),
      },
      Mofa: {
        title: "Klasse Mofa",
        content: (
          <>
            <p className="mb-2 text-justify">
              Der Mofa-Führerschein ist ideal für kleine Zweiräder mit einer
              maximalen Geschwindigkeit von 25 km/h.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maximale Geschwindigkeit: 25 km/h</li>
              <li>Für Mofas und kleine Motorroller</li>
              <li>Mindestalter: 15 Jahre</li>
            </ul>
          </>
        ),
      },
    };

  return (
    <>
      <div
        className="w-full max-w-4xl mx-auto p-12"
        id="fahrzeugklassenMotorrad"
      >
        <h2 className="text-2xl font-bold mb-3 px-12 text-center md:text-left">
          Motorrad
        </h2>
        <Card className="rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 items-start">
            <div className="w-full flex-shrink-0 relative">
              <nav className="grid grid-cols-2 md:grid-cols-1 h-full">
                <TabButton
                  icon={<Motorbike1Icon height="26px" width="26" />}
                  title="Klasse A"
                  isActive={activeTab === "A"}
                  onClick={() => setActiveTab("A")}
                  onMouseEnter={() => setHoveredTab("A")}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="rounded-tl-lg"
                />
                <TabButton
                  icon={<Motorbike1Icon height="26px" width="26" />}
                  title="Klasse A2"
                  isActive={activeTab === "A2"}
                  onClick={() => setActiveTab("A2")}
                  onMouseEnter={() => setHoveredTab("A2")}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="rounded-tr-lg md:rounded-none"
                />
                {/*                 <TabButton
                  icon={<Motorbike2Icon height="22px" width="22px" />}
                  title="Klasse A1"
                  isActive={activeTab === "A1"}
                  onClick={() => setActiveTab("A1")}
                  onMouseEnter={() => setHoveredTab("A1")}
                  onMouseLeave={() => setHoveredTab(null)}
                /> */}
                <TabButton
                  icon={<Motorbike2Icon height="22px" width="22px" />}
                  title="Klasse B196"
                  isActive={activeTab === "B196"}
                  onClick={() => setActiveTab("B196")}
                  onMouseEnter={() => setHoveredTab("B196")}
                  onMouseLeave={() => setHoveredTab(null)}
                  ref={bottomButtonRef}
                />
                <TabButton
                  icon={<MofaIcon height="18px" width="18px" />}
                  title="Klasse AM"
                  isActive={activeTab === "AM"}
                  onClick={() => setActiveTab("AM")}
                  onMouseEnter={() => setHoveredTab("AM")}
                  onMouseLeave={() => setHoveredTab(null)}
                  ref={bottomButtonRef}
                />
                <TabButton
                  icon={<MofaIcon height="18px" width="18px" />}
                  title="Klasse Mofa"
                  isActive={activeTab === "Mofa"}
                  onClick={() => setActiveTab("Mofa")}
                  onMouseEnter={() => setHoveredTab("Mofa")}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="md:rounded-bl-lg"
                  ref={bottomButtonRef}
                />
              </nav>
            </div>
            <div className="col-span-1 md:col-span-3 flex-grow overflow-auto h-full border-l border-t">
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

function Motorbike1Icon({
  fill = "#ffffff",
  height = "200px",
  width = "200px",
}) {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-44.1 -44.1 578.20 578.20"
      xmlSpace="preserve"
      stroke={fill}
      strokeWidth="12.740026"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M410.689,235.919c-14.154,0-27.443,3.744-38.96,10.268l-20.528-27.251c26.069-19.054,52.85-27.796,55.161-28.526 c2.881-0.916,5.223-3.034,6.424-5.794c1.201-2.769,1.15-5.925-0.153-8.644c-35.267-73.853-89.95-80.237-92.262-80.472 c-4.429-0.438-8.471,1.853-10.394,5.732c-1.935,3.889-1.253,8.563,1.699,11.749c6.486,6.964,9.173,14.499,8.207,23.04 c-0.418,3.72-1.502,7.509-3.085,11.297c-59.498-19.458-97.449,8.263-110.85,20.886c-33.22-11.701-63.089-17.613-89.272-17.613 c-40.358,0-57.371,14.273-59.183,15.903c-2.952,2.656-4.144,6.77-3.055,10.599c1.09,3.828,4.256,6.698,8.165,7.412 c38.377,6.954,65.206,20.062,83.918,35.579l-24.247,28.524c-12.389-8.014-27.131-12.689-42.953-12.689 C35.583,235.919,0,271.502,0,315.232c0,43.738,35.583,79.321,79.322,79.321c43.738,0,79.322-35.583,79.322-79.321 c0-20.417-7.76-39.054-20.482-53.127l23.244-27.344c33.791,39.865,26.9,87.054,26.418,90.061c-0.51,3.023,0.346,6.108,2.331,8.45 c1.975,2.342,4.887,3.685,7.952,3.685h93.239c3.044,0,5.947-1.334,7.921-3.645c1.985-2.321,2.851-5.387,2.382-8.399 c-6.43-40.978,11.064-71.267,33.506-92.626l19.928,26.455c-14.626,14.395-23.715,34.398-23.715,56.489 c0,43.738,35.583,79.321,79.322,79.321c43.729,0,79.311-35.583,79.311-79.321C490.001,271.502,454.418,235.919,410.689,235.919z M305.611,165.692c-10.235,13.117-23.696,24.748-32.785,31.59c-15.446-7.856-30.35-14.726-44.694-20.611 C241.759,166.856,267.735,154.879,305.611,165.692z M137.792,315.232c0,32.243-26.226,58.47-58.471,58.47 c-32.243,0-58.471-26.227-58.471-58.47c0-32.234,26.228-58.462,58.471-58.462c10.673,0,20.677,2.888,29.299,7.901l-37.24,43.81 l15.883,13.5l37.242-43.811C132.804,288.265,137.792,301.176,137.792,315.232z M279.708,316.106h-70.433 c0.662-30.634-7.748-110.953-108.848-143.666c4.755-0.622,10.162-0.998,16.249-0.998c27.969,0,77.082,8.206,152.251,47.28 c3.38,1.763,7.482,1.549,10.659-0.631c2.301-1.557,56.373-38.689,61.017-79.708c0.56-4.898,0.417-9.652-0.408-14.224 c14.101,7.595,32.651,22.338,48.432,50.713C357.483,187.844,274.16,230.707,279.708,316.106z M410.689,373.702 c-32.244,0-58.47-26.227-58.47-58.47c0-15.289,5.907-29.22,15.551-39.648l34.592,45.919l16.656-12.543l-34.6-45.931 c7.905-3.993,16.826-6.259,26.272-6.259c32.234,0,58.46,26.228,58.46,58.462C469.15,347.475,442.923,373.702,410.689,373.702z"></path>{" "}
      </g>
    </svg>
  );
}

function Motorbike2Icon({
  fill = "#ffffff",
  height = "200px",
  width = "200px",
}) {
  return (
    <svg
      fill={fill}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="-19.08 -19.08 515.09 515.09"
      xmlSpace="preserve"
      stroke={fill}
      strokeWidth="8"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M146.108,308.141c0-40.282-32.772-73.055-73.054-73.055C32.772,235.085,0,267.857,0,308.141 c0,40.281,32.772,73.053,73.054,73.053C113.336,381.193,146.108,348.422,146.108,308.141z M73.054,355.193 C47.109,355.193,26,334.086,26,308.141c0-25.946,21.108-47.055,47.054-47.055c25.946,0,47.054,21.107,47.054,47.055 C120.108,334.086,99,355.193,73.054,355.193z"></path>{" "}
            <path d="M403.879,232.585c-10.086,0-19.7,2.056-28.448,5.768l-20.231-31.43c8.572-7.838,14.901-13.465,16.925-14.947 c3.728-2.254,6.029-6.303,6.029-10.695v-39.416c0-4.259-2.168-8.225-5.754-10.523c-3.584-2.297-8.094-2.612-11.964-0.835 l-41.646,19.132l-34.525-48.634c-2.344-3.303-6.143-5.265-10.193-5.265h-30.304c-6.903,0-12.5,5.597-12.5,12.5 s5.597,12.5,12.5,12.5h23.849l28.056,39.52l-58.94,27.076L180.1,149.982c-1.484-0.979-3.161-1.63-4.917-1.91L75.02,132.117 c-3.615-0.57-7.297,0.462-10.08,2.836c-2.783,2.375-4.386,5.851-4.386,9.509v25.598c0,3.89,1.811,7.557,4.897,9.922l71.225,54.574 l44.268,91.92c2.083,4.326,6.46,7.076,11.262,7.076h88.322c0.01,0,0.018,0,0.026,0c0.011,0-9.312,0,0.031,0 c9.341,0,10.772-4.43,11.508-6.918c0.679-2.301,22.418-81.808,22.418-81.808c7.357-6.948,14.912-14.034,22.045-20.678 l17.878,27.771c-14.502,13.359-23.607,32.494-23.607,53.719c0,40.281,32.771,73.054,73.054,73.054s73.054-32.771,73.054-73.054 C476.933,265.358,444.161,232.585,403.879,232.585z M371.978,192.063c-0.202,0.124-0.377,0.214-0.514,0.285 C371.638,192.257,371.81,192.161,371.978,192.063z M200.06,308.553l-21.217-44.055l62.363,44.055H200.06z M353.154,175.328 c-14.298,12.057-45.227,41.311-58.357,53.732c-1.659,1.569-2.856,3.563-3.462,5.764l-18.099,65.747l-119.182-84.194L85.554,163.89 v-4.779l83.032,13.225l60.172,39.69c3.604,2.377,8.178,2.729,12.102,0.924l112.295-51.587V175.328z M403.879,352.693 c-25.945,0-47.054-21.107-47.054-47.053c0-12.035,4.547-23.023,12.005-31.354l24.538,38.118c2.39,3.712,6.413,5.736,10.521,5.736 c2.317,0,4.662-0.646,6.754-1.991c5.804-3.737,7.481-11.472,3.745-17.276l-24.556-38.146c4.438-1.391,9.154-2.143,14.045-2.143 c25.946,0,47.054,21.108,47.054,47.055C450.933,331.586,429.825,352.693,403.879,352.693z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

function MofaIcon({ fill = "#ffffff", height = "200px", width = "200px" }) {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 511.999 511.999"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M511.999,307.301c0-42.123-29.726-77.415-69.295-86.052c0-9.48,0.231-16.977-0.98-24.951 c-6.551-47.348-46.012-84.319-94.483-86.966l-66.098-40.592c-21.163-12.991-40.861,19.018-19.671,32.031l61.405,37.71v107.604 c0,4.721-3.84,8.562-8.562,8.562c-65.579,0-74.33,2.854-74.33-8.562c0-4.795-1.811-9.157-4.766-12.477 c3.052-6.706,4.766-14.144,4.766-21.979c0-29.363-23.888-53.251-53.251-53.251H94.683c-29.363,0-53.251,23.888-53.251,53.251 c0,7.83,1.713,15.264,4.761,21.966c-3.221,3.617,0.278-4.274-44.965,115.424c-4.642,12.283,4.451,25.439,17.581,25.439h43.312 c3.56,39.989,37.086,71.841,78.595,71.841c41.423,0,75.014-31.796,78.58-71.841h126.018c3.56,39.989,37.086,71.841,78.595,71.841 c61.552,0,99.525-67.812,67.189-120.205C505.185,326.096,511.999,316.761,511.999,307.301z M360.466,149.602 c16.034,4.983,29.357,16.171,37.164,30.74h-37.164V149.602z M94.683,195.969h92.052c8.636,0,15.661,7.025,15.661,15.661 s-7.026,15.661-15.661,15.661H94.683c-8.636,0-15.661-7.025-15.661-15.661C79.021,202.995,86.047,195.969,94.683,195.969z M140.716,408.712c-26.066,0-45.596-23.824-40.523-49.395c3.812-19.248,20.855-33.22,40.523-33.22 c19.653,0,36.689,13.975,40.509,33.227C186.306,384.925,166.713,408.712,140.716,408.712z M351.35,336.405 c-0.068,0.157-0.147,0.308-0.212,0.466H213.467c-27.034-64.308-118.486-64.308-145.521,0H46.005l27.21-71.99 c15.575,0,117.703,0,133.181,0c7.211,16.107,23.392,27.357,42.149,27.357h65.768c25.448,0,46.151-20.703,46.151-46.151v-28.155 h44.648v20.074v52.777C381.623,296.569,361.277,313.213,351.35,336.405z M423.908,408.71c-26.066,0-45.596-23.824-40.523-49.395 c3.812-19.248,20.855-33.22,40.523-33.22c22.782,0.001,41.316,18.535,41.316,41.316C465.224,390.184,446.69,408.71,423.908,408.71 z M442.704,288.506v-28.08c12.754,5.132,22.947,15.325,28.079,28.08H442.704z"></path>{" "}
          </g>{" "}
        </g>{" "}
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
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
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
        <div className="flex justify-center items-center w-6 h-5">
          {React.cloneElement(
            icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
            {
              fill: isActive ? "white" : "black",
            }
          )}
        </div>
      </div>
      <div>
        <div className="font-medium">{title}</div>
      </div>
    </button>
  );
}
