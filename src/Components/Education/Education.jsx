import { React } from "react";
import "./Education.css";

export default function Education() {
  return (
    <>
      <div className="education">
        <div className="rectangleEducation">
          <span className="titleEducation" id="education">
            Educación
          </span>
        </div>
        <div className="school">
          <span className="nameSchool">Universidad Siglo XXI</span><span className="careerXXI">Licenciatura en informática</span>
          <a className="descriptionEducation">Actualmente me encuentro cursando la carrera de Licenciatura en informática en la Universidad Siglo XXI</a>
        </div>
        <div className="bootcamp">
            <span className="nameBootcamp">Soy Henry</span><span className="career">Fullstack developer</span>
        </div>
        <div>
          <a className="descriptionEducation">Junio 2021 - Abril 2022: Desarrollo de nuevas funcionalidades y mantenimiento de aplicación web tanto en frontend como en backend utilizando Ruby on Rails, AngularJs, Javascript.</a>
        </div>
      </div>
    </>
  );
}
