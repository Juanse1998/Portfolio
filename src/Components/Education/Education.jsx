import { React } from "react";
import "./Education.css";

export default function Education() {
  return (
    <>
      <span className="titleEducation">
        Educación
      </span>
      <div className="experience" id="experience">
        <div className="companyContent">
          <span className="company">Universidad Siglo XXI-</span><span className="role">Licenciatura en informática</span>
        </div>
        <div>
          <a className="description">Actualmente me encuentro cursando la carrera de Licenciatura en informática en la Universidad Siglo XXI</a>
        </div>
      </div>
      <div className="companyContent">
          <span className="company">Soy Henry-</span><span className="role">Fullstack developer</span>
      </div>
      <div>
        <a className="description">Junio 2021 - Abril 2022: Desarrollo de nuevas funcionalidades ymantenimiento de aplicación web tanto en frontend como en backend utilizando Ruby on Rails, AngularJs, Javascript.</a>
      </div>
    </>
  );
}
