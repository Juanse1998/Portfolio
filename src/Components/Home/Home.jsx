import { React } from "react";
import Navbar from "../NavBar/Navbar";
import Contact from "../Contact/Contact.jsx";
import Project from "../Projects/Project.jsx";
import Skills from "../Skills/Skills.jsx";
import About from "../About/About.jsx";
import Me from "../Me/Me.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div class="lineColor"></div>
        <Me />
        {/* <Title>Bienvenidos a mi portfolio</Title> */}
        {/* <div className="me">
          <img src={logo2} alt="foto perfil" />
          <p>
            Hi, my name is <b>Juan</b>, I'm Software developer. Feel free to
            take a look at my projects on the web portfolio page.
          </p>
        </div> */}
        <Skills />
        <Project />
        <Contact />
        {/* <div>
          <About />
        </div> */}
      </div>
    </>
  );
}
