import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          Hey there! I'm <strong>Harstuti</strong>, a passionate full-stack web developer and creative thinker,
          with a strong foundation in design and a deep interest in building things that make an impact. 
          I love combining aesthetics with logic to craft seamless digital experiences.
        </p>

        <p className="about-text">
          My journey into tech began with curiosity and creativity — from designing at <strong>MATRIX </strong> 
          to developing full-stack projects like <strong>PawsParadise</strong> and <strong>EzyRide</strong>. 
          Whether it's crafting engaging front-ends or building solid back-end architectures, I enjoy turning ideas into intuitive, purposeful software.
        </p>
      </div>
    </section>
  );
};

export default About;
