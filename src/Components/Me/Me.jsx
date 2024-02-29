import { React, useState, useEffect } from "react";
import endpoints from '../../Constants/endpoints';
import "./Me.css";

export default function Me() {

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
      {data && (
        <div className="presentation">
          <div className="contentTitleMe">
            <h3 id="about" className="titleMe">
              Sobre mi
            </h3>
          </div>
          <div className="meProfile">
            <div className="imageMe">
              <img src={data.imageJuan} alt="" className="imageProfile"/>
            </div>
            <div className="about">
              <p>
              ¡Hola! Soy Juan Segundo Sosa, un apasionado Frontend Developer con experiencia en una variedad de tecnologías modernas para el desarrollo web y móvil. 
              Con un enfoque particular en React, Angular y React Native, he estado creando experiencias de usuario dinámicas y atractivas para proyectos diversos.
              También cuento con experiencia en el desarrollo del lado del servidor utilizando tecnologías como Ruby on Rails y Node.js. Esto me permite construir sistemas
              robustos y escalables que satisfacen las necesidades tanto del frontend como del backend de una aplicación.
              Siempre busco desafíos que me permitan crecer como desarrollador y contribuir de manera significativa al mundo del desarrollo de software.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
