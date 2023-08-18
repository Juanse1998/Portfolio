import { React } from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <span className="titleAbout">
        Sobre mi
      </span>
      <div className="about" id="about">
        <a>
          ¡Hola! Mi nombre es Juan Segundo Sosa, y soy un apasionado programador Full-Stack con una amplia experiencia en diversas tecnologías.
          Mi principal objetivo profesional es desarrollar soluciones innovadoras y eficientes para abordar los desafíos del mundo digital.
        </a>
      </div>
      <span className="titleAbout">
        Experiencia
      </span>
      <div className="experience" id="experience">
        <div className="companyContent">
          <a href="https://imajine.com" target="blanck" className="company">Imajine Studio-</a><a className="role">Fullstack developer:</a>
        </div>
        <div>
          <a className="description">Marzo 2021 - Junio 2021: Desarrollo de aplicaciones móviles utilizando React Native, Javascript y CSS.</a>
        </div>
      </div>
      <div className="companyContent">
          <a href="https://www.wisboo.com" target="blanck" className="company">Wisboo-</a><a className="role">Fullstack developer:</a>
      </div>
      <div>
        <a className="description">Junio 2021 - Abril 2022: Desarrollo de nuevas funcionalidades ymantenimiento de aplicación web tanto en frontend como en backend utilizando Ruby on Rails, AngularJs, Javascript.</a>
      </div>
      <div className="companyContent">
          <a href="https://www.wisboo.com" target="blanck" className="company">Wisboo- </a><a className="role">Frontend developer:</a>
      </div>
      <div>
        <a className="description">Abril 2022 - Junio 2023: Desarrolle nuevas funcionalidades y realice mantenimiento de las mismas utilizando AngularJs, Javascript, CSS y HTML. Participé en reuniones de planificación y seguimiento de proyectos para garantizar la entrega oportuna de las soluciones. También participé en revisiones de código y en la mejora continua de los procesos de desarrollo.</a>
      </div>
    </>
  );
}
