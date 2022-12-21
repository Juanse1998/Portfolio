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
        <div className="item" href="">
          <a title="React" href="https://es.reactjs.org" target="blanck">
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
          </a>
        </div>
        <div className="item">
          <a title="React-Native" href="https://reactnative.dev" target="blanck">
            <img
              class="logos"
              src={atom}
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
              class="logos"
              src={css}
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
            </a>
        </div>
        <div className="item">
          <a title="Docker" href="https://hub.docker.com/_/docker-docs" target="blanck">
            <img
              class="logos"
              src={docker}
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
              class="logos"
              src={github}
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
              class="logos"
              src={html}
              alt="logo react"
            />
            <div className="tech-name">
              <i>HTML</i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="Java" href="https://dev.java/learn/" target="blanck">
            <img
              class="logos"
              src={java}
              alt="logo react"
            />
            <div className="tech-name">
              <i>Java</i>
            </div>
          </a>
        </div>
        <div className="item">
         <a title="MySql" href="https://www.mysql.com" target="blanck">
          <img
            class="logos"
            src={mysql}
            alt="logo react"
          />
          <div className="tech-name">
            <i>MySql</i>
          </div>
        </a>
        </div>
        <div className="item">
          <a title="Postman" href="https://www.postman.com" target="blanck">
            <img
              class="logos"
              src={postman}
              alt="logo react"
            />
            <div className="tech-name">
              <i>Postman</i>
            </div>
          </a>
        </div>
        <div className="item">
          <a title="Sequelize" href="https://sequelize.org" target="blanck">
            <img
              class="logos"
              src={sequelize}
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
            class="logos"
            src={node}
            alt="logo node js"
          />
          <div className="tech-name">
            <i>Node Js</i>
          </div>
        </a>
        </div>
      </div>
    </div>

    </>
  );
}
