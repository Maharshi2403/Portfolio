/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import IMAGES from "./images/images";
import "./App.css";
import { Bio } from "./assets/constants";
import Typewriter from "typewriter-effect";
import { skills } from "./assets/constants";
function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Skills />
      <Projects />
    </>
  );
}

function Navbar() {
  return (
    <div className="nav">
      <span>Maharshi's Portfolio</span>
      <span className="navRight">
        <a href="https://github.com/Maharshi2403">Github</a>
      </span>
      <span className="navRight">
        <a href="https://www.linkedin.com/in/maharshi-patel-a87b19227/">
          Linkdin
        </a>
      </span>
      <span className="navRight">Projects</span>
      <span className="navRight">Skills</span>
      <span className="navRight">Contact</span>
    </div>
  );
}

function Introduction() {
  const [onMouse, setOnMouse] = useState(false);
  function changeColor() {
    setOnMouse(!onMouse);
  }
  return (
    <div className="intro">
      <div className="intro-left">
        <img
          onMouseOver={changeColor}
          className={onMouse ? "intro-left-img" : "img-on"}
          src={IMAGES.image1}
          alt="Avatar"
        />
      </div>
      <div className="intro-right">
        <h1>
          Hello, I'm <br />
          <span className={onMouse ? "on" : "off"}>Maharshi Patel</span>
        </h1>
        <h2>
          I'm Passionate
          <span className={onMouse ? "ontext" : "offtext"}>
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>
        <div className="intro-para">
          <h3>{Bio.description}</h3>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skill">
      <div className="skill-head">Skills</div>
      {skills.map((skill) => (
        <div className="skill-card" key={skill.id}>
          <div>
            <img className="skill-img" src={skill.image} alt={skill.name} />
          </div>
          <div className="skill-name">{skill.name}</div>
        </div>
      ))}
    </div>
  );
}

function Projects() {}

export default App;
