"use client";
//TODO: REMOVE USE CLIENT

import Oeffnungszeiten from "./_components/Oeffnungszeiten";
import KontaktSeiteComponent from "./_components/Kontakt/KontaktSeiteComponent";
import Fahrzeugklassen from "./_components/Fahrzeugklassen";
import { Toaster } from "sonner";
import HeroSection from "./_components/Hero/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Oeffnungszeiten />
      <Fahrzeugklassen />
      <Toaster />
      <KontaktSeiteComponent />
    </>
  );
  //hallo
}
