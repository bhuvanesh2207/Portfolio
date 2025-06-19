import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'; // Also import Home
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
   return (
  <>
  < BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />

    </Routes>
  </BrowserRouter>
</>
);
}

export default App;
