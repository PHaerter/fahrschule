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
  oeffnungszeiten: Oeffnungszeit[];
};

export default function Oeffnungszeiten() {
  const standorte: StandortInfo[] = [
    {
      name: "Standort Itzehoe",
      adresse: "Kamper Weg 170, 25524 Itzehoe",
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
              <p className="text-sm text-muted-foreground">
                {standort.adresse}
              </p>
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
