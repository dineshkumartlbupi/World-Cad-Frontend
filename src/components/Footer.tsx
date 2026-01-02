import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <img src="/images/logo.png" alt="World Cad Design Logo" className={styles.logoImage} />
                        </div>
                        <p>Leading the world in precision CAD design and architectural visualization.</p>
                    </div>

                    <div className={styles.links}>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Architectural CAD</a></li>
                            <li><a href="#">3D Rendering</a></li>
                            <li><a href="#">BIM Modeling</a></li>
                            <li><a href="#">MEP Design</a></li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} World Cad Design LLP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
