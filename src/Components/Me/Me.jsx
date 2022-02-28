import { React } from "react";
import "./Me.css";
import logo from "./logo.png"
import logo_two from "./logo_two.png"


export default function Me() {
  return (
    <>
      <div class="me" id="contact">
        <span class="title">
          Juan Segundo Sosa
        </span>
        <span class="subtitle">
          Full Stack Developer
        </span>
       <div class="imagen-one-div">
          <img src={logo_two} alt="Logo" class="imagen-one"  />
       </div>
      </div>
      <div class="imagen-two-div">
       <img src={logo} alt="Logo" class="imagen-two"  />
      </div>
    </>
  );
}
