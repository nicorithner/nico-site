import React from "react";
import './About.css'

function About(props) {
  return (
    <div className="container">
      <div className="resume">
        
        <a
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/10JHR-gfGL7a0x8slwTT2ikRth2cFx4Ch/view?usp=sharing"
        ><h2>Resume</h2><br/>
          <img
            src="../images/pdf-icon.png"
            alt="Pdf Icon"
          />
        </a>
      </div>

      <div className="about-description">
        <p>
          I am originally from southern Argentina but have lived in Colorado
          since 2000. I have always had a creative streak and an interest in
          building systems and solutions, but I didn't discover coding until
          after becoming a coach.
        </p>
        <p>
          The connection between these two seemingly disparate disciplines
          became clear to me in 2020 at the World Rugby convention in Houston
          where I heard senior coaches talking about data analysis and using
          python coding to manage the data. This was the final push I needed.
          After some research, I joined Turing School of Software and Design's
          Back-End engineering program.
        </p>
        <p>
          Turning challenged me in many ways. I hadn't been a fuIl time student
          in decades and the curriculum is intensive. I worked 12+ hours a day
          for 7 months with only a few days off during module intermissions.
          More often than not I found myself scratching my head when faced with
          a new algorithm or convoluted problem to solve. However, this
          experience taught me a lot about myself and how I approach challenges.
          I am a natural problem solver that is dedicated to finding a solution.
          Long after others would have given up, I am still pursuing a
          resolution to a coding problem. I consider myself very lucky to have
          found coding at this stage in my career.
        </p>
        <p>
          Now that I've graduated, I've found myself wanting to code for both
          work and fun. Finding solutions to existing problems and exploring new
          tools is exciting to me. I look forward to a life of continuous
          learning and to also applying this newly acquired knowledge to
          coaching.
        </p>
      </div>

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
    </div>
  );
}

export default About;
