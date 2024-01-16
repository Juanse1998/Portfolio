import { React } from "react";
import "./Education.css";

export default function Education() {
  return (
    <>
      <div className="education">
        <span className="titleEducation" id="education">
          Educación
        </span>
        <div className="school">
          <span className="nameSchool">Universidad Siglo XXI</span><span className="careerXXI">Licenciatura en informática</span>
          <a className="descriptionEducation">Actualmente me encuentro cursando la carrera de Licenciatura en informática en la Universidad Siglo XXI</a>
        </div>
        <div className="bootcamp">
            <span className="nameBootcamp">Soy Henry</span><span className="career">Fullstack developer</span>
        </div>
        <div>
          <a className="descriptionEducation">En el bootcamp de Soy Henry, me sumergí en un aprendizaje acelerado centrado en tecnologías clave para el desarrollo web. Me especialicé en HTML, CSS, y JavaScript para construir interfaces atractivas. Además, adquirí experiencia en React para crear aplicaciones interactivas y en Node.js para desarrollar servidores eficientes. También exploré TypeScript para mejorar la calidad de mis proyectos mediante el tipado estático. Esta experiencia integral me preparó para abordar desafíos en el desarrollo web con confianza y aplicar mis habilidades de manera efectiva en entornos profesionales. Estoy entusiasmado/a por seguir creciendo como desarrollador/a de software.</a>
        </div>
      </div>
    </>
  );
}
