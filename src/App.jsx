import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'; // Also import Home
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
   return (
  <>
  < BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
</>
);
}

export default App;
