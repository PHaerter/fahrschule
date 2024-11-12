import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Oeffnungszeiten from "./_components/Oeffnungszeiten";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Oeffnungszeiten />
      <Footer />
    </div>
  );
}
