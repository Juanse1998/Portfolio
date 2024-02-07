import { React } from "react";
import image from "./juanse.png"
import "./Me.css";

export default function Me() {
  return (
    <>
    <div className="presentation">
      <h3 id="about" className="titleMe">
        Sobre mi
      </h3>
      <div className="meProfile">
        <div className="imageMe">
          <img src={image} alt="" className="imageProfile"/>
        </div>
        <div className="about">
          <p>
          ¡Hola! Soy Juan Segundo Sosa, un apasionado Frontend Developer con experiencia en una variedad de tecnologías modernas para el desarrollo web y móvil. 
          Con un enfoque particular en React, Angular y React Native, he estado creando experiencias de usuario dinámicas y atractivas para proyectos diversos.
          También cuento con experiencia en el desarrollo del lado del servidor utilizando tecnologías como Ruby on Rails y Node.js. Esto me permite construir sistemas
          robustos y escalables que satisfacen las necesidades tanto del frontend como del backend de una aplicación.
          Siempre busco desafíos que me permitan crecer como desarrollador y contribuir de manera significativa al mundo del desarrollo de software.
          </p>
        </div>
      </div>
    </div>
  
    </>
  );
}
