import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import FooterLogo from './FooterLogo';
import Link from 'next/link';

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
                            <li><Link href="/services/solar-design-service">Solar Permit Designs</Link></li>
                            <li><Link href="/services/roofing-design-service">3D Roof Reports</Link></li>
                            <li><Link href="/services/solar-sales-proposals">Solar Sales Proposals</Link></li>
                            <li><Link href="/services/structural-engineering">PE Stamping</Link></li>
                            <li><Link href="/services/ev-charging-design">EV Charging Design</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/process">Our Process</Link></li>
                            <li><Link href="/partners">Partners</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Resources</h4>
                        <ul>
                            <li><Link href="/blogs">Blog</Link></li>
                            <li><Link href="/case-studies">Case Studies</Link></li>
                            <li><Link href="/help-center">Help Center</Link></li>
                            <li><Link href="/glossary">Glossary</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/contact">Contact Support</Link></li>
                            <li><Link href="/status">System Status</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                            <li><Link href="/refund-policy">Refund Policy</Link></li>
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
