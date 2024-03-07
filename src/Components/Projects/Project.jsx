import { React, useState, useEffect } from "react";
import endpoints from '../../Constants/endpoints';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Project.css";


const styles = {
  imgStyle: {
    width: '320px',
    borderRadius: '20px',
    border: '3px solid'
  }
}

export default function Project() {

  const [data, setData] = useState([])

	useEffect(() => {
		// Función para cargar los datos usando fetch
		async function fetchData() {
			try {
				const response = await fetch(endpoints.images); // Obtiene la ruta del archivo JSON desde endpoints.json
				if (!response.ok) {
					throw new Error('No se pudo cargar el archivo JSON.');
				}
				const jsonData = await response.json();
				setData(jsonData.images); // Establece los datos en el estado 'data'
			} catch (error) {
				console.error('Error al cargar los datos:', error);
			}
		}
		// Llama a la función para cargar los datos cuando el componente se monta
		fetchData();
	}, []);

  return (
    <>
      {data &&(
        <div id="projects" className="containerProject">
          <div className="contTitle">
            <span>Mis Proyectos</span>
          </div>
          <div className="containerProjects">

            <div className="contentCard">
              <div className="projectCard">
                <img src={data.imageTe}  style={styles.imgStyle}/>
                <h2 className="titleProject">Té quiero Eccomerce</h2>
                <div className="contentDescription">
                  <p className="descriptionProject">Este proyecto de Eccomerce fue desarrollado en equipo como proyecto final de un curso. 
                    Para su implementación, utilizamos tecnologías de vanguardia, incluyendo React para la interfaz de usuario, Node.js para el backend y CSS para el diseño y estilos.</p>
                </div>

                <div className="titleTechnologies">
                  <span>TECNOLOGIAS UTILIZADAS</span>
                </div>
                <div className="containerTechnologies">
                  <div className="todasLas">
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
                </div>
                <div className="contentLogoGit">
                  <a href="https://github.com/Juanse1998/Ecommerce" target="_blank" rel="noreferrer"><img src={data.imageGitHub} alt="Logo" className="gitHubClass" /></a>
                </div>
              </div>
            </div>

            <div className="contentCard">
              <div className="projectCard">
                <img src={data.imageWatherApp1} style={styles.imgStyle}/>
                <h2 className="titleProject">Weather App</h2>
                <div className="contentDescription">
                  <p className="descriptionProject">Una aplicación que te permite consultar el pronóstico del tiempo de cualquier ciudad, desarrollada utilizando las tecnologías de React, Node.js y CSS.</p>
                </div>
                <div className="titleTechnologies">
                  <span>TECNOLOGIAS UTILIZADAS</span>
                </div>
                <div className="containerTechnologies">
                  <div className="todasLas">
                    <div className="technologies">
                      <span>Nodejs</span>
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
                </div>
                <div className="contentLogoGit">
                  <a href="https://github.com/Juanse1998/AppClima" target="_blank" rel="noreferrer"><img src={data.imageGitHub} alt="Logo" className="gitHubClass" /></a>
                </div>

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
            <div className="contentCard">
              <div className="projectCard">
                <img className="img1" id="img1" src={data.imageVideogames2} style={styles.imgStyle}/>
                <h2 className="titleProject">Videogames App</h2>
                <div className="contentDescription">
                  <p className="descriptionProject">Una aplicación dedicada a videojuegos que te permite buscar, agregar y destacar tus juegos favoritos. Fue desarrollada utilizando las tecnologías de React, Node.js y CSS.</p>
                </div>
                {/* <Carousel width={'75%'}>
                  <div>
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
                </Carousel> */}
                <div className="titleTechnologies">
                  <span>TECNOLOGIAS UTILIZADAS</span>
                </div>
                <div className="containerTechnologies">
                  <div className="todasLas">
                    <div className="technologies">
                      <span>Nodejs</span>
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
                </div>
                <div className="contentLogoGit">
                  <a href="https://github.com/Juanse1998/VideoGamesApp" target="_blank" rel="noreferrer"><img src={data.imageGitHub} alt="Logo" className="gitHubClass" /></a>
                </div>
              </div>
            </div>

            <div className="contentCard">
              <div className="projectCard">
                <img src={data.imagePortfolio}  style={styles.imgStyle}/>
                <h2 className="titleProject">Portfolio personal</h2>
                <div className="contentDescription">
                  <p className="descriptionProject">He creado un portfolio personal que refleja mi identidad y creatividad.</p>
                </div>

                <div className="titleTechnologies">
                  <span>TECNOLOGIAS UTILIZADAS</span>
                </div>
                <div className="containerTechnologies">
                  <div className="todasLas">
                    <div className="technologies">
                      <span>React</span>
                    </div>
                    <div className="technologies">
                      <span>CSS</span>
                    </div>
                  </div>
                </div>
                <div className="contentLogoGit">
                  <a href="https://github.com/Juanse1998/Ecommerce" target="_blank" rel="noreferrer"><img src={data.imageGitHub} alt="Logo" className="gitHubClass" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
