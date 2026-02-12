import React from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-header fade-in">
        <div className="section-label"> {experienceData.sectionLabel}</div>
        <h2 className="section-title">{experienceData.sectionTitle}</h2>
      </div>
      <div className="experience-timeline">
        {experienceData.experiences.map((exp) => (
          <div key={exp.id} className="experience-item fade-in">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
              </div>
              <div className="experience-period">{exp.period}</div>
            </div>
            <p className="experience-description">{exp.description}</p>
            <div className="tech-tags">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
