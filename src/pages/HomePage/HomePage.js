import React from 'react';
import styles from './HomePage.module.css';
import pj1 from '../../assets/images/pjNew1.jpg';
import pj2 from '../../assets/images/pjNew2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faReact, faNodeJs, faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const handleDownload = () => {
    const resumeUrl = "/Resume/PrathameshJepal.pdf";
    window.open(resumeUrl, '_blank')
};

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
             <a href='https://www.facebook.com/prathamesh.jepal.1' target='_blank'> <FontAwesomeIcon icon={faFacebookF} className={styles.icon} /></a>
              <a href='https://github.com/P-J1535' target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a>
             <a href='https://www.linkedin.com/in/prathamesh-jepal-014184230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'> <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} /></a>
             <a href='https://www.instagram.com/pj_1535?igsh=MWNvNnI2emc2ZmEwNA%3D%3D&utm_source=qr' target='_blank'> <FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a>
            </div>
          </div>
          <div className={styles.technologyIcons}>
            <h2 className={styles.sectionTitle}>BEST SKILL IN</h2>
            <div className={styles.socialIconsWrapper}>
              <FontAwesomeIcon icon={faReact} className={styles.icon} />
              <FontAwesomeIcon icon={faNodeJs} className={styles.icon} />
              
              <FontAwesomeIcon icon={faHtml5} className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.btn}>
        <Button variant='outlined' onClick={handleDownload}>Dounload Resume</Button>
        </div>
      </div>
      <div className={styles.Profile}>
      <img src={pj1} alt="" className={styles.FirstImg} />
      <img src={pj2} alt="" className={styles.SecondImg} />
      </div>
    </div>
  );
}

export default HomePage;
