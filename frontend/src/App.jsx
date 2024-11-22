import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "@/components/footer";
import NavBar from '@/components/navBar';
import Dashboard from '@/pages/Dashboard';
import Services from '@/pages/Services';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;