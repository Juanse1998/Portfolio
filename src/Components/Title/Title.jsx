import { React, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import endpoints from '../../Constants/endpoints';
import Navbar from '../NavBar/Navbar.jsx';
import "./Title.css";

export default function Title() {
  const [data, setData] = useState([]);
  const [dataPdf, setDataPdf] = useState([]);

  useEffect(() => {
    // Función para cargar los datos usando fetch
    async function fetchData() {
      try {
        const response = await fetch(endpoints.images); // Obtiene la ruta del archivo JSON desde endpoints.json
        const responsePdf = await fetch(endpoints.pdf); // Obtiene la ruta del archivo JSON desde endpoints.json
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON.');
        }
        const jsonData = await response.json();
        const jsonDataPdf = await responsePdf.json();
        setData(jsonData.images); // Establece los datos en el estado 'data'
        setDataPdf(jsonDataPdf.pdf);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }
    // Llama a la función para cargar los datos cuando el componente se monta
    fetchData();
  }, []);

  const handleDownload = () => {
    fetch(dataPdf.cv)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'CV-Juan-Sosa.pdf'); // Nombre del archivo a descargar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <>
      {data && (
        <div className="me" id="contact">
          <Navbar />
          <div className="titles">
            <div className="name">
              <Fade direction="left" triggerOnce="true">
                <span className="titleApp">
                  Juan Segundo Sosa
                </span>
                <div className="contSubtitle">
                  <span className="subtitle">
                    Fullstack Developer
                  </span>
                </div>
                <div className="imagen-one">
                  <img src={data.imagePersonTitle} alt="Logo" className="imagen-one"  />
                </div>
              </Fade>
            </div>
            <div className="redes">
              <Fade direction="right" triggerOnce="true">
                <div className="imagenPc">
                  <img src={data.imagePcTitle} alt="Logo" className="imagen-two"  />
                </div>
                <div className="contImagen">
                  <a href="https://wa.link/zl8dhc" target="_blank" rel="noreferrer" ><img src={data.imageWpp} alt="Logo" className="wpp" /></a>
                  <a href="https://www.linkedin.com/in/juan-segundo-sosa-081a4a180/" target="_blank" rel="noreferrer"><img src={data.imageLinkedin} alt="Logo" className="linkedin" /></a> 
                  <a href="https://github.com/Juanse1998" target="_blank" rel="noreferrer"><img src={data.imageGitHub} alt="Logo" className="github" /></a>
                </div>
              </Fade>
            </div>
          </div>
            <div className="buttonCv">
              <button className="buttonDownload" onClick={handleDownload}>
                DESCARGAR CV
              </button>
            </div>
        </div>
      )}
    </>
  );

}
