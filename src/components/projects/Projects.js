import React from "react"
import Thumbnail from '../thumbnail/Thumbnail.js'; 
import '../../App.css';
 
function Projects(props) {

  let displayProjects = () => {
    return props.projectlist.map((project, i) => {
      return (
        <Thumbnail
          key={i}
          id={project.id}
          title={project.title}
          link={project.link}
          category={project.category}
          image={project.image}
        />
      );
    });
  };

const projectCards = displayProjects();
return (
      <section className="projects">
        <h1>Projects</h1>
      <section className="course-container">{projectCards}</section>
      </section>
      );
}

export default Projects;
