import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";

type Oeffnungszeit = {
  tag: string;
  zeit: string;
};

type StandortInfo = {
  name: string;
  adresse: string;
  mapsLink: string;
  oeffnungszeiten: Oeffnungszeit[];
};

export default function Oeffnungszeiten() {
  const standorte: StandortInfo[] = [
    {
      name: "Standort Itzehoe",
      adresse: "Kamper Weg 170, 25524 Itzehoe",
      mapsLink:
        "https://www.google.com/maps/place/Fahrschule+Brückelmeier/@53.9029332,9.4774346,17z/data=!3m1!4b1!4m6!3m5!1s0x47b3c4eca9f7b6af:0xe4ac9396eac3048e!8m2!3d53.9029332!4d9.4800095!16s%2Fg%2F12ltlpkhf?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
      oeffnungszeiten: [
        { tag: "Montag", zeit: "17:00 - 18:00" },
        { tag: "Dienstag", zeit: "17:00 - 18:00" },
        { tag: "Mittwoch", zeit: "17:00 - 18:00" },
        { tag: "Donnerstag", zeit: "18:30 - 19:30" },
        { tag: "Freitag", zeit: "Geschlossen" },
        { tag: "Samstag", zeit: "Geschlossen" },
        { tag: "Sonntag", zeit: "Geschlossen" },
      ],
    },
    {
      name: "Standort Krempe",
      adresse: "Breite Straße 67, 25361 Krempe",
      mapsLink:
        "https://www.google.com/maps/place/Fahrschule+Brückelmeier/@53.8361574,9.4837878,17z/data=!4m6!3m5!1s0x47b3dba8c2c39145:0xd74072ee7562d74f!8m2!3d53.8361574!4d9.4863627!16s%2Fg%2F1vvyx47z?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D",
      oeffnungszeiten: [
        { tag: "Montag", zeit: "18:30 - 19:30" },
        { tag: "Dienstag", zeit: "18:30 - 19:30" },
        { tag: "Mittwoch", zeit: "18:30 - 19:30" },
        { tag: "Donnerstag", zeit: "17:00 - 18:00" },
        { tag: "Freitag", zeit: "Geschlossen" },
        { tag: "Samstag", zeit: "Geschlossen" },
        { tag: "Sonntag", zeit: "Geschlossen" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Unsere Büro-Öffnungszeiten
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {standorte.map((standort) => (
          <Card key={standort.name}>
            <CardHeader>
              <CardTitle>{standort.name}</CardTitle>
              <Link href={standort.mapsLink} passHref={true}>
                <p className="text-sm text-muted-foreground">
                  {standort.adresse}
                </p>
              </Link>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2">Tag</TableHead>
                    <TableHead className="w-1/2">Öffnungszeiten</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {standort.oeffnungszeiten.map((zeit) => (
                    <TableRow key={zeit.tag}>
                      <TableCell className="font-medium">{zeit.tag}</TableCell>
                      <TableCell>{zeit.zeit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}