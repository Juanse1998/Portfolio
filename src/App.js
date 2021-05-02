import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Project from "./Components/Projects/Project.jsx";
import Skills from "./Components/Skills/Skills.jsx";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Skills" component={Skills}  />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Projects" component={Project} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
