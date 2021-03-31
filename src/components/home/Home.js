import React from "react"
function Home(props) {
  return (
    <div className="home-container">
      <div className="headline">
        <h1>Nico Rithner</h1>
        <h2>Software Developer</h2>
      </div>

      <div className="hero-image">
        <img src={ './images/nico.png' } className="nico" alt="Nico face" />
      </div>
    </div>
  )
}
 
export default Home;
