import { React, useState  } from "react";
import te from "./te.png";
import te2 from "./te-3.png";
import te3 from "./te-3.png";
import videogames1 from "./videogames1.png";
import videogames2 from "./videogames2.png";
import videogames3 from "./videogames3.png";
import videogames4 from "./videogames4.png";
import watherApp1 from "./watherApp1.png";
import watherApp2 from "./watherApp2.png";
import logoGit from "../Title/logotipo-de-github.png";

import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const styles = {
  imgStyle: {
    borderRadius: '20px',
  }
}

export default function Project() {
  return (
    <>
      <div id="projects" className="containerProject">
        <div className="contTitle">
          <span>Mis Proyectos</span>
        </div>
        <div className="containerProjects">
          <div className="projectCard">
            <h2 className="titleProject">Té quiero Eccomerce</h2>
            <p className="descriptionProject">Este proyecto de Eccomerce fue desarrollado en equipo como proyecto final de un curso. 
              Para su implementación, utilizamos tecnologías de vanguardia, incluyendo React para la interfaz de usuario, Node.js para el backend y CSS para el diseño y estilos.</p>

            <Carousel id="carousel" width={'75%'} >
              <div>
                  <img src={te}  style={styles.imgStyle}/>
              </div>
              <div>
                  <img src={te2} style={styles.imgStyle} />
              </div>
              <div>
                  <img src={te3} style={styles.imgStyle} />
              </div>
              {/* <div>
                <video>
                  <source src="https://www.youtube.com/watch?v=_fODiUkYBaI"/>
                </video>
              </div> */}
            </Carousel>
            <div className="titleTechnologies">
              <span>TECNOLOGIAS UTILIZADAS</span>
            </div>
            <div className="containerTechnologies">
              <div className="technologies">
                <span>Javascript</span>
              </div>
              <div className="technologies">
                <span>React</span>
              </div>
              <div className="technologies">
                <span>CSS</span>
              </div>
              <div className="technologies">
                <span>NodeJs</span>
              </div>
              <div className="technologies">
                <span>PostgreSQL</span>
              </div>
              <div className="technologies">
                <span>HTML</span>
              </div>
            </div>
            <div className="contentLogoGit">
              <a href="https://github.com/Juanse1998/Ecommerce" target="_blank" rel="noreferrer"><img src={logoGit} alt="Logo" className="gitHubClass" /></a>
            </div>
          </div>
          <div className="projectCard">
            <h2 className="titleProject">Weather App</h2>
            <a className="descriptionProject">Una aplicación que te permite consultar el pronóstico del tiempo de cualquier ciudad, desarrollada utilizando las tecnologías de React, Node.js y CSS.</a>
            <Carousel width={'75%'}>
              <div>
                  <img src={watherApp1} style={styles.imgStyle}/>
              </div>
              <div>
                  <img src={watherApp2} style={styles.imgStyle}/>
              </div>
              {/* <div>
                  <img src={} />
              </div> */}
            </Carousel>
            <div className="titleTechnologies">
              <span>TECNOLOGIAS UTILIZADAS</span>
            </div>
            <div className="containerTechnologies">
              <div className="technologies">
                <span>Javascript</span>
              </div>
              <div className="technologies">
                <span>React</span>
              </div>
              <div className="technologies">
                <span>CSS</span>
              </div>
              <div className="technologies">
                <span>HTML</span>
              </div>
            </div>
            <div className="contentLogoGit">
              <a href="https://github.com/Juanse1998/AppClima" target="_blank" rel="noreferrer"><img src={logoGit} alt="Logo" className="gitHubClass" /></a>
            </div>

          </div>
          {/* <h2 className="titleProject">Notification UNRC</h2>
          <Carousel>
            <div>
              <img src={te} />
            </div>
            <div>
              <img src={te2} />
            </div>
            <div>
              <img src={te3} />
            </div>
          </Carousel> */}
          <div className="projectCard">
            <h2 className="titleProject">Videogames App</h2>
            <a className="descriptionProject">Una aplicación dedicada a videojuegos que te permite buscar, agregar y destacar tus juegos favoritos. Fue desarrollada utilizando las tecnologías de React, Node.js y CSS.</a>
            <Carousel width={'75%'}>
              <div>
                <img className="img1" id="img1" src={videogames1} style={styles.imgStyle}/>
              </div>
              <div>
                <img src={videogames2} style={styles.imgStyle} />
              </div>
              <div>
                <img src={videogames3} style={styles.imgStyle} />
              </div>
              <div>
                <img src={videogames4} style={styles.imgStyle} />
              </div>
            </Carousel>
            <div className="titleTechnologies">
              <span>TECNOLOGIAS UTILIZADAS</span>
            </div>
            <div className="containerTechnologies">
              <div className="technologies">
                <span>Javascript</span>
              </div>
              <div className="technologies">
                <span>React</span>
              </div>
              <div className="technologies">
                <span>CSS</span>
              </div>
              <div className="technologies">
                <span>HTML</span>
              </div>
            </div>
            <div className="contentLogoGit">
              <a href="https://github.com/Juanse1998/VideoGamesApp" target="_blank" rel="noreferrer"><img src={logoGit} alt="Logo" className="gitHubClass" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
