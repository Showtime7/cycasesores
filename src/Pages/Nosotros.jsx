import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaHandshake,
  FaChartLine,
  FaBalanceScale,
  FaHome,
  FaFileContract,
} from "react-icons/fa";
import imagenQuienesSomos from "../assets/quienessomos.jpeg";
import imagenServicios from "../assets/servicios.png";
export const Nosotros = () => {
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

  return (
    <div className="relative">
      {/* Sección Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imagenQuienesSomos} // Añade tu imagen aquí
            alt="Equipo CyC Asesores"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Sobre Nosotros
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Sección Quiénes Somos */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
              Quiénes Somos
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Card Misión */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg border border-gray-200 bg-gray-50 p-8 shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-bold text-navy">Misión</h3>
              <p className="text-gray-700">
                Nuestro propósito es ofrecer asesoría estratégica en inversiones
                inmobiliarias, facilitar la compra y venta de propiedades,
                gestionar arriendos y fortalecer el patrimonio inmobiliario de
                nuestros clientes. Acompañamos a nuestros clientes en todas las
                etapas del proceso inmobiliario, asegurando decisiones
                informadas y exitosas que maximizan el valor de sus inversiones.
              </p>
            </motion.div>

            {/* Card Visión */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              className="rounded-lg border border-gray-200 bg-gray-50 p-8 shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-bold text-navy">Visión</h3>
              <p className="text-gray-700">
                Aspiramos a ser líderes reconocidos en el sector inmobiliario,
                destacándonos por nuestra experiencia, compromiso y excelencia.
                Nos dedicamos a ofrecer un servicio de alta calidad que impulse
                el crecimiento y el éxito de nuestros clientes en el dinámico
                mercado inmobiliario.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <img
          src={imagenServicios} // Añade tu imagen de banner aquí
          alt="Nuestro equipo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Sección Servicios */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center text-3xl font-bold text-gray-800"
          >
            Nuestros Servicios
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            {/* Servicio 1 */}
            <motion.div
              variants={fadeIn}
              className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-navy/10 p-3 text-navy">
                  <FaChartLine className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Gestión de Patrimonio Inmobiliario
                </h3>
              </div>
              <p className="text-gray-700">
                Optimizamos el valor y rendimiento de las carteras inmobiliarias
                de nuestros clientes. Evaluamos oportunidades de inversión,
                desarrollamos estrategias personalizadas y brindamos
                planificación fiscal y legal para garantizar una gestión
                patrimonial eficiente y segura.
              </p>
            </motion.div>

            {/* Servicio 2 */}
            <motion.div
              variants={fadeIn}
              className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-navy/10 p-3 text-navy">
                  <FaBalanceScale className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Compra/Venta y Asesoría Legal
                </h3>
              </div>
              <p className="text-gray-700">
                Proporcionamos asistencia integral en la compra y venta de
                propiedades, desde la búsqueda de inmuebles hasta el cierre de
                transacciones. Ofrecemos asesoría legal integral, incluyendo
                revisión de contratos y resolución de disputas, protegiendo los
                intereses de nuestros clientes.
              </p>
            </motion.div>

            {/* Servicio 3 */}
            <motion.div
              variants={fadeIn}
              className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-navy/10 p-3 text-navy">
                  <FaHome className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">
                  Administración de Arriendos
                </h3>
              </div>
              <p className="text-gray-700">
                Nos encargamos de la gestión completa de propiedades en
                alquiler, desde la búsqueda de arrendatarios hasta el cobro de
                rentas, la administración de contratos y el mantenimiento
                continuo, brindando tranquilidad y eficiencia a nuestros
                clientes propietarios.
              </p>
            </motion.div>

            {/* Servicio 4 */}
            <motion.div
              variants={fadeIn}
              className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-navy/10 p-3 text-navy">
                  <FaFileContract className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Créditos Hipotecarios</h3>
              </div>
              <p className="text-gray-700">
                Ayudamos a nuestros clientes a obtener financiamiento ajustado a
                sus necesidades, evaluamos las mejores opciones de créditos
                hipotecarios y negociamos términos favorables con las entidades
                financieras.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
