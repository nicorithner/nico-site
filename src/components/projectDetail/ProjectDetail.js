import React from 'react';

function ProjectDetail({project}) {
  return (
  <div className="project-container">
    <div className="heading"> <h1>{project.title}</h1> </div>
    <div className="banner"><img src={project.banner} alt="project banner" /></div>
    <div className="pic1"> <img src={project.pic1} alt="project display"/></div>
    <div className="pic1"> <img src={project.pic2} alt="project display two"/></div>

    <div className="text1"> <p> {project.text1} </p></div>
    <div className="text2"> <p> {project.text1} </p></div>
    <div className="text3"> <p> {project.text1} </p></div>
  </div>
  );
}

export default ProjectDetail;
