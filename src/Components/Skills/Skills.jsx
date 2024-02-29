import {React, useState, useEffect} from 'react';
import endpoints from '../../Constants/endpoints';

import "./Skills.css";

export default function Skills() {

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
    <div className="contSkills" id="skills">
      <div className="containerTitle">
          <span>Skills</span>
      </div>
      <div className="containerSkills">
        <div className="item" href="">
          <a title="React" href="https://es.reactjs.org" target="blanck">
            <img
              className="logos"
              src={data.imageReact}
              alt="logo react"
              style={{
                width: '50px',
                height: '50px',
                }}
            />
            <div className="tech-name">
              <i> ReactJS </i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="React-Native" href="https://reactnative.dev" target="blanck">
            <img
              className="logos"
              src={data.imageReactNative}
              alt="logo react"
            />
            <div className="tech-name">
              <i> React Native </i>
            </div>
          </a>
        </div>
        <div className="item">
           <a title="CSS" href="https://developer.mozilla.org/es/docs/Web/CSS" target="blanck">
            <img
              className="logos"
              src={data.imageCss}
              alt="logo react"
            />
            <div className="tech-name">
              <i>CSS</i>
            </div>
          </a>
        </div>
          <div className="item">
            <a title="SQL" href="https://dev.mysql.com/doc/" target="blanck">
              <img
                className="logos"
                src={data.imageSql}
                alt="logo react"
                style={{
                  width: "50px",

                }}
              />
              <div className="tech-name">
                <i>SQL</i>
              </div>
            </a>
        </div>
        <div className="item">
          <a title="Docker" href="https://hub.docker.com/_/docker-docs" target="blanck">
            <img
              className="logos"
              src={data.imageDocker}
              alt="logo react"
            />
            <div className="tech-name">
              <i>Docker</i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="GitHub" href="https://github.com" target="blanck">
            <img
              className="logos"
              src={data.imageGitHub}
              alt="logo react"
            />
            <div className="tech-name">
              <i>Github</i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="GitHub" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="blanck">
            <img
              className="logos"
              src={data.imageHtml}
              alt="logo react"
            />
            <div className="tech-name">
              <i>HTML</i>
            </div>
          </a>
        </div>
        {/* <div className="item">
          <a title="Java" href="https://dev.java/learn/" target="blanck">
            <img
              className="logos"
              src={java}
              alt="logo react"
            />
            <div className="tech-name">
              <i>Java</i>
            </div>
          </a>
        </div> */}
        {/* <div className="item">
          <a title="MySql" href="https://www.mysql.com" target="blanck">
            <img
              className="logos"
              src={mysql}
              alt="logo react"
            />
            <div className="tech-name">
              <i>MySql</i>
            </div>
          </a>
        </div> */}
        {/* <div className="item">
          <a title="Postman" href="https://www.postman.com" target="blanck">
            <img
              className="logos"
              src={postman}
              alt="logo react"
            />
            <div className="tech-name">
              <i>Postman</i>
            </div>
          </a>
        </div> */}
        <div className="item">
          <a title="Sequelize" href="https://sequelize.org" target="blanck">
            <img
              className="logos"
              src={data.imageSequelize}
              alt="logo react"
            />
            <div className="tech-name">
              <i>Sequelize</i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="NodeJs" href="https://nodejs.org/en/docs/" target="blanck">
            <img
              className="logos"
              src={data.imageNode}
              alt="logo node js"
            />
            <div className="tech-name">
              <i>Node Js</i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="Angular" href="https://angular.io/docs" target="blanck">
            <img
              className="logos"
              src={data.imageAngular}
              alt="logo angular"
            />
            <div className="tech-name">
              <i>Angular</i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="AngularJs" href="https://docs.angularjs.org/guide" target="blanck">
            <img
              className="logos"
              src={data.imageAngularJs}
              alt="logo angularjs"
            />
            <div className="tech-name">
              <i>AngularJs</i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="RoR" href="https://guides.rubyonrails.org" target="blanck">
            <img
              className="logos"
              src={data.imageRuby}
              alt="logo RoR"
            />
            <div className="tech-name">
              <i>Ruby on Rails</i>
            </div>
          </a>
        </div>
      </div>
    </div>

    </>
  );
}
