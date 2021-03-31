import React from "react"
import Thumbnail from '../../Thumbnail.js'; // Import the Thumbnail component
import '../../App.css';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/s-weather"
        image="images/placeholders/300x200.png"
        title="Sweater Weather - Rails API"
        category="Rails API"
      />
      
      <Thumbnail
        link="/r-engine"
        image="images/placeholders/300x200.png"
        title="Rails Engine"
        category="Rails API"
      />
      
      <Thumbnail
        link="/never-alone"
        image="images/placeholders/300x200.png"
        title="Never Alone - Rails API For Mobile App"
        category="Rails GraphQL"
      />
    </div>
  )
}
 
export default Projects;
