import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} text-center`}>
            <div className="container-fluid ">
            </div>
            <div className="smallText">
                <p><small>&copy; {new Date().getFullYear()} Michael O'Sullivan. All rights reserved.</small></p>
            </div>
        </footer>
    );
};

export default Footer;
