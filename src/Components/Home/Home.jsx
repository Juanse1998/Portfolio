import { React } from "react";
import Project from "../Projects/Project.jsx";
import Skills from "../Skills/Skills.jsx";
import ContactForm from "../Contact-form/ContactForm.jsx"
import Title from "../Title/Title.jsx";
import Me from "../Me/Me.jsx";
import "./Home.css";
import Experience from "../Experience/Experience.jsx";
import Education from "../Education/Education.jsx";

export default function Home() {
  return (
    <>
      <div className="container">
        <Title />
        <Me />
        <Education />
        <Experience />
        <Skills />
        <Project />
        {/* <ContactForm /> */}
      </div>
    </>
  );
}
