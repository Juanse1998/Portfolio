import "./App.css";
import React from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
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
          <Link path="/habilidades" component={Skills} exact />
          <Link path="/proyectos" component={Project} exact />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
