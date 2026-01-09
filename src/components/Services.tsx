'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
    {
        title: 'Architectural CAD',
        description: 'Detailed 2D drafting and 3D modeling for residential and commercial structures.',
        icon: '/images/architectural.png',
        isImage: true
    },
    {
        title: '3D Rendering',
        description: 'Photorealistic visualizations that bring your architectural concepts to life.',
        icon: '✨',
        isImage: false
    },
    {
        title: 'MEP Design',
        description: 'Mechanical, Electrical, and Plumbing design Coordination for complex buildings.',
        icon: '/images/mep.png',
        isImage: true
    },
    {
        title: 'BIM Modeling',
        description: 'Building Information Modeling for improved construction efficiency and collaboration.',
        icon: '/images/bim.png',
        isImage: true
    },
    {
        title: 'Civil Engineering',
        description: 'Infrastructure and land development design with precise CAD services.',
        icon: '🛤️',
        isImage: false
    },
    {
        title: 'Industrial Design',
        description: 'Product modeling and prototyping for manufacturing and engineering.',
        icon: '/images/mechanical.png',
        isImage: true
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
};

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        className="gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Specialized Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Comprehensive CAD solutions tailored to your industry needs.
                    </motion.p>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapper}>
                                    {service.isImage ? (
                                        <div className={styles.cardImage}>
                                            <img src={service.icon} alt={service.title} />
                                        </div>
                                    ) : (
                                        <div className={styles.iconPlaceholder}>
                                            <span className={styles.emoji}>{service.icon}</span>
                                        </div>
                                    )}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>

                            <div className={styles.cardFooter}>
                                <Link href="/services" className={styles.learnMore}>
                                    Explore Service <span className={styles.arrow}>→</span>
                                </Link>
                            </div>

                            {/* Decorative Glow */}
                            <div className={styles.glow} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
