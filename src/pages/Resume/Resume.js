import React from 'react';
import samplePDF from '../../Resume/PrathameshJepal.pdf';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resumePage}>
      <h1 className={styles.heading}>My Resume</h1>
      <div className={styles.pdfContainer}>
        <iframe
          src={samplePDF}
          title="Resume"
          className={styles.pdfIframe}
        />
      </div>
    </div>
  );
}

export default Resume;
