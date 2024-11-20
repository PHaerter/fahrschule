import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const angle = -15; // Winkel-Input
  const distance = 500;

  const xStart = Math.cos((angle * Math.PI) / 180) * distance;
  const yStart = Math.sin((angle * Math.PI) / 180) * distance;

  return (
    <div className="hero min-h-[50vh] md:md:p-12">
      <div className="hero-content flex-col md:flex-row-reverse">
        <motion.img
          src="/vw_t-roc.png"
          className="w-[80%] md:w-[50%] rounded-lg"
          alt="Fahrschulauto"
          initial={{ x: xStart, y: yStart }}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "tween", // oder "tween" für konstante Geschwindigkeit
            stiffness: 50, // Steuert Geschwindigkeit (für Spring)
            damping: 20, // Glättet die Animation (für Spring)
            duration: 2, // Nur relevant für Tween
          }}
        />
        <div className="md:mr-20">
          <h1 className="text-5xl font-bold">Dein Weg zum Führerschein!</h1>
          <p className="py-6">
            Bei uns lernst du das Fahren in entspannter Atmosphäre. Egal, ob du
            ganz neu anfängst oder schon erste Erfahrungen hast – wir begleiten
            dich Schritt für Schritt, bis du sicher auf der Straße bist.
          </p>
        </div>
      </div>
    </div>
  );
}
