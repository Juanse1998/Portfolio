import { React } from "react";
import "./Me.css";
import logo from "./logo.png"
import logo_two from "./logo_two.png"
import linkedin from "./linkedin.png"
import github from "./logotipo-de-github.png"
import wpp from "./wpp.png"




export default function Me() {
  return (
    <>
      <div class="me" id="contact">
        <div className="name">
          <span class="title">
            Juan Segundo Sosa
          </span>
          <div className="contSubtitle">
            <span class="subtitle">
              Full Stack Developer
            </span>
          </div>
          <div class="imagen-one">
            <img src={logo_two} alt="Logo" class="imagen-one"  />
          </div>
        </div>
          <img src={logo} alt="Logo" class="imagen-two"  />
        </div>
        <div className="contImagen">
          <a href="https://www.linkedin.com/in/juan-segundo-sosa-081a4a180/" target="_blank"><img src={linkedin} alt="Logo" class="linkedin" /></a>
          <a href="https://github.com/Juanse1998" target="_blank"><img src={github} alt="Logo" class="github" /></a>
          <a href="https://wa.link/zl8dhc" target="_blank"><img src={wpp} alt="Logo" class="wpp" /></a>
        </div>
    </>
  );

}
