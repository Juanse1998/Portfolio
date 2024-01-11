import { React } from "react";
import "./Education.css";

export default function Education() {
  return (
    <>
      <span className="titleEducation" id="education">
        Educación
      </span>
      <div className="xxi">
        <div className="educationContent">
          <span className="education">Universidad Siglo XXI-</span><span className="career">Licenciatura en informática</span>
        </div>
        <div>
          <a className="descriptionEducation">Actualmente me encuentro cursando la carrera de Licenciatura en informática en la Universidad Siglo XXI</a>
        </div>
      </div>
      <div className="henry">
          <span className="education">Soy Henry-</span><span className="career">Fullstack developer</span>
      </div>
      <div>
        <a className="descriptionEducation">Junio 2021 - Abril 2022: Desarrollo de nuevas funcionalidades ymantenimiento de aplicación web tanto en frontend como en backend utilizando Ruby on Rails, AngularJs, Javascript.</a>
      </div>
    </>
  );
}
