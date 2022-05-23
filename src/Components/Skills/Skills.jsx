import react from "./reactjs.png";
import atom from "./atom.png";
import css from "./css.png";
import database from "./database.png";
import docker from "./docker.png";
import github from "./github.png";
import html from "./html-5.png";
import java from "./java.png";
import mysql from "./mysql.png";
import postman from "./postman.png";
import sequelize from "./sequelize.png";
import node from "./node.png";


import "./Skills.css";

export default function Skills() {
  return (
    <>
    <div className="contSkills" id="skills">
      <div className="containerTitle">
          <span>HABILIDADES</span>
      </div>
      <div className="containerSkills">
        <div className="item">
          <img
            class="logos"
            src={react}
            alt="logo react"
            style={{
              width: '50px',
              height: '50px',
              }}
          />
          <div className="tech-name">
            <i> ReactJS </i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={atom}
            alt="logo react"
          />
          <div className="tech-name">
            <i> React Native </i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={css}
            alt="logo react"
          />
          <div className="tech-name">
            <i>CSS</i>
          </div>
        </div>
          <div className="item">
            <img
              class="logos"
              src={database}
              alt="logo react"
              style={{
                width: "50px",

              }}
            />
            <div className="tech-name">
              <i>SQL</i>
            </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={docker}
            alt="logo react"
          />
          <div className="tech-name">
            <i>Docker</i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={github}
            alt="logo react"
          />
          <div className="tech-name">
            <i>Github</i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={html}
            alt="logo react"
          />
          <div className="tech-name">
            <i>HTML</i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={java}
            alt="logo react"
          />
          <div className="tech-name">
            <i>Java</i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={mysql}
            alt="logo react"
          />
          <div className="tech-name">
            <i>MySql</i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={postman}
            alt="logo react"
          />
          <div className="tech-name">
            <i>Postman</i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={sequelize}
            alt="logo react"
          />
          <div className="tech-name">
            <i>sequelize</i>
          </div>
        </div>
        <div className="item">
          <img
            class="logos"
            src={node}
            alt="logo node js"
          />
          <div className="tech-name">
            <i>Node Js</i>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
