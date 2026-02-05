import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.info}>
                        <h2 className="gradient-text">Ready to start your project?</h2>
                        <p>Get in touch with our experts for a free consultation and project estimation.</p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📍</span>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>Central Park II Rd, Vipul World,<br />Sector 48, Gurugram, Haryana 122018<br />INDIA</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📧</span>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>contact@worldcaddesign.com</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.icon}>📞</span>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+1 (234) 567-890</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Service Type</label>
                            <select>
                                <option>Solar Permit Design</option>
                                <option>3D Roof Report</option>
                                <option>PE Stamping</option>
                                <option>Sales Proposal</option>
                                <option>Other Engineering Service</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Project Details</label>
                            <textarea rows={4} placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
