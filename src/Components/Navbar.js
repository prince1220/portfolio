import React from "react"//optional
import { Link } from "react-router-dom";
import NavbarLogo from "../Assets/img/logo.webp"
import "./Navbar.css"

function Navbar(){

  return (
    <nav className="nav-content"> {/*flex*/}
      <div className="flexbox-logo"> 
         <img className="frontdeskdesigns" src={NavbarLogo} />
      </div>
   
      <ul className="nav-links"> {/*flex*/}
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/bio">BIO</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/printing">PRINTING</Link></li>
      </ul>
   
  </nav>
  )

}

export default Navbar;