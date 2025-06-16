import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaGavel,
  FaFileContract,
  FaHome,
  FaSearch,
  FaHandshake,
  FaClipboardCheck,
} from "react-icons/fa";

const AsesoriaLegal = () => {
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

  const services = [
    {
      icon: <FaSearch className="text-3xl text-navy" />,
      title: "Asesoría Legal Previa",
      items: [
        "Revisión de expedientes judiciales y análisis de viabilidad",
        "Evaluación de gravámenes, prohibiciones y ocupación del inmueble",
        "Estrategia legal personalizada para postular en remate",
      ],
    },
    {
      icon: <FaGavel className="text-3xl text-navy" />,
      title: "Representación en el Remate",
      items: [
        "Postulación y adjudicación de la propiedad en el tribunal",
        "Gestión del pago del saldo del precio en los plazos legales",
      ],
    },
    {
      icon: <FaFileContract className="text-3xl text-navy" />,
      title: "Trámites Legales y Registrales",
      items: [
        "Solicitud de escritura pública",
        "Alzamiento de hipotecas, embargos u otras cargas",
        "Inscripción en el Conservador de Bienes Raíces",
      ],
    },
    {
      icon: <FaHome className="text-3xl text-navy" />,
      title: "Desocupación Legal del Inmueble",
      items: [
        "Gestión judicial del lanzamiento de ocupantes (si corresponde)",
        "Coordinación para la entrega efectiva del bien",
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Sección Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="" // Añade tu imagen aquí
            alt="Asesoría Legal CyC"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Asesoría Legal
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
            <h2 className="mb-6 text-3xl font-bold text-navy">
              CyC Asesores – Asesoría Legal y Comercial en Remates Judiciales
            </h2>
            <div className="prose-lg text-gray-700">
              <p className="mb-6">
                En <strong>CyC Asesores</strong> transformamos oportunidades en
                inversiones exitosas. Nuestro servicio en asesoría legal y
                comercial en remates judiciales, brindando un servicio integral
                que acompaña a nuestros clientes desde la adjudicación hasta la
                eventual venta del inmueble.
              </p>
              <p className="mb-8">
                Adquirir una propiedad en remate puede ser una excelente
                inversión, pero también implica un proceso legal riguroso y
                detallado. Con nuestro respaldo, puedes participar con
                confianza, seguridad y visión estratégica.
              </p>
            </div>
          </motion.div>

          {/* Sección Qué hacemos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-12"
          >
            <div className="mb-8 flex items-center">
              <div className="mr-4 h-1 w-12 bg-navy"></div>
              <h3 className="text-2xl font-bold text-gray-800">
                🔍 ¿Qué hacemos?
              </h3>
            </div>
            <p className="mb-8 text-lg text-gray-700">
              Te guiamos en cada etapa del proceso de remates judiciales:
            </p>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-4 rounded-full bg-white p-3 shadow">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h4>
                </div>
                <ul className="space-y-2 pl-2">
                  {service.items.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-gray-700"
                    >
                      <span className="mr-2 mt-1 block h-1 w-1 rounded-full bg-navy"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Sección de imagen destacada */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16"
          >
            <div className="overflow-hidden rounded-xl shadow-xl">
              <img
                src="" // Añade tu imagen aquí
                alt="Proceso de remates judiciales"
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AsesoriaLegal;
