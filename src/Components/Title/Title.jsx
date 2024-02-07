import { React } from "react";
import "./Title.css";
import logo from "./logo.png"
import logo_two from "./logo_two.png"
import linkedin from "./linkedin.png"
import github from "./logotipo-de-github.png"
import wpp from "./wpp.png"
import { Fade } from "react-awesome-reveal";
import cv from "./CVJuanSosa.pdf";

const handleDownload = () => {
  fetch(cv)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CV-Juan-Sosa.pdf'); // Nombre del archivo a descargar
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
};


export default function Title() {
  return (
    <>
      <div className="me" id="contact">
        <Fade direction="left" triggerOnce="true">
        <div className="name">
          <span className="titleApp">
            Juan Segundo Sosa
          </span>
          <div className="contSubtitle">
            <span className="subtitle">
              Full Stack Developer
            </span>
          </div>
          <div className="imagen-one">
            <img src={logo_two} alt="Logo" className="imagen-one"  />
          </div>
        </div>
        </Fade>
        <Fade direction="right" triggerOnce="true">
          <div className="redes">
            <img src={logo} alt="Logo" className="imagen-two"  />
          </div>
          <div className="contImagen">
            <a href="https://wa.link/zl8dhc" target="_blank" rel="noreferrer" ><img src={wpp} alt="Logo" className="wpp" /></a>
            <a href="https://www.linkedin.com/in/juan-segundo-sosa-081a4a180/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Logo" className="linkedin" /></a>
            <a href="https://github.com/Juanse1998" target="_blank" rel="noreferrer"><img src={github} alt="Logo" className="github" /></a>
          </div>
        </Fade>
        <div className="buttonCv">
          <button className="buttonDownload" onClick={handleDownload}>
            DESCARGAR CV
          </button>
        </div>
      </div>
    </>
  );

}
