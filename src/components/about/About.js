import React from "react"
 
function About(props) {
  return (
    <div className="container">
      <div className="heading">
        <h1>Nico Rithner</h1>
        <h2>Software Developer</h2>
      </div>
      <div className="nico">
        <img src={ './images/nico-logo.png' } className="nico" alt="Nico face" width="200" height="auto" />
      </div>
      <div className="description">
        <p> stuff about myself </p>
      </div>
      <div className="skills">
        <button className="skill">Ruby</button>
        <button className="skill">Rails</button>
        <button className="skill">SQL</button>
        <button className="skill">API</button>
      </div>
    </div>
  )
}
 
export default About;
