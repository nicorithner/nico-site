import React from "react"
import './Home.css'

function Home(props) {
  return (
   <div className="hero-container">
    
     <div className="hero-heading">
      <h1> My Software Development Journey</h1>
     </div>

     <div className="hero-image">
        <img src={ './images/nico-no-bg1000.png' } alt="Nico face" />
     </div>

   </div>
  )
}
 
export default Home;
