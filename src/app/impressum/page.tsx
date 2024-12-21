export default function Impressum() {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4 flex items-center justify-center flex-col">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center">
            Impressum Fahrschule Brückelmeier
          </h1>
          <div className="ml-50">
            <p className="font-bold">Wolfgang Brückelmeier</p>
            <p>Breite Straße 67</p>
            <p>25361 Krempe</p>
            <br />
            <p className="font-bold">Kontakt</p>
            <p>Telefon: +49 1520 1983531</p>
            <p>E-Mail: fahrschule-brueckelmeier@web.de</p>
            <br />
            <p className="font-bold">Umsatzsteuer-Identifikationsnummer</p>
            <p>USt-Id: DE 48153469277</p>
          </div>
        </div>
      </div>
    </>
  );
}
