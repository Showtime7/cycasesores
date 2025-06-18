import { motion } from "framer-motion";
import {
  FaChartLine,
  FaTools,
  FaHandshake,
  FaUsers,
  FaCheckCircle,
  FaPhone,
} from "react-icons/fa";
import imagenAsesoriaInversiones from "../assets/inversiones.jpg";

const AsesoriaInversiones = () => {
  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const servicios = [
    {
      icon: <FaTools className="text-3xl text-navy" />,
      title: "Coordinación de remodelaciones",
      description: "Mejoramos la propiedad para aumentar su valor de mercado",
    },
    {
      icon: <FaChartLine className="text-3xl text-navy" />,
      title: "Estrategias de venta/arriendo",
      description: "Planes personalizados para maximizar tu retorno",
    },
    {
      icon: <FaUsers className="text-3xl text-navy" />,
      title: "Conexión con compradores",
      description: "Red de corredores y clientes potenciales",
    },
  ];

  const beneficios = [
    "Asesoría legal y comercial completa",
    "Experiencia real en remates judiciales",
    "Acompañamiento personalizado de principio a fin",
    "Visión de inversión con foco en rentabilidad",
  ];

  return (
    <div className="relative">
      {/* Sección Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imagenAsesoriaInversiones} // Añade tu imagen aquí
            alt="Asesoría en Inversiones"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Asesoría Comercial Post-Adjudicación
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Sección Principal */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-8 text-lg text-gray-700">
              Una vez que la propiedad está en tu poder,{" "}
              <strong>CyC Asesores</strong> continúa acompañándote en el proceso
              de valorización y comercialización:
            </p>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 grid gap-8 md:grid-cols-3"
          >
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-white p-4 shadow">
                    {servicio.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {servicio.title}
                </h3>
                <p className="text-gray-700">{servicio.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ¿Por qué elegirnos? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-4xl rounded-xl bg-navy/5 p-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-navy">
              ¿Por qué elegir CyC Asesores?
            </h2>
            <ul className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start text-gray-800"
                >
                  <FaCheckCircle className="mr-3 mt-1 flex-shrink-0 text-green-600" />
                  <span>{beneficio}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Llamado a la acción */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 text-center"
          >
            {/* Divisor */}
            <div className="relative mb-16">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-gray-500">○</span>
              </div>
            </div>
            <div className="mb-6 flex justify-center"></div>
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              📞 Contáctanos y descubre cómo transformar una oportunidad legal
              en una inversión rentable
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              En <strong>CyC Asesores</strong>, no solo te ayudamos a comprar
              una propiedad en remate. Te ayudamos a convertirla en ganancia.
            </p>
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block rounded-lg bg-navy px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-navy/90 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-opacity-50"
            >
              Habla con un asesor
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AsesoriaInversiones;
