import { React } from "react";
import { NavLink } from "react-router-dom";
import Contact from "../Contact/Contact.jsx";
import "./NavBar.css";

export default function Navbar() {
  return (
    <div class="navBar">
        <NavLink class="navLink" exact to="/">
          <span class="textNavbar">
             Sobre mi
          </span>
        </NavLink>
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
