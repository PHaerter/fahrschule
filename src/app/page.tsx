"use client";
//TODO: REMOVE USE CLIENT

import Oeffnungszeiten from "./_components/Oeffnungszeiten";
import KontaktSeiteComponent from "./_components/Kontakt/KontaktSeiteComponent";
import Fahrzeugklassen from "./_components/Fahrzeugklassen";
import FAQ_Component from "./_components/FAQ_Component";
import { Toaster } from "sonner";
import HeroSection from "./_components/Hero/HeroSection";

export default function Home() {
  return (
    <>
      <Toaster />
      <HeroSection />
      <Oeffnungszeiten />
      <Fahrzeugklassen />
      <FAQ_Component />
      <KontaktSeiteComponent />
    </>
  );
  //hallo
}
