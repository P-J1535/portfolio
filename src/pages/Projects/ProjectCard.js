import React from 'react';
import styles from './ProjectCard.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.titleWrap}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.icons}>
            <span className={styles.icon}><GitHubIcon className={styles.iconInside} /></span>
            <span className={styles.icon}><YouTubeIcon className={styles.iconInside} /></span>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
