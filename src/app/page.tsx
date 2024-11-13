"use client";
//TODO: REMOVE USE CLIENT

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Oeffnungszeiten from "./_components/Oeffnungszeiten";
import KontaktSeiteComponent from "./_components/Kontakt/KontaktSeiteComponent";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Oeffnungszeiten />
      <Toaster />
      <KontaktSeiteComponent />
      <Footer />
    </>
  );
}
