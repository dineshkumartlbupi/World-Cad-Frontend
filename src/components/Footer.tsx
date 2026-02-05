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
                            Central Park II Rd, Vipul World,<br />
                            Sector 48, Gurugram, Haryana 122018<br />
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
                            <li><a href="/services/solar-design-service">Solar Permit Designs</a></li>
                            <li><a href="/services/roofing-design-service">3D Roof Reports</a></li>
                            <li><a href="/services/solar-sales-proposals">Solar Sales Proposals</a></li>
                            <li><a href="/services/structural-engineering">PE Stamping</a></li>
                            <li><a href="/services/ev-charging-design">EV Charging Design</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/process">Our Process</a></li>
                            <li><a href="/partners">Partners</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/case-studies">Case Studies</a></li>
                            <li><a href="/help-center">Help Center</a></li>
                            <li><a href="/glossary">Glossary</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/contact">Contact Support</a></li>
                            <li><a href="/status">System Status</a></li>
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
