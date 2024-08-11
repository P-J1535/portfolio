import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (index) => {
    setActiveIndex(index);
    setIsOpen(false); 
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>{`< PJ >`}</div>
      <ul className={`${styles.navbarMenu} ${isOpen ? styles.active : ''}`}>
        {['Home', 'Projects', 'Resume','Contact'].map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              
              className={activeIndex === index ? styles.active : ''}
              onClick={() => handleLinkClick(index)}
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
