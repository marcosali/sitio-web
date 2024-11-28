import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nabvar";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import AcercaDe from "./components/AcercaDe";
import Historia from "./components/Historia";
import Footer from "./components/Footer";
import Educacion from "./components/Educacion";
import Inspiracion from "./components/Inspiracion";
function App() {
  return (
    <NextUIProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <Router>
        {/* Este bloque de código es fijo en todas las páginas */}
        <Header />
        <Inicio />
        <Navbar /> 


        {/* El contenido que cambia dependiendo de la ruta */}
        <Routes>
          <Route path="/" element={<Historia />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/Inspiración" element={<Inspiracion />} />
        </Routes>
      </Router>
      <Footer/>
      </div>
    </NextUIProvider>
  );
}

export default App;
