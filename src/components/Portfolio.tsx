'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';

const projects = [
    {
        id: 1,
        title: 'Skyline Plaza',
        category: 'Commercial', // Matches generic filter "Commercial"
        image: '/images/hero.png'
    },
    {
        id: 2,
        title: 'Precision Engine Part',
        category: 'Industrial',
        image: '/images/mechanical.png'
    },
    {
        id: 3,
        title: 'Eco-Friendly Residence',
        category: 'Residential',
        image: '/images/architectural.png'
    },
    {
        id: 4,
        title: 'Smart City Infrastructure',
        category: 'Civil',
        image: '/images/hero.png'
    },
    {
        id: 5,
        title: 'Modern Office Complex',
        category: 'Commercial',
        image: '/images/bim.png'
    },
    {
        id: 6,
        title: 'HVAC System Design',
        category: 'Industrial',
        image: '/images/mep.png'
    }
];

const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Civil'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        className="gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        A showcase of our precision and design excellence.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <div className={styles.filterContainer}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`${styles.filterBtn} ${activeCategory === category ? styles.activeFilter : ''}`}
                        >
                            {category}
                            {activeCategory === category && (
                                <motion.div
                                    className={styles.activeTabIndicator}
                                    layoutId="activeTab"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className={styles.grid}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                className={styles.item}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <img src={project.image} alt={project.title} />
                                    <div className={styles.overlay}>
                                        <div className={styles.info}>
                                            <span className={styles.categoryTag}>{project.category}</span>
                                            <h3>{project.title}</h3>
                                            <button className={styles.viewBtn}>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
