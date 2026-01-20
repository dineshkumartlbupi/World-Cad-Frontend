import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import FooterLogo from './FooterLogo';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topSection}>
                    <div className={styles.ctaCard}>
                        <div>
                            <h3>Need reliable engineering support?</h3>
                            <p>Partner with world-class engineers for your solar & roofing needs.</p>
                        </div>
                        <a href="/contact" className={styles.ctaButton}>Get a Quote</a>
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.column}>

                        <FooterLogo />
                        <p className={styles.address}>
                            Block A, Loni Industrial Area,<br />
                            Ghaziabad, Uttar Pradesh 201007<br />
                            INDIA
                        </p>
                        <div className={styles.socials}>
                            <span><FaFacebookF /></span>
                            <span><FaLinkedinIn /></span>
                            <span><FaTwitter /></span>
                            <span><FaInstagram /></span>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Solar Permit Designs</a></li>
                            <li><a href="#">3D Roof Reports</a></li>
                            <li><a href="#">Proposal Drawings</a></li>
                            <li><a href="#">PE Stamping</a></li>
                            <li><a href="#">Sales Proposals</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Our Process</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Glossary</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/contact">Contact Support</a></li>
                            <li><a href="#">System Status</a></li>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-of-service">Terms of Service</a></li>
                            <li><a href="/refund-policy">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} World Cad Design LLP. All rights reserved.</p>
                    <div className={styles.bottomLinks}>
                        <a href="/privacy-policy">Privacy</a>
                        <a href="/terms-of-service">Terms</a>
                        <a href="/refund-policy">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
