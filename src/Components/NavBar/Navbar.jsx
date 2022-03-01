import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import Contact from "../Contact/Contact.jsx";
import "./NavBar.css";

export default function Navbar() {
  return (
    <div class="navBar">
        <a class="navLink" href="/">
          <span class="textNavbar">
             Sobre mi
          </span>
        </a>
        <a class="navLink" href="#skills">
          <span class="textNavbar">
             Habilidades
          </span>
        </a>
        <a class="navLink" href="#projects">
          <span class="textNavbar">
            Proyectos
          </span>
        </a>
        <Contact/>
    </div>
  );
}
