"'use client'";

import Kontaktformular from "./kontaktformular";
import Kontaktdaten from "./kontaktdaten";

export default function KontaktSeiteComponent() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Kontakt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="h-full">
          <Kontaktdaten />
        </div>
        <div className="h-full">
          <Kontaktformular />
        </div>
      </div>
    </div>
  );
}
