import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "@/components/footer";
import NavBar from '@/components/navBar';
import Dashboard from '@/pages/Dashboard';
import Services from '@/pages/Services';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import AppDev from "@/pages/saberMas/App-Dev";
import GamesDev from "@/pages/saberMas/Games-Dev";
import SoftDev from "@/pages/saberMas/Soft-Dev";
import WebDev from "@/pages/saberMas/Web-Dev";

// Componente para redirigir si viene de una página rota
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedPath = params.keys().next().value;

    if (encodedPath && encodedPath.startsWith("/")) {
      navigate(encodedPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <RedirectHandler />
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/saber-mas/app-dev" element={<AppDev />} />
          <Route path="/saber-mas/games-dev" element={<GamesDev />} />
          <Route path="/saber-mas/soft-dev" element={<SoftDev />} />
          <Route path="/saber-mas/web-dev" element={<WebDev />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;