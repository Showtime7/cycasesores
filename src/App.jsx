import { Routes, Route } from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros"; // Si está en el mismo directorio que App.jsx
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Otras rutas irían aquí */}
      </Route>
    </Routes>
  );
}

export default App;
