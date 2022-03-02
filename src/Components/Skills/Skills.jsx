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

import "./Skills.css";

export default function Skills() {
  return (
    <>
      <div className="containerSkills" id="skills">
        <div className="containerTitle">
          <div className="box">
            <span className="titleSkills">HABILIDADES</span>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={react}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i> ReactJS </i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={atom}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i> React Native </i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={css}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>CSS</i>
              </div>
            </div>
          </div>
        </div>
         <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={database}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>SQL</i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={docker}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>Docker</i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={github}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>Github</i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={html}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>HTML</i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={java}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>Java</i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={mysql}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>MySql</i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={postman}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>Postman</i>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="items">
            <div className="grid">
              <img
                class="logos"
                src={sequelize}
                alt="logo react"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
              <div className="tech-name">
                <i>sequelize</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
