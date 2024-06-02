import React from 'react';
import './CSS/Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Repeat this block for each project */}
        <div className="project">
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="project-link">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
