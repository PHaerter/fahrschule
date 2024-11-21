import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="hero min-h-[50vh] lg:p-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/vw_t-roc-street_trees.webp"
          width={800}
          height={600}
          className="w-[80%] lg:w-[60%] rounded-lg"
          alt="Rotes Fahrschulauto mit Bäumen im Hintergrund"
        />
        <div className="lg:mr-20">
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Dein Weg zum Führerschein!
          </h1>
          <p className="py-6 text-justify">
            Bei uns lernst du das Fahren in entspannter Atmosphäre. Egal, ob du
            ganz neu anfängst oder schon erste Erfahrungen hast – wir begleiten
            dich Schritt für Schritt, bis du sicher auf der Straße bist.
          </p>
        </div>
      </div>
    </div>
  );
}
