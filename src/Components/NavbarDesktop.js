import React from "react"; //optional
import { Link } from "react-router-dom";
import NavbarLogo from "../Assets/img/logo.webp";
import "./Navbar.css";

function NavbarDesktop() {
  return (
    <nav className="nav-content desktop" style={{ height: 100 }}> {/* flex */}
      <div className="flexbox-logo">
        {/* Wrap the logo image in a Link */}
        <Link to="/portfolio">
          <img className="frontdeskdesigns" src={NavbarLogo} alt="Navbar Logo" />
        </Link>
      </div>
   
      <ul className="nav-links"> {/* flex */}
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/bio">BIO</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/printing">PRINTING</Link></li>
      </ul>
    </nav>
  );
}

export default NavbarDesktop;
