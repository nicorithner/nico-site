import React from "react";

import Resume from "../resume/Resume.js";
import "./About.css";

function About(props) {
  return (
    <div className="container">
      <Resume />

      <div className="skills-section">
        <h2> Skills </h2>
        <div className="skills-be">
          <button>Ruby</button>
          <button>Ruby on Rails</button>
          <button>JavaScript</button>
          <button>HTML5</button>
          <button>CSS</button>
        </div>

        <div className="skills-be">
          <button>REST API</button>
          <button>Test Driven Development</button>
          <button>SQL</button>
          <button>ActiveRecord</button>
          <button>PostgreSQL</button>
          <button>Git</button>
          <button>GitHub</button>
          <button>AWS</button>
        </div>

        <h2> Currently Studying </h2>

        <div className="skills-fe">
          <button>React.js</button>
          <button>Node.js</button>
        </div>
      </div>
      <div className="resume-download">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/10JHR-gfGL7a0x8slwTT2ikRth2cFx4Ch/view?usp=sharing"
        >
          <img src="../images/pdf-icon.png" alt="Pdf Icon" />
          <br />
          <h4>Download Resume</h4>
        </a>
      </div>
    </div>
  );
}

export default About;
