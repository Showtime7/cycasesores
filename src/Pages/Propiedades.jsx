import { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import {
  FaFilter,
  FaSearch,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import imagenPropiedades from "../assets/propiedades.jpg";

const Propiedades = () => {
  // Datos de ejemplo (reemplazar con API)
  const propertiesData = [
    {
      id: 1,
      title: "Casa en San Felipe",
      address: "C. Nueva 2 252, San Felipe, Valparaíso",
      price: 50000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
      dateAdded: "2023-10-15",
    },
    // Agrega más propiedades aquí...
  ];

  // Estados para filtros
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    minArea: "",
    sortBy: "recent",
  });

  // Aplicar filtros
  const applyFilters = () => {
    let result = [...propertiesData];

    // Filtrado por precio
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= Number(filters.maxPrice));
    }

    // Filtrado por características
    if (filters.bedrooms) {
      result = result.filter((p) => p.bedrooms >= Number(filters.bedrooms));
    }
    if (filters.bathrooms) {
      result = result.filter((p) => p.bathrooms >= Number(filters.bathrooms));
    }
    if (filters.minArea) {
      result = result.filter((p) => p.area >= Number(filters.minArea));
    }

    // Ordenamiento
    if (filters.sortBy === "recent") {
      result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (filters.sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProperties(result);
  };

  // Resetear filtros
  const resetFilters = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
      minArea: "",
      sortBy: "recent",
    });
    setFilteredProperties(propertiesData);
  };

  return (
    <div className="relative">
      {/* Sección Hero */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imagenPropiedades}
            alt="Propiedades CyC Asesores"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Nuestras Propiedades
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Sección de Filtros */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <div className="mb-4 flex items-center">
              <FaFilter className="mr-2 text-navy" />
              <h2 className="text-xl font-bold text-gray-800">
                Filtrar Propiedades
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
              {/* Precio Mínimo */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Precio Mínimo
                </label>
                <input
                  type="number"
                  placeholder="$ Mínimo"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={filters.minPrice}
                  onChange={(e) =>
                    setFilters({ ...filters, minPrice: e.target.value })
                  }
                />
              </div>

              {/* Precio Máximo */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Precio Máximo
                </label>
                <input
                  type="number"
                  placeholder="$ Máximo"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters({ ...filters, maxPrice: e.target.value })
                  }
                />
              </div>

              {/* Dormitorios */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Dormitorios
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={filters.bedrooms}
                  onChange={(e) =>
                    setFilters({ ...filters, bedrooms: e.target.value })
                  }
                >
                  <option value="">Cualquiera</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              {/* Baños */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Baños
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={filters.bathrooms}
                  onChange={(e) =>
                    setFilters({ ...filters, bathrooms: e.target.value })
                  }
                >
                  <option value="">Cualquiera</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                </select>
              </div>

              {/* Metros Cuadrados */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  M² Mínimos
                </label>
                <input
                  type="number"
                  placeholder="Mínimo m²"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={filters.minArea}
                  onChange={(e) =>
                    setFilters({ ...filters, minArea: e.target.value })
                  }
                />
              </div>

              {/* Ordenar por */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Ordenar por
                </label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters({ ...filters, sortBy: e.target.value })
                  }
                >
                  <option value="recent">Más recientes</option>
                  <option value="price-asc">Precio (menor a mayor)</option>
                  <option value="price-desc">Precio (mayor a menor)</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={resetFilters}
                className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Limpiar
              </button>
              <button
                onClick={applyFilters}
                className="flex items-center rounded-md bg-navy px-4 py-2 text-white hover:bg-navy/90"
              >
                <FaSearch className="mr-2" />
                Aplicar Filtros
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección de Resultados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredProperties.length} Propiedades encontradas
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </motion.div>

          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 text-center"
            >
              <h3 className="text-xl font-medium text-gray-600">
                No encontramos propiedades con los filtros seleccionados
              </h3>
              <button
                onClick={resetFilters}
                className="mt-4 text-blue-600 hover:underline"
              >
                Ver todas las propiedades
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Propiedades;
