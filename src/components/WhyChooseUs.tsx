'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import styles from './WhyChooseUs.module.css';

const benefits = [
    {
        icon: '🎯',
        title: 'Precision Engineering',
        description: 'Delivering hyper-accurate CAD models with mathematical precision for zero-tolerance projects.'
    },
    {
        icon: '⚡',
        title: 'Fast Turnaround',
        description: 'Industry-leading delivery times without compromising on quality or detail.'
    },
    {
        icon: '🏆',
        title: '15+ Years Experience',
        description: '500+ successful projects across residential, commercial, and industrial sectors.'
    },
    {
        icon: '🔧',
        title: 'Latest Technology',
        description: 'Leveraging cutting-edge CAD tools including AutoCAD, Revit, SolidWorks, and BIM 360.'
    },
    {
        icon: '👥',
        title: 'Expert Team',
        description: '50+ certified CAD professionals, architects, and engineers at your service.'
    },
    {
        icon: '💰',
        title: 'Cost-Effective',
        description: 'Competitive pricing with no hidden fees and flexible payment options.'
    },
    {
        icon: '🌍',
        title: 'Global Reach',
        description: 'Serving clients worldwide with 24/7 support and seamless collaboration.'
    },
    {
        icon: '✅',
        title: 'Quality Guaranteed',
        description: 'ISO-certified processes ensuring industry compliance and excellence.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionReveal>
                    <div className={styles.header}>
                        <h2 className="gradient-text">Why Choose World Cad Design?</h2>
                        <p>Your trusted partner for world-class CAD solutions and engineering excellence</p>
                    </div>
                </SectionReveal>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <SectionReveal key={index} delay={index * 0.05}>
                            <motion.div
                                className={styles.card}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.icon}>{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </motion.div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
