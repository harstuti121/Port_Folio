import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-left">
        <h1>Hello, I'm <span className="highlight">Harstuti</span></h1>
        <h2>Full-Stack Web Developer</h2>
        <p>
          I love turning ideas into beautiful, responsive websites.
          With a passion for both design and functionality, I build digital experiences that are fast, modern, and user-friendly.
        </p>
        <div className="tech-stack">
          <img src="/assets/images/react.png" alt="React" />
          <img src="/assets/images/html.png" alt="HTML" />
          <img src="/assets/images/css.png" alt="CSS" />
          <img src="/assets/images/js.png" alt="JavaScript" />
        </div>
      </div>
      <div className="hero-right">
        <div className="image-container">
          <img src="/assets/images/hars.png" alt="Harstuti" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
