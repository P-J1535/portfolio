import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const projectData = [
  {
    title: 'Social Media Clone',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!',
    image: 'https://free-portfolio-one.vercel.app/assets/projectOne-db6ed5ff.jpg'
  },
  {
    title: 'E-commerce Website',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!',
    image: 'https://free-portfolio-one.vercel.app/assets/projectTwo-c07c40ce.jpg'
  },
  {
    title: 'Chatting App',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!',
    image: 'https://free-portfolio-one.vercel.app/assets/projectThree-d0022094.jpeg'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <h1>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h1>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.grid}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
