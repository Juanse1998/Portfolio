import  React, { useState, useEffect } from "react";
import endpoints from '../../Constants/endpoints';
import "./NavBar.css";

export default function Navbar() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    // Función para cargar los datos usando fetch
    async function fetchData() {
      try {
        const response = await fetch(endpoints.images); // Obtiene la ruta del archivo JSON desde endpoints.json
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON.');
        }
        const jsonData = await response.json();
        setData(jsonData.images); // Establece los datos en el estado 'data'
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }
    // Llama a la función para cargar los datos cuando el componente se monta
    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };


  
  return (
    <div className="navBar">
      <div className="logoJsNav">
        <img src={data.imageLogoJs2} alt="Logo" className="imageLogo"/>
      </div>
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
    </div>
  );
};  