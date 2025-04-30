
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/saber-mas/AppDev" element={<AppDev />} />
          <Route path="/saber-mas/GamesDev" element={<GamesDev />} />
          <Route path="/saber-mas/SoftDev" element={<SoftDev />} />
          <Route path="/saber-mas/WebDev" element={<WebDev />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;