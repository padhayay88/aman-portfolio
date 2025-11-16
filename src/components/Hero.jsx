import React from 'react';

const Hero = () => {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1>Hi, I'm Aman</h1>
        <p className="hero-subtitle">Full Stack Developer | Web Enthusiast | Problem Solver</p>
        <p className="hero-description">
          I create beautiful and functional web applications. Passionate about building 
          scalable solutions and sharing knowledge with the community.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => handleNavClick('projects')}
          >
            View My Work
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => handleNavClick('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
