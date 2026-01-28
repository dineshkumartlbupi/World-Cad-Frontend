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
                <div className={styles.scrollContainer}>
                    <div className={styles.scrollTrack}>
                        {/* First set of partners */}
                        {partners.map((partner, index) => (
                            <div key={`original-${index}`} className={styles.logoItem}>
                                {partner}
                            </div>
                        ))}
                        {/* Duplicate set for seamless scrolling */}
                        {partners.map((partner, index) => (
                            <div key={`duplicate-${index}`} className={styles.logoItem}>
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
