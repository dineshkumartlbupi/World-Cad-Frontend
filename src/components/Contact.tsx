'use client';
import React, { useEffect } from 'react';
import styles from './Contact.module.css';
import { useContact } from "@/data/store/useContact";

const Contact = () => {
    const { formData, loading, error, success, setFormData, submitForm, resetForm } = useContact();
    const [showSuccess, setShowSuccess] = React.useState(false);

    useEffect(() => {
        if (success) {
            setShowSuccess(true);
            const timer = setTimeout(() => {
                setShowSuccess(false);
                resetForm();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success, resetForm]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitForm();
    }



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

                    <form className={styles.form} onSubmit={handleSubmit}>
                        {showSuccess && (
                            <div className={styles.successMessage}>
                                ✓ Message sent!
                            </div>
                        )}
                        {error && (
                            <div className={styles.errorMessage}>
                                {error}
                            </div>
                        )}
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input type="text" name="fullName" placeholder="John Doe" value={formData.fullName} onChange={(e) => setFormData("fullName", e.target.value)}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData("email", e.target.value)}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Service Type</label>
                            <select name="serviceType" value={formData.serviceType} onChange={(e) => setFormData("serviceType", e.target.value)}>
                                <option value="">Select Service</option>
                                <option value="Solar Permit Design">Solar Permit Design</option>
                                <option value="3D Roof Report">3D Roof Report</option>
                                <option value="PE Stamping">PE Stamping</option>
                                <option value="Sales Proposal">Sales Proposal</option>
                                <option value="Other Engineering Service">Other Engineering Service</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Project Details</label>
                            <textarea name="projectDetails" rows={4} placeholder="Tell us about your project..." value={formData.projectDetails} onChange={(e) => setFormData("projectDetails", e.target.value)}></textarea>
                        </div>
                        <button type="submit" disabled={loading} className="btn btn-primary">{loading ? 'Sending...' : 'Send Message'}</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
