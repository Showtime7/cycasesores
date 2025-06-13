import { useState } from "react";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Contenedor de imagen con flechas */}
      <div className="relative h-64 w-full">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="h-full w-full object-cover"
        />

        {/* Flechas de navegación */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md transition hover:bg-white"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md transition hover:bg-white"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Detalles de la propiedad */}
      <div className="bg-white p-4">
        <h3 className="text-lg font-bold text-gray-800">{property.title}</h3>
        <p className="text-sm text-gray-600">{property.address}</p>

        <div className="my-3">
          <span className="text-xl font-bold text-blue-600">
            {property.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
              minimumFractionDigits: 0,
            })}
          </span>
        </div>

        <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <FaBed className="text-blue-500" />
            <span>{property.bedrooms} dorm</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaBath className="text-blue-500" />
            <span>{property.bathrooms} baño</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRulerCombined className="text-blue-500" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
