import React from "react";
import styles from "./ProjectCard.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectCard = ({ title, description, image, gitLink, domainLink }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.titleWrap}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.icons}>
            <a href={gitLink} target="_blank" className={styles.icon}>
              <GitHubIcon className={styles.iconInside} />
            </a>
            <a href={domainLink} target="_blank" className={styles.icon}>
              <LanguageIcon className={styles.iconInside} />
            </a>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
