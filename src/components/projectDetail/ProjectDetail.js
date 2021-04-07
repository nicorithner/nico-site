import React from 'react';
import './ProjectDetail.css';

function ProjectDetail({project}) {
  console.log(project)
  return (
  <div className="project-container">
    <section className="header">
      <h1>{project.title}</h1>
      <img src={project.banner} alt="project banner" />
      <p>{project.photocredit}</p>
    </section>

    <section className="section-1">
      <div className="pic"> <img src={project.pic1} alt="project display" /></div>
      <div className="text"> <p> {project.text1} </p></div>
    </section>

    <section className="section-2">
      <div className="text"> <p> {project.text2} </p></div>
      <div className="pic"> <img src={project.pic1} alt="project display two" /></div>
    </section>

    <section className="section-3">
      <div className="pic"> <img src={project.pic1} alt="project display two" /></div>
      <div className="text"> <p> {project.text2} </p></div>
    </section>
  </div>
  );
}

export default ProjectDetail;
