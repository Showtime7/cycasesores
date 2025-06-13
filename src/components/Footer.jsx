import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [ufValue, setUfValue] = useState("$36.000"); // Valor inicial aproximado

  // Función para obtener el valor actual de la UF (ejemplo con API de mindicador.cl)
  useEffect(() => {
    const fetchUfValue = async () => {
      try {
        const response = await fetch("https://mindicador.cl/api/uf");
        const data = await response.json();
        const todayValue = data.serie[0]?.valor;
        if (todayValue) {
          setUfValue(
            new Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(todayValue)
          );
        }
      } catch (error) {
        console.error("Error al obtener valor UF:", error);
      }
    };

    fetchUfValue();
  }, []);

  return (
    <footer className="bg-navy text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Valor UF */}
          <div className="mb-4 md:mb-0">
            <div className="text-sm font-semibold">VALOR UF HOY:</div>
            <div className="text-xl font-bold">{ufValue} CLP</div>
          </div>

          {/* Copyright */}
          <div className="mb-4 md:mb-0 text-center">
            <p>
              Copyright © 2025{" "}
              <span className="font-semibold">CYC Asesores</span>
            </p>
            <p className="text-xs mt-1">Todos los derechos reservados</p>
          </div>

          {/* Información de contacto */}
          <div className="text-right">
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
              <div>
                <p>Valentín Letelier 20,</p>
                <p>oficina 304, Santiago,</p>
                <p>Región Metropolitana</p>
              </div>
            </div>

            <div className="flex items-center justify-end mb-2">
              <FaPhone className="mr-2" />
              <a
                href="tel:+56964009939"
                className="hover:text-sky transition-colors"
              >
                +56 9 6400 9939
              </a>
            </div>

            <div className="flex items-center justify-end">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:contacto@cycasesores.cl"
                className="hover:text-sky transition-colors"
              >
                contacto@cycasesores.cl
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
