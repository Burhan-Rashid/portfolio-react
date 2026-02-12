import React from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header fade-in">
        <div className="section-label">// {projectsData.sectionLabel}</div>
        <h2 className="section-title">{projectsData.sectionTitle}</h2>
        <p className="section-description">{projectsData.sectionDescription}</p>
      </div>
      <div className="projects-grid">
        {projectsData.projects.map((project) => (
          <div key={project.id} className="project-card fade-in">
            <div className="project-image">
              {project.image && <img src={project.image} alt={project.title} />}
            </div>
            <div className="project-content">
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
