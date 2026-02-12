import React from 'react';
import personalData from '../data/personal.json';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-subtitle">// {personalData.subtitle}</div>
          <h1 className="hero-title">
            {personalData.name}<br />
            <span className="gradient-text">{personalData.title}</span>
          </h1>
          <p className="hero-description">
            {personalData.description}
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">{personalData.cta.primary}</a>
            <a href="#contact" className="btn btn-secondary">{personalData.cta.secondary}</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <div className="code-dot"></div>
            </div>
            <div className="code-content">
              <span className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-function">developer</span> = {'{'}
              </span>
              <span className="code-line">
                {'  '}name: <span className="code-string">'{personalData.name}'</span>,
              </span>
              <span className="code-line">
                {'  '}role: <span className="code-string">'{personalData.title}'</span>,
              </span>
              <span className="code-line">
                {'  '}passion: <span className="code-string">'Building scalable solutions'</span>
              </span>
              <span className="code-line">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
