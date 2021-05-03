import { React } from "react";
import Navbar from "../NavBar/Navbar";
import { Titleapp, Container } from "./Project.js";
import About from "../About/About.jsx";
import Skills from "../Skills/Skills";

import "./Project.css";
export default function Project() {
  return (
    <>
      <Navbar />
      <div className="line"></div>

      <div class="title">
        <h2>Tecnologiass</h2>
      </div>

      <Skills />

      <div class="title">
        <h2>Mis Proyectos</h2>
      </div>
      <Container>
        <div className="card">
          <div className="nameApp">
            <Titleapp>Ecommerce</Titleapp>
          </div>
        </div>
        <div className="card">
          <div className="nameApp">
            <Titleapp>Notifications UNRC</Titleapp>
          </div>
        </div>
        <div className="card">
          <div className="nameApp">
            <Titleapp>WeatherApp</Titleapp>
          </div>
        </div>
        <div className="card">
          <div className="nameApp">
            <Titleapp>VideoGamesApp</Titleapp>
          </div>
        </div>
      </Container>
      <div>
        <About />
      </div>
    </>
  );
}
