import { React } from "react";
import Contact from "../Contact/Contact.jsx";
import "./NavBar.css";

export default function Navbar() {
  return (
    <div>
    <i class="fas fa-bars"></i>
    <i class="fas fa-times"></i>
    <nav class="navBar">
        <div class="navLink">
          <ul class="textNavbar" href="/">
             Sobre mi
          </ul>
        </div>
        <div class="navLink">
          <ul class="textNavbar" href="#skills">
             Habilidades
          </ul>
        </div>
        <div class="navLink">
          <ul class="textNavbar" href="#projects">
            Proyectos
          </ul>
        </div>
        <Contact/>
    </nav>

    </div>
  );
}
