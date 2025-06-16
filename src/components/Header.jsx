import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imagenLogo from "../assets/cycasesores2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isDropdownOpen &&
        !e.target.closest(".dropdown-trigger") &&
        !e.target.closest(".dropdown-content")
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  // Animaciones
  const menuVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } },
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: -10, transitionEnd: { display: "none" } },
  };

  const iconRotate = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <header className="bg-navy text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <motion.a
              href="/"
              className="text-2xl font-bold text-white hover:text-sky transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={imagenLogo}
                className="h-30 w-auto object-contain filter brightness-200"
              />
            </motion.a>
          </div>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="/"
              className="hover:text-sky transition-colors"
              whileHover={{ y: -2 }}
            >
              Inicio
            </motion.a>
            <motion.a
              href="/propiedades"
              className="hover:text-sky transition-colors"
              whileHover={{ y: -2 }}
            >
              Propiedades
            </motion.a>
            <motion.a
              href="/nosotros"
              className="hover:text-sky transition-colors"
              whileHover={{ y: -2 }}
            >
              Quiénes Somos
            </motion.a>

            {/* Dropdown */}
            <div className="relative dropdown-trigger">
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:text-sky transition-colors"
                whileHover={{ y: -2 }}
              >
                Nuestras Asesorías
                <motion.span
                  animate={isDropdownOpen ? "open" : "closed"}
                  variants={iconRotate}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </motion.button>

              {/* Contenido del Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-48 bg-white text-navy rounded-md shadow-lg py-1 z-50 dropdown-content"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.a
                      href="/asesoria-legal"
                      className="block px-4 py-2 hover:bg-sky hover:text-blue-700 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Asesoría Legal
                    </motion.a>
                    <motion.a
                      href="/asesoria-inversiones"
                      className="block px-4 py-2 hover:bg-sky hover:text-blue-700 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Asesoría en Inversiones
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="/contacto"
              className="hover:text-sky transition-colors"
              whileHover={{ y: -2 }}
            >
              Contacto
            </motion.a>
          </nav>

          {/* Botón Mobile (Hamburguesa) */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Menú Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.2 }}
            >
              <motion.a
                href="/"
                className="block py-2 hover:text-sky transition-colors"
                whileHover={{ x: 5 }}
              >
                Inicio
              </motion.a>
              <motion.a
                href="/propiedades"
                className="block py-2 hover:text-sky transition-colors"
                whileHover={{ x: 5 }}
              >
                Propiedades
              </motion.a>
              <motion.a
                href="/nosotros"
                className="block py-2 hover:text-sky transition-colors"
                whileHover={{ x: 5 }}
              >
                Quiénes Somos
              </motion.a>

              <div className="relative">
                <motion.button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center py-2 hover:text-sky transition-colors w-full"
                  whileHover={{ x: 5 }}
                >
                  Nuestras Asesorías
                  <motion.span
                    animate={isDropdownOpen ? "open" : "closed"}
                    variants={iconRotate}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="ml-4 mt-2 bg-white text-navy rounded-md shadow-inner py-1"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.a
                        href="/asesoria-legal"
                        className="block px-4 py-2 hover:bg-sky hover:text-white"
                        whileHover={{ x: 5 }}
                      >
                        Asesoría Legal
                      </motion.a>
                      <motion.a
                        href="/asesoria-inversiones"
                        className="block px-4 py-2 hover:bg-sky hover:text-white"
                        whileHover={{ x: 5 }}
                      >
                        Asesoría en Inversiones
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                href="/contacto"
                className="block py-2 hover:text-sky transition-colors"
                whileHover={{ x: 5 }}
              >
                Contacto
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
