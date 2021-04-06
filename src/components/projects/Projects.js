import React from "react"
import Thumbnail from '../thumbnail/Thumbnail.js'; 
import './Projects.css'
import '../../App.css';
 
function Projects(props) {

  let displayProjects = () => {
    return props.projectlist.map((project, i) => {
      return (
        <Thumbnail
          key={i}
          id={project.id}
          image={project.image}
          title={project.title}
          summary={project.summary}
          category={project.category}
          link={project.link}
        />
      );
    });
  };

const projectCards = displayProjects();
return (
  <div className="projects">

    <div className="header"><h1>Projects</h1></div>

    <div className="card-container">
      {projectCards}
    </div>

  </div>
  );
}

export default Projects;
