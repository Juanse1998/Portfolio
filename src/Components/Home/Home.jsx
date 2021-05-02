import { React } from "react";
import { Title } from "./Home.js";
import Navbar from "../NavBar/Navbar";
import About from "../About/About.jsx";
import "./Home.css";
import logo2 from "./logo2.jpg"; // with import

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="line"></div>

      <div className="container">
        <div class="title">
          <h2>Software Developer</h2>
        </div>
        {/* <Title>Bienvenidos a mi portfolio</Title> */}
        <div className="me">
          <img src={logo2} alt="foto perfil" />
          <p>
            Hi, my name is <b>Juan</b>, I'm Software developer. Feel free to
            take a look at my projects on the web portfolio page.
          </p>
        </div>
      </div>
      <div>
        <About />
      </div>
    </>
  );
}
