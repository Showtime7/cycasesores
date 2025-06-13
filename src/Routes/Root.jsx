import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Header />

      <main className="flex-grow">
        <Outlet /> {/* Contenido de las páginas */}
      </main>

      <Footer />
    </div>
  );
}
