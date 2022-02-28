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
      <div className="skills" id="skills">
        <div style={{ paddingRight: "30%" }}>
          <div className="items">
            <i class="tech-name"> ReactJS </i>
            <img
              class="logos"
              src={react}
              alt="logo react"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
              <i class="tech-name">React Native</i>
              <img
                class="logos"
                src={atom}
                alt="logo atom"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
          </div>
          <div className="items">
            <i class="tech-name">CSS</i>
            <img
              class="logos"
              src={css}
              alt="logo css"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i class="tech-name">SQL</i>
            <img
              class="logos"
              src={database}
              alt="logo database"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i class="tech-name">Docker</i>
            <img
              class="logos"
              src={docker}
              alt="logo docker"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i class="tech-name">Github</i>
            <img
              class="logos"
              src={github}
              alt="logo github"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i class="tech-name">HTML</i>
            <img
              class="logos"
              src={html}
              alt="logo html"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i class="tech-name">Java</i>
            <img
              class="logos"
              src={java}
              alt="logo java"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i class="tech-name">MySql</i>
            <img
              class="logos"
              src={mysql}
              alt="logo mysql"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i class="tech-name">Postman</i>
            <img
              class="logos"
              src={postman}
              alt="logo postman"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i class="tech-name">sequelize</i>
            <img
              class="logos"
              src={sequelize}
              alt="logo sequelize"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
