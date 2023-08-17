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
import ModalImage from "../ModalImage/ModalImage.jsx";

import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Project() {
  const [showModal, setShowModal] = useState(false);

  const onClickItem = () => {
  console.log('acaaaa', ModalImage);
  <ModalImage />
    // img[0].style.transform = 'scale(0)';
  }
  return (
    <>
      <div id="projects" class="containerProject">
        <div className="contTitle">
          <span>Mis Proyectos</span>
        </div>
        <div class="containerProjects">
          <h2 className="titleProject">Té quiero Eccomerce</h2>
          <Carousel id="carousel" onClick={onClickItem}>
            <div>
                <img src={te} />
            </div>
            <div>
                <img src={te2} />
            </div>
            <div>
                <img src={te3} />
            </div>
            {/* <div>
              <video>
                <source src="https://www.youtube.com/watch?v=_fODiUkYBaI"/>
              </video>
            </div> */}
          </Carousel>
          <h2 className="titleProjectTwo">Weather App</h2>
          <Carousel>
            <div>
                <img src={watherApp1} />
            </div>
            <div>
                <img src={watherApp2} />
            </div>
            <div>
                <img src={te3} />
            </div>
          </Carousel>
          <h2 className="titleProject">Notification UNRC</h2>
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
          </Carousel>
          <h2 className="titleProjectTwo">Videogames App</h2>
          <Carousel>
            <div>
              <img className="img1" id="img1" src={videogames1}/>
            </div>
            <div>
              <img src={videogames2} />
            </div>
            <div>
              <img src={videogames3} />
            </div>
            <div>
              <img src={videogames4} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
