'use client';

import React from 'react';
import SectionReveal from './SectionReveal';
import styles from './Industries.module.css';

const industries = [
    {
        icon: '🏢',
        title: 'Commercial Buildings',
        description: 'Office complexes, retail spaces, and mixed-use developments'
    },
    {
        icon: '🏠',
        title: 'Residential Projects',
        description: 'Apartments, villas, and housing communities'
    },
    {
        icon: '🏭',
        title: 'Industrial Manufacturing',
        description: 'Factory layouts, production facilities, and warehouses'
    },
    {
        icon: '🌉',
        title: 'Infrastructure & Civil',
        description: 'Bridges, roads, utilities, and public works'
    },
    {
        icon: '⚙️',
        title: 'Mechanical Engineering',
        description: 'Product design, machinery, and mechanical systems'
    },
    {
        icon: '🏥',
        title: 'Healthcare Facilities',
        description: 'Hospitals, clinics, and medical centers'
    }
];

const Industries = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionReveal>
                    <div className={styles.header}>
                        <h2 className="gradient-text">Industries We Serve</h2>
                        <p>Delivering specialized CAD solutions across diverse sectors</p>
                    </div>
                </SectionReveal>

                <div className={styles.grid}>
                    {industries.map((industry, index) => (
                        <SectionReveal key={index} delay={index * 0.1}>
                            <div
                                className={styles.card}
                            >
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{industry.icon}</span>
                                </div>
                                <h3>{industry.title}</h3>
                                <p>{industry.description}</p>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
