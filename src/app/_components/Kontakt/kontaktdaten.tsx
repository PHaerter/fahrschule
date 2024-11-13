"'use client'";

import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function KontaktdatenComponent() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Unsere Kontaktdaten</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-2 text-neutral-900 dark:text-neutral-50" />
            <div>
              <p className="font-semibold">Hauptsitz:</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-2 text-neutral-900 dark:text-neutral-50" />
            <div>
              <p className="font-semibold">Zweigstelle:</p>
              <p>Beispielweg 456</p>
              <p>67890 Beispielstadt</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-neutral-900 dark:text-neutral-50" />
          <div>
            <p className="font-semibold">Telefon:</p>
            <p>+49 123 456789</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-neutral-900 dark:text-neutral-50" />
          <div>
            <p className="font-semibold">E-Mail:</p>
            <p>info@muster-fahrschule.de</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
