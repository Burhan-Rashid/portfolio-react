import React from 'react';
import expertiseData from '../data/expertise.json';

const Expertise = () => {
  return (
    <section id="expertise">
      <div className="section-header fade-in">
        <div className="section-label">// {expertiseData.sectionLabel}</div>
        <h2 className="section-title">{expertiseData.sectionTitle}</h2>
        <p className="section-description">{expertiseData.sectionDescription}</p>
      </div>
      <div className="expertise-grid">
        {expertiseData.skills.map((skill) => (
          <div key={skill.id} className="expertise-card fade-in">
            <div className="expertise-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="tech-tags">
              {skill.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
