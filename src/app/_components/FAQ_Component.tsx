import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";

const faqData = [
  {
    question: "Wie alt muss ich sein, um mit dem Führerschein zu beginnen?",
    answer:
      "In Deutschland kannst Du mit 16 Jahren und 6 Monaten mit der theoretischen Ausbildung beginnen. Die praktische Ausbildung kann ab 17 Jahren starten. Den Führerschein der Klasse B kannst Du frühestens mit 17 Jahren erwerben (begleitetes Fahren) oder regulär mit 18 Jahren.",
  },
  {
    question: "Wie viele Theoriestunden sind erforderlich?",
    answer:
      "Für den Führerschein der Klasse B sind mindestens 14 Theoriestunden à 90 Minuten vorgeschrieben. Diese decken verschiedene Themen wie Verkehrsregeln, Fahrzeugtechnik und Umweltschutz ab.",
  },
  {
    question: "Wie viele Fahrstunden benötige ich?",
    answer:
      "Die Anzahl der benötigten Fahrstunden variiert je nach individuellen Fähigkeiten. Durchschnittlich absolvieren Fahrschüler etwa 25-40 Fahrstunden. Gesetzlich vorgeschrieben sind außerdem 12 Sonderfahrten davon 5 Überlandfahrten, 4 Autobahnfahrten und 3 Nachtfahrten.",
  },
  {
    question: "Was kostet der Führerschein insgesamt?",
    answer:
      "Die Gesamtkosten für einen Führerschein der Klasse B liegen in der Regel zwischen 2.500 und 4.000 Euro. Dies hängt von der Anzahl der benötigten Fahrstunden ab. Eine genaue Kostenaufstellung erhaltst Du in unserer Fahrschule.",
  },
  {
    question: "Wie lange dauert die Ausbildung durchschnittlich?",
    answer:
      "Die Dauer der Führerscheinausbildung variiert, liegt aber typischerweise zwischen 5 und 8 Monaten. Dies hängt von Ihrer Lerngeschwindigkeit und der Häufigkeit der Praxisstunden ab.",
  },
  {
    question: "Kann ich auch schon während des Theorieunterrichts fahren?",
    answer:
      "Ja, wenn Du die Lernapp bereits einmal durchgearbeitet hast und Du dich theoretisch schon im Straßenverkehr auskennst, kannst Du auch schon mit den Fahrstunden beginnen.",
  },
];

export default function FAQ_Component() {
  return (
    <div className="bg-neutral" id="faq">
      <div className="w-full max-w-3xl mx-auto p-12 space-y-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Häufig gestellte Fragen
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
