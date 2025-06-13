import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import imagenHero from "../assets/vistaHome.jpg";
import imagenFondo from "../assets/vistaquienes.jpg";
import imagenSearch from "../assets/quebuscas.jpg";
import PropertyCard from "../components/PropertyCard";
import ContactForm from "../components/ContactForm";
import { FaBriefcase, FaBuilding, FaHome } from "react-icons/fa";
const properties = [
  {
    id: 1,
    title: "Venta Casa San Felipe 2D + 1B",
    address: "C. Nueva 2 252, San Felipe, Valparaíso",
    price: 50000000,
    bedrooms: 2,
    bathrooms: 1,
    area: 100,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  },
  // Agrega más propiedades aquí...
];

const Home = () => {
  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section con imagen y overlay */}
      <section className="relative h-[70vh] max-h-[800px] min-h-[500px] w-full overflow-hidden">
        {/* Imagen con blur - Reemplaza con tu imagen */}
        <div className="absolute inset-0">
          <img
            src={imagenHero}
            alt="Bienes raíces"
            className="h-full w-full object-cover"
          />
          {/* Overlay con blur */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        {/* Contenido centrado */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          {/* Título principal con animación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              CyC Asesores
            </h1>
            <p className="mx-auto max-w-2xl text-xl md:text-2xl">
              ¿Quieres Comprar, Vender o Arrendar tu Propiedad?
            </p>
          </motion.div>

          {/* Botón con animación */}
          <motion.button
            onClick={() => navigate("/contacto")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 rounded-lg bg-[#1877F2] px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#166FE5] focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-opacity-50"
            style={{ backgroundColor: "#1877F2" }} // Azul de Facebook
          >
            Contáctanos
          </motion.button>
        </div>
      </section>

      {/* Resto del contenido de la página puede ir aquí */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Encuentra tu hogar con nosotros
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] max-h-[800px] min-h-[600px] w-full overflow-hidden">
        {/* Imagen de fondo - Tú la añadirás desde assets */}
        <div className="absolute inset-0">
          <img
            src={imagenFondo} // Deja vacío para que añadas tu imagen
            alt="Equipo CyC Asesores"
            className="h-full w-full object-cover"
          />
          {/* Overlay con blur */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        {/* Contenido centrado */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              ¿Quiénes somos?
            </h2>

            {/* Texto descriptivo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto mb-8 text-left text-base leading-relaxed md:text-lg"
            >
              <p className="mb-4">
                En <strong>CyC Asesores</strong>, somos un equipo de expertos en
                el ámbito inmobiliario compuesto por profesionales de las áreas
                Comercial, Legal y Contable. Nos especializamos en la gestión
                estratégica de patrimonio inmobiliario, ofreciendo soluciones
                integrales que combinan asesoría en inversiones, gestión de
                propiedades y servicios legales.
              </p>
              <p>
                Nuestro enfoque multidisciplinario y personalizado nos permite
                adaptarnos a las necesidades específicas de cada cliente,
                brindando un servicio excepcional.
              </p>
            </motion.div>

            {/* Botón */}
            <motion.button
              onClick={() => navigate("/nosotros")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 rounded-lg bg-white px-8 py-3 text-lg font-semibold text-navy shadow-lg transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Leer más
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Nueva sección de formulario */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              ¿Quieres vender tu propiedad?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Contáctanos y descubre cómo transformar una oportunidad legal en
              una inversión rentable.
            </p>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Nueva sección "¿Qué estás buscando?" */}
      <section className="relative h-[90vh] min-h-[500px] w-full overflow-hidden">
        {/* Imagen de fondo - Añade tu imagen aquí */}
        <div className="absolute inset-0">
          <img
            src={imagenSearch} // Añade tu ruta de imagen aquí
            alt="Tipos de propiedades"
            className="h-full w-full object-cover"
          />
          {/* Overlay con blur */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        {/* Contenido centrado */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full max-w-4xl"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-12 text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              ¿Qué estás buscando?
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-8 md:gap-16"
            >
              {/* Icono Departamento */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center"
              >
                <div className="rounded-full bg-white/20 p-6 backdrop-blur-sm">
                  <FaBuilding className="h-12 w-12" />
                </div>
                <span className="mt-4 text-xl font-medium">Departamento</span>
              </motion.div>

              {/* Icono Casa */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center"
              >
                <div className="rounded-full bg-white/20 p-6 backdrop-blur-sm">
                  <FaHome className="h-12 w-12" />
                </div>
                <span className="mt-4 text-xl font-medium">Casa</span>
              </motion.div>

              {/* Icono Oficina */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center"
              >
                <div className="rounded-full bg-white/20 p-6 backdrop-blur-sm">
                  <FaBriefcase className="h-12 w-12" />
                </div>
                <span className="mt-4 text-xl font-medium">Oficina</span>
              </motion.div>
            </motion.div>

            {/* Botón */}
            <motion.div variants={itemVariants} className="mt-16">
              <motion.button
                onClick={() => navigate("/propiedades")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-navy shadow-lg transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Ver inmuebles disponibles
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
