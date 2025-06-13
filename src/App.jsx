import { Routes, Route } from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        {/* Otras rutas irían aquí */}
      </Route>
    </Routes>
  );
}

export default App;
