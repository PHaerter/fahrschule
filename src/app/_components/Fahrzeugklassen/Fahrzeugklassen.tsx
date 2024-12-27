import FahrzeugklassenAuto from "./FahrzeugklassenAuto";
import FahrzeugklassenMotorrad from "./FahrzeugklassenMotorrad";

export default function Fahrzeugklassen() {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto pt-12" id="fahrzeugklassen">
        <h1 className="text-3xl font-bold text-center mb-8">Fahrzeugklassen</h1>

        <FahrzeugklassenAuto />
        <FahrzeugklassenMotorrad />
      </div>
    </>
  );
}
