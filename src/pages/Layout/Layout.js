import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from './Layout.module.css';

const Layout = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <div>
      <Navbar />

      <div className={styles.arrowContainer} onClick={scrollToTop}>
        <ArrowUpwardIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default Layout;
