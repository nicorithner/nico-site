import React from "react";
import "./Home.css";
import About from "../about/About.js";

function Home() {
  return (
    <div className="main">
      <div className="hero-container">
        <div className="hero-image">
          <img src={"./images/nico-no-bg1000.png"} alt="Nico face" />
        </div>
        <div className="hero-heading">
          <h1>Software Engineer</h1>
        </div>
      </div>
      <About />
    </div>
  );
}

export default Home;
