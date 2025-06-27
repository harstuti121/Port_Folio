import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

import pawsImg from '../assets/pet.png';
import ezyrideImg from '../assets/ezyride.png';
import exploreImg from '../assets/travel.png';
import portfolioImg from '../assets/Portfolio.png';

const projects = [
  {
    title: 'PawsParadise',
    image: pawsImg,
    description: 'A pet care platform offering shopping & services.',
    techStack: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    github: 'https://github.com/harstuti121/paws_new',
  },
  {
    title: 'EzyRide',
    image: ezyrideImg,
    description: 'Vehicle rental system with admin & user dashboards.',
    techStack: ['React', 'CSS', 'Node.js', 'MySQL'],
    github: 'https://github.com/harstuti121/EZYRIDE',
  },
  {
    title: 'ExploreEase',
    image: exploreImg,
    description: 'Travel site with destination search & booking.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/harstuti121/ExploreEase',
  },
  {
    title: 'Portfolio',
    image: portfolioImg,
    description: 'My personal portfolio built with React.',
    techStack: ['React', 'CSS'],
    github: 'https://github.com/yourusername/portfolio',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-icons">
                {project.techStack.map((tech, idx) => (
                  <span className="tech" key={idx}>{tech}</span>
                ))}
              </div>
              <a
                href={project.github}
                className="github-link"
                target="_blank"
                rel="noreferrer"
                title="View on GitHub"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
