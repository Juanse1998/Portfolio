import { React } from "react";
import Contact from "../Contact/Contact.jsx";
import "./NavBar.css";

export default function Navbar() {
  return (
    <div class="navBar">
        <div class="navLink">
          <a class="textNavbar" href="/">
             Sobre mi
          </a>
        </div>
        <div class="navLink">
          <a class="textNavbar" href="#skills">
             Habilidades
          </a>
        </div>
        <div class="navLink">
          <a class="textNavbar" href="#projects">
            Proyectos
          </a>
        </div>
        <Contact/>
    </div>
  );
}
