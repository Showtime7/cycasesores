import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import imagenContacto from "../assets/contact.jpg";

export const Contacto = () => {
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
            src={imagenContacto} // Añade tu imagen aquí
            alt="Contacto CyC Asesores"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Nuestros Contactos
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
              Contáctanos
            </h2>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-4xl rounded-xl bg-gray-50 p-8 shadow-sm"
          >
            <h3 className="mb-6 text-2xl font-bold text-navy">
              Información de contacto
            </h3>

            <motion.div variants={fadeIn} className="mb-8">
              <h4 className="mb-4 text-lg font-medium text-gray-700">
                Haz llegar tus preguntas a través de nuestro What's App:
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="https://wa.me/56964009939"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-800 hover:text-navy transition-colors"
                >
                  <FaWhatsapp className="mr-3 text-2xl text-green-500" />
                  <span>+56 9 6400 9939</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/56988978521"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-800 hover:text-navy transition-colors"
                >
                  <FaWhatsapp className="mr-3 text-2xl text-green-500" />
                  <span>+56 9 8897 8521</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-8">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-2xl text-navy" />
                <div>
                  <p>Huérfanos 1400, Oficina 526-C,</p>
                  <p>Santiago, Región Metropolitana</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="mb-8">
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-2xl text-navy" />
                <a
                  href="mailto:contacto@cycasesores.cl"
                  className="hover:text-navy transition-colors"
                >
                  contacto@cycasesores.cl
                </a>
              </div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div variants={fadeIn}>
              <h4 className="mb-4 text-center text-lg font-medium text-gray-700">
                Síguenos en nuestras redes sociales
              </h4>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="text-3xl text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="text-3xl text-gray-700 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="text-3xl text-gray-700 hover:text-pink-600 transition-colors"
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
