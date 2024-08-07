import React from 'react';
import styles from './HomePage.module.css';
import suraj1 from '../../assets/images/pjNew1.jpg';
import suraj2 from '../../assets/images/pjNew2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faReact, faNodeJs, faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {



  return (
    <div className={styles.homePage}   id="home">
      <div className={styles.contentContainer}>
        <div className={styles.introduction}>
          <h5>Hello I'M</h5>
          <h1 className={styles.mainHeading}> Prathamesh Jepal</h1>
          <h3 className={styles.subHeading}>A Passionate Front-End Devloper</h3>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.socialIcons}>
            <h2 className={styles.sectionTitle}>FIND ME ON</h2>
            <div className={styles.socialIconsWrapper}>
              <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </div>
          </div>
          <div className={styles.technologyIcons}>
            <h2 className={styles.sectionTitle}>BEST SKILL IN</h2>
            <div className={styles.socialIconsWrapper}>
              <FontAwesomeIcon icon={faReact} className={styles.icon} />
              <FontAwesomeIcon icon={faNodeJs} className={styles.icon} />
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              <FontAwesomeIcon icon={faHtml5} className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
        <Button variant='outlined' >Dounload Resume</Button>
        </div>
      </div>
      <div className={styles.Profile}>
      <img src={suraj2} alt="" className={styles.FirstImg} />
      <img src={suraj1} alt="" className={styles.SecondImg} />
      </div>
    </div>
  );
}

export default HomePage;
