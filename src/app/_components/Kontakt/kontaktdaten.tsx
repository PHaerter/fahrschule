"'use client'";

import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

export default function KontaktdatenComponent() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Unsere Kontaktdaten</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pb-4">
        <div className="space-y-4">
          <Link
            href="https://www.google.com/maps/place/Fahrschule+Brückelmeier/@53.9029332,9.4774346,17z/data=!3m1!4b1!4m6!3m5!1s0x47b3c4eca9f7b6af:0xe4ac9396eac3048e!8m2!3d53.9029332!4d9.4800095!16s%2Fg%2F12ltlpkhf?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
            passHref={true}
          >
            <div className="flex items-start mb-4">
              <MapPin className="w-5 h-5 mt-3 mr-4 text-neutral-900" />
              <div>
                <p className="font-semibold">Fahrschule Itzehoe:</p>
                <p>Kamper Weg 170</p>
                <p>25524 Itzehoe</p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.google.com/maps/place/Fahrschule+Brückelmeier/@53.8361574,9.4837878,17z/data=!4m6!3m5!1s0x47b3dba8c2c39145:0xd74072ee7562d74f!8m2!3d53.8361574!4d9.4863627!16s%2Fg%2F1vvyx47z?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
            passHref={true}
          >
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mt-3 mr-4 text-neutral-900" />
              <div>
                <p className="font-semibold">Fahrschule Krempe:</p>
                <p>Breite Straße 67</p>
                <p>25361 Krempe</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-4 text-neutral-900" />
          <div>
            <p className="font-semibold">Telefon:</p>
            <p> Wolfgang Brückelmeier </p>
            <p>+49 1520 1983531</p>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-4 text-neutral-900" />
          <div>
            <p className="font-semibold">Telefon:</p>
            <p> Büro Itzehoe </p>
            <p>04821 / 60 79 282</p>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-4 text-neutral-900" />
          <div>
            <p className="font-semibold">Telefon:</p>
            <p> Büro Krempe </p>
            <p>04824 / 515 99 54</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-4 text-neutral-900" />
          <div>
            <p className="font-semibold">E-Mail:</p>
            <p>fahrschule-brueckelmeier@web.de</p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Image
            src="/WelleDrive-Logo.webp"
            className="h-20"
            alt="WelleDrive Logo"
            width="176"
            height="80"
            style={{
              filter: "brightness(0%) contrast(100%) saturate(0)",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
