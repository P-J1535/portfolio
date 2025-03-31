import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import PortfolioImg from "../../assets/images/Portfolio.png";
import ShetVasant from "../../assets/images/ShetVasant.png";

const projectData = [
  {
    title: "Explore My Creative Journey (Portfolio)",
    description:
      "Explore a collection of my projects that showcase my skills in frontend development. From social media platforms to e-commerce websites and interactive applications, each project reflects my passion for creating user-friendly and visually appealing experiences.",
    image: PortfolioImg,
    gitLink: "https://github.com/P-J1535/portfolio.git",
    domainLink: "https://prathameshjepal.netlify.app/",
  },
  {
    title: "Welcome To Sheth Vasant Lawns",
    /*Technologies Used: React.js, CSS (Module.css), JavaScript, MUI Icons
      Description:*/
    description: `
    
   
Developed a responsive and user-friendly website for Sheth Developers, a leading real estate company. The platform highlights the company's modern residential complexes, luxury addresses, shopping malls, and commercial workspaces. It provides detailed RERA information, legal disclaimers, and easy access to property details.`,
    image: ShetVasant,
    gitLink: "https://github.com/P-J1535/Real-Estate.git",
    domainLink: "https://shethvasanttlawn.netlify.app/",
  },
  {
    title: "Chatting App",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
    image:
      "https://free-portfolio-one.vercel.app/assets/projectThree-d0022094.jpeg",
    gitLink: "",
    domainLink: "",
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
            gitLink={project.gitLink}
            domainLink={project.domainLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
