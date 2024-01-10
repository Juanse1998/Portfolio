import { React } from "react";
import { Fade } from "react-awesome-reveal";
import "./About.css";

export default function About() {
  return (
    <>
    <Fade>
      <span className="titleAbout">
        Sobre mi
      </span>
      <div className="about" id="about">
        <p>
          ¡Hola! Mi nombre es Juan Segundo Sosa, y soy un apasionado programador Full-Stack con una amplia experiencia en diversas tecnologías.
          Mi principal objetivo profesional es desarrollar soluciones innovadoras y eficientes para abordar los desafíos del mundo digital.
        </p>
      </div>
      <span className="titleAbout">
        Experiencia
      </span>
      <div className="experience" id="experience">
        <div className="companyContent">
          <a href="https://imajine.com" target="blanck" className="company">Imajine Studio-</a><a className="role">Fullstack developer:</a>
        </div>
        <div className="contentDescription">
          <p className="description">Marzo 2021 - Junio 2021: Desarrollo de aplicaciones móviles utilizando React Native, Javascript y CSS.</p>
        </div>
      </div>
      <Fade direction="down">
      <div className="contentCircle">
        <div  className="circleOne"></div>
        <div className="line">
          <hr/>
        </div>
        <div className="circleTwo"></div>
      </div>
      </Fade>
      <div className="companyContent">
          <a href="https://www.wisboo.com" target="blanck" className="company">Wisboo-</a><a className="role">Fullstack developer:</a>
      </div>
      <div className="contentDescription">
        <p className="description"> Junio 2021 - Abril 2022: Desarrollo de nuevas funcionalidades y mantenimiento de aplicación web tanto en frontend como en backend utilizando Ruby on Rails, AngularJs, Javascript.</p>
      </div>
      <div className="contentCircle">
        <div  className="circleOne"></div>
        <div className="line">
          <hr/>
        </div>
        <div className="circleTwo"></div>
      </div>
      <div className="companyContent">
          <a href="https://www.wisboo.com" target="blanck" className="company">Wisboo- </a><a className="role">Frontend developer:</a>
      </div>
      <div className="contentDescription"> 
        <p className="description"> Abril 2022 - Junio 2023: Desarrolle nuevas funcionalidades y realice mantenimiento de las mismas utilizando AngularJs, Javascript, CSS y HTML. Participé en reuniones de planificación y seguimiento de proyectos para garantizar la entrega oportuna de las soluciones. También participé en revisiones de código y en la mejora continua de los procesos de desarrollo.</p>
      </div>
    </Fade>
    </>
  );
}
