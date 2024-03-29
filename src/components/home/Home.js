import React from "react";
import "./Home.css";
import About from "../about/About.js";
import Contact from "../contact/Contact.js";
import Resume from "../resume/Resume";

function Home() {
  return (
    <>
      <div className="main">
        <div className="hero-container">
          <div className="hero-image">
            <img src={"./images/nico-no-bg1000.png"} alt="Nico face" />
          </div>
          <div className="hero-heading">
            <h1>Nico Rithner</h1>
            <h4>Software Engineer</h4>
          </div>
        </div>
        <About />
        <Contact />
        <Resume />
      </div>
      <footer className="footer--pin">Nico Rithner © 2022</footer>
    </>
  );
}

export default Home;
