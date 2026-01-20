import React from 'react';
import styles from './TrustedBy.module.css';

const TrustedBy = () => {
    // Placeholder for partner logos. In a real scenario, use <img> tags with white logo versions.
    const partners = [
        "SolarTech Industries",
        "Apex Roofing Solutions",
        "ModuBuild Systems",
        "EcoEnergy Designs",
        "Summit Architecture"
    ];

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <p className={styles.label}>Trusted by industry leaders across the globe</p>
                <div className={styles.logoGrid}>
                    {partners.map((partner, index) => (
                        <div key={index} className={styles.logoPlaceholder}>
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
