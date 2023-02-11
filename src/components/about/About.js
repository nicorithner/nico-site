import React from "react";

import "./About.css";

function About(props) {
  return (
    <div className="container">
      <div className="skills-section">
        <h2> Skills </h2>
        <div className="skills-be">
          <button>ReactJS</button>
          <button>NodeJS</button>
          <button>JavaScript</button>
          <button>Ruby on Rails</button>
          <button>Ruby</button>
          <button>CSS</button>
          <button>SQL</button>
          <button>PostgreSQL</button>
        </div>
      </div>
    </div>
  );
}

export default About;
