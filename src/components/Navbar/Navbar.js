import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (index, item) => {
    if (item === 'Resume') {
      handleDownload();
    } else {
      setActiveIndex(index);
    }
    setIsOpen(false);
  };

  const handleDownload = () => {
    const resumeUrl = "/Resume/PrathameshJepal.pdf";
    window.open(resumeUrl, '_blank');
  };

  const handleHomePage = () => {
    window.location.href = '/';
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
      
      <img src={logo} alt="logo" onClick={handleHomePage} />
      </div>
      <ul className={`${styles.navbarMenu} ${isOpen ? styles.active : ''}`}>
        {['Home', 'Projects', 'About', 'Resume', 'Contact'].map((item, index) => (
          <li key={index}>
            <a
              href={item !== 'Resume' ? `#${item.toLowerCase()}` : '#'}
              className={activeIndex === index ? styles.active : ''}
              onClick={() => handleLinkClick(index, item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.navbarToggle} onClick={toggleMenu}>
        <div className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
