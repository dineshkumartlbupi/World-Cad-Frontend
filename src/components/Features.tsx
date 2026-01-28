'use client';

import React, { useState } from 'react';
import styles from './Features.module.css';

const features = [
    {
        id: 'solar',
        label: 'Solar Design',
        title: 'Solar Permit Designs',
        description: 'AHJ-ready PV permit packages. We handle everything from site plans to electrical diagrams, ensuring fast approvals.',
        points: ['PV Array Layouts', 'Single Line Diagrams', 'Datasheets & Labels'],
        image: '/images/solar_design_service.png'
    },
    {
        id: 'roofing',
        label: 'Roofing',
        title: '3D Roof Reports',
        description: 'Precision roof reports for accurate estimation. We provide complete measurements including pitch, area, and waste factors.',
        points: ['ESX & XML Files', 'Waste Calculation', 'Pitch & Area analysis'],
        image: '/images/roofing_measurement_service.png'
    },
    {
        id: 'engineering',
        label: 'Engineering',
        title: 'PE Stamping Services',
        description: 'Certified Structural and Electrical engineering reviews. We provide signed and sealed letters for all 50 states.',
        points: ['Structural Analysis Letters', 'Electrical PE Stamps', 'Load Calculations'],
        image: '/images/engineering_stamping_service.png'
    },
    {
        id: 'sales',
        label: 'Sales Support',
        title: 'Sales Proposals',
        description: 'Win more deals with stunning 3D visual renderings and comprehensive solar proposals that impress homeowners.',
        points: ['Proposal Drawings', 'Shade Reports', 'Production Modeling'],
        image: '/images/sales_proposal_service.png'
    }
];

const Features = () => {
    const [activeTab, setActiveTab] = useState(features[0].id);

    const activeFeature = features.find(f => f.id === activeTab) || features[0];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Expert services to scale your business</h2>
                    <p>A complete engineering back-office for solar and roofing companies.</p>
                </div>

                <div className={styles.tabsContainer}>
                    <div className={styles.tabList}>
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                className={`${styles.tabBtn} ${activeTab === feature.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(feature.id)}
                            >
                                {feature.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.contentArea}>
                        <div className={styles.textContent}>
                            <h3>{activeFeature.title}</h3>
                            <p>{activeFeature.description}</p>
                            <ul className={styles.pointsList}>
                                {activeFeature.points.map((point, idx) => (
                                    <li key={idx}>
                                        <span className={styles.checkIcon}>✓</span> {point}
                                    </li>
                                ))}
                            </ul>
                            <a href="/services" className={styles.learnBtn}>Learn more about {activeFeature.label} →</a>
                        </div>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageCard}>
                                <img src={activeFeature.image} alt={activeFeature.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
