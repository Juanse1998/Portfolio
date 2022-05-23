import { React, useState  } from "react";
import te from "./te.png";
import te2 from "./te-3.png";
import te3 from "./te-3.png";
import Modal from "../Modal/Modal.jsx";
import "./Project.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Project() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div id="projects" class="containerProject">
        <div className="contTitle">
          <span>Mis Proyectos</span>
        </div>
        <div class="containerProjects">
          <h2 className="titleProject">Té quiero Eccomerce</h2>
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
          <h2 className="titleProjectTwo">Weather App</h2>
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
                <img src={te} />
            </div>
            <div>
                <img src={te2} />
            </div>
            <div>
                <img src={te3} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
