import { React } from "react";
import { Fade } from "react-awesome-reveal";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="comExperience">
      <div className="rectangleExperience">
        <h3 className="titleExperience">
          Experiencia
        </h3>
      </div>
      <div className="experience" id="experience">
        <div className="companyContent">
          <a href="https://imajine.com" target="blanck" className="company">Imajine Studio-</a><a className="role">Fullstack developer:</a>
        </div>
      </div>
      <Fade direction="down">
        <div className="contentCircle">
          <div  className="circleOne"></div>
          <h6 className="startImajine">Marzo 2021</h6>
          <div className="line">
          <div className="contentDescription">
            <p className="descriptionAbout">Desarrollo de aplicaciones móviles utilizando React Native, Javascript y CSS.</p>
          </div>
          <hr/>
          </div>
          <div className="circleTwo"></div>
          <h6 className="endImajine">Junio 2021</h6>
        </div>
      </Fade>
      <div className="companyContent">
          <a href="https://www.wisboo.com" target="blanck" className="company">Wisboo-</a><a className="role">Fullstack developer:</a>
      </div>
      <Fade direction="down">
        <div className="contentCircle">
          <h6 className="startImajine">Junio 2021</h6>
          <div className="circleOne"></div>
          <div className="line">
          <div className="contentDescription">
          <p className="descriptionAbout">Desarrollo de nuevas funcionalidades y mantenimiento de aplicación web tanto en frontend como en backend utilizando Ruby on Rails, AngularJs, Javascript.</p>
          </div>
          <hr className="lineTwo"/>
          </div>
          <div className="circleEndWisboo"></div>
          <h6 className="endWisboo">Abril 2022</h6>
        </div>
      </Fade>
      <div className="companyContent">
          <a href="https://www.wisboo.com" target="blanck" className="company">Wisboo-</a><a className="role">Frontend developer:</a>
      </div>
      <Fade direction="down">
      <div className="contentCircle">
          <h6 className="startImajine">Abril 2022</h6>
          <div className="circleOne"></div>
          <div className="line">
          <div className="contentDescription">
          <p className="descriptionAbout">Desarrolle nuevas funcionalidades y realice mantenimiento de las mismas utilizando AngularJs, Javascript, CSS y HTML. Participé en reuniones de planificación y seguimiento de proyectos para garantizar la entrega oportuna de las soluciones. También participé en revisiones de código y en la mejora continua de los procesos de desarrollo.</p>
          </div>
          <hr className="lineThree"/>
          </div>
          <div className="circleEndWisbooTwo"></div>
          <h6 className="endWisbooTwo">Junio 2023</h6>
        </div>
      </Fade>
      </div>
    </>
  );
}
