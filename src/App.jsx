import { Routes, Route } from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import AsesoriaLegal from "./Pages/AsesoriaLegal";
import AsesoriaInversiones from "./Pages/AsesoriaInversiones";
import Propiedades from "./Pages/Propiedades";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/asesoria-legal" element={<AsesoriaLegal />} />
        <Route path="/asesoria-inversiones" element={<AsesoriaInversiones />} />
        <Route path="/propiedades" element={<Propiedades />} />
        {/* Otras rutas irían aquí */}
      </Route>
    </Routes>
  );
}

export default App;
