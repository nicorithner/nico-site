import React from 'react';
import './ProjectDetail.css';

function ProjectDetail({project}) {
  return (
  <div className="project-container">
    <section className="header">
      <h1>{project.title}</h1>
      <img src={project.banner} alt="project banner" />
      <p>{project.photocredit}</p>
    </section>

    <section className="section-1">
      <div className="pic"> <img src={project.pic1} alt="project display" /></div>
      <div className="text"> 
        <p> {project.text1} </p>
        <p> {project.text1b} </p>
        <p> {project.text1c} </p>
      </div>
    </section>

    <section className="section-2">
      <div className="text"> 
        <p> {project.text2} </p>
        <p> {project.text2b} </p>
        <p> {project.text2c} </p>
      </div>
      <div className="pic"> <img src={project.pic2} alt="project display two" /></div>
    </section>

    <section className="section-3">
      <div className="pic"> <img src={project.pic3} alt="project display two" /></div>
      <div className="text"> 
        <p> {project.text3} </p>
        <p> {project.text3b} </p>
        <p> {project.text3c} </p>
      </div>
    </section>
  </div>
  );
}

export default ProjectDetail;
