import React from "react"//optional
import { Link } from "react-router-dom";
import NavbarLogo from "../Assets/img/logo.webp"
import "./Navbar.css"
import { useState } from "react";
import HumIcon from "../Assets/img/hamburger-01.png"
import HamClose from "../Assets/img/hamburger_closed.png"
function NavbarSmallScreen(){
  const [show,setShow]=useState(false);
  if(show){
  return (
    <nav className="nav-content small"> 
      <div className="flexbox-logo"> 
         <img className="frontdeskdesigns" src={NavbarLogo} />
          <img onClick={()=>{
                setShow(false)
            }}  style={{width:45}} src={HamClose} />
      </div>
     
      <ul className="nav-links"> {/*flex*/}
        <li><Link onClick={()=>{
                setShow(false)
            }}  to="/portfolio">PORTFOLIO</Link></li>
        <li><Link onClick={()=>{
                setShow(false)
            }}  to="/bio">BIO</Link></li>
        <li><Link onClick={()=>{
                setShow(false)
            }}  to="/contact">CONTACT</Link></li>
        <li><Link onClick={()=>{
                setShow(false)
            }}  to="/printing">PRINTING</Link></li>
      </ul>
   
  </nav>
  )
  }else{
    return <nav  className="nav-content small" style={{height:100}}>
          <div className="flexbox-logo"> 
            <img className="frontdeskdesigns" src={NavbarLogo} />
            <img onClick={()=>{
                setShow(true)
            }}  style={{width:45}} src={HumIcon} />
          </div>
          
    </nav>

  }
}

export default NavbarSmallScreen;