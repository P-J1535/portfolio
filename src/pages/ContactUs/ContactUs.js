import React from 'react';
import { Button } from '@mui/material';
import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={styles.container} id="contact">
            <p className={styles.underline}></p>
            <h3 className={styles.subheading}>Get In Touch</h3>
            <h1 className={styles.heading}>Contact</h1>
            <p className={styles.paragraph}>
                My inbox is always open, whether you have a conversation or just want to say hi. I will try my best to get back to you.
            </p>
            <Button
            className={styles.button}
            variant='outlined'
            onClick={() => window.location.href = 'mailto:your-email@example.com'}
        >
            Say Hi
        </Button>
        
        </div>
    );
}

export default ContactUs;
