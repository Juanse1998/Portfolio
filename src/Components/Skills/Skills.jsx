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
      <div className="skills">
        <div style={{ paddingRight: "30%" }}>
          <div className="items">
            <i> ReactJS </i>
            <img
              src={react}
              alt="logo react"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <div className="texto" style={{ width: "100%" }}>
              <i>React Native</i>
              <img
                src={atom}
                alt="logo atom"
                style={{
                  width: "50px",
                  marginBottom: "30%",
                }}
              />
            </div>
          </div>
          <div className="items">
            <i>CSS</i>
            <img
              src={css}
              alt="logo css"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i>SQL</i>
            <img
              src={database}
              alt="logo database"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i>Docker</i>
            <img
              src={docker}
              alt="logo docker"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i>Github</i>
            <img
              src={github}
              alt="logo github"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i>HTML</i>
            <img
              src={html}
              alt="logo html"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i>Java</i>
            <img
              src={java}
              alt="logo java"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i>MySql</i>
            <img
              src={mysql}
              alt="logo mysql"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i>Postman</i>
            <img
              src={postman}
              alt="logo postman"
              style={{
                width: "50px",
                marginBottom: "30%",
              }}
            />
          </div>
          <div className="items">
            <i>sequelize</i>
            <img
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
