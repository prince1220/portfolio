import logo from './logo.svg';
import './App.css';
import ContactUs from './Components/Contactus';
import DesignsList from './Components/DesignsList';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bio from './Pages/Bio';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Printing from './Pages/Printing';
import Portfolio from './Pages/Portfolio';
import Project from './Pages/Project';
import NavbarDesktop from './Components/NavbarDesktop';
import NavbarSmallScreen from './Components/NavbarSmallScreen';
function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
 <NavbarDesktop />
 <NavbarSmallScreen />

      <Routes>
          <Route path="/" element={<Portfolio/>} />
          <Route path="/portfolio" element={<Portfolio/> } />
          <Route path="/bio" element={<Bio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/printing" element={<Printing/>} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
    
   
  <Footer />
</BrowserRouter>

    </div>
  );
}
///library  => translate again to html,css and javascript
export default App;
