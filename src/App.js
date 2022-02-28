import "./App.css";
import React from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Project from "./Components/Projects/Project.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Link path="/" component={Home} exact />
          <Link path="/Habilidades" component={Skills} exact />
          <Link path="/Contacto" component={Contact} />
          <Link path="/Proyectos" component={Project} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
