import { React } from "react";
import Navbar from "../NavBar/Navbar";
import Contact from "../Contact/Contact.jsx";
import Project from "../Projects/Project.jsx";
import Skills from "../Skills/Skills.jsx";
import About from "../About/About.jsx";
import ContactForm from "../Contact-form/ContactForm.jsx"
import Me from "../Me/Me.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <Me />
        <Skills />
        <Project />
        <ContactForm />
        {/* <div>
          <About />
        </div> */}
      </div>
    </>
  );
}
