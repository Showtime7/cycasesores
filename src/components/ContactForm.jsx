import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    consulta: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+569\d{8}$/;

    if (!formData.nombre.trim()) newErrors.nombre = "Nombre es requerido";
    if (!formData.apellido.trim()) newErrors.apellido = "Apellido es requerido";
    if (!emailRegex.test(formData.email)) newErrors.email = "Email no válido";
    if (!phoneRegex.test(formData.telefono)) {
      newErrors.telefono = "Teléfono debe ser +569XXXXXXXX";
    }
    if (!formData.consulta.trim()) newErrors.consulta = "Consulta es requerida";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Aquí iría la lógica para enviar el formulario
      console.log("Formulario enviado:", formData);
      setTimeout(() => {
        setIsSubmitting(false);
        alert("¡Gracias por contactarnos! Nos pondremos en contacto pronto.");
      }, 1500);
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-2xl">
      <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Déjanos tus datos y nos pondremos en contacto contigo
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Nombre *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.nombre
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="apellido"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Apellido *
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.apellido
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
            {errors.apellido && (
              <p className="mt-1 text-sm text-red-500">{errors.apellido}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Correo electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Teléfono de contacto *
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500">+569</span>
            </div>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="12345678"
              className={`w-full rounded-md border px-4 py-2 pl-16 focus:outline-none focus:ring-2 ${
                errors.telefono
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
          </div>
          {errors.telefono && (
            <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="consulta"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Tu consulta *
          </label>
          <textarea
            id="consulta"
            name="consulta"
            rows={4}
            value={formData.consulta}
            onChange={handleChange}
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 ${
              errors.consulta
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
          />
          {errors.consulta && (
            <p className="mt-1 text-sm text-red-500">{errors.consulta}</p>
          )}
        </div>

        <div className="text-center">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`rounded-md px-6 py-3 font-medium text-white shadow-md transition-colors ${
              isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
