import  React, { useState } from "react";
import "./NavBar.css";

export default function Navbar() {

  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
  
  return (
    <div className="menu-container">
      <div className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`} onClick={toggleMenu}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>
      <div className={`menu ${menuAbierto ? 'abierto' : ''}`}>
        <ul>
          <li><a className="textNavBar" href="#about">Sobre mi</a></li>
          <li><a className="textNavBar" href="#educationTwo">Educación</a></li>
          <li><a className="textNavBar" href="#experience">Experiencia</a></li>
          <li><a className="textNavBar" href="#skills">Skills</a></li>
          <li><a className="textNavBar" href="#contact">Contactame</a></li>
        </ul>
      </div>
    </div>
  );
};  