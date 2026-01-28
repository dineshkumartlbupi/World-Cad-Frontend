'use client';

import React, { useState } from 'react';
import styles from './Portfolio.module.css';

const projects = [
    {
        id: 1,
        title: 'Residential Solar Design',
        category: 'Residential',
        image: '/images/portfolio_solar_residential.png'
    },
    {
        id: 2,
        title: 'Commercial Roof Array',
        category: 'Commercial',
        image: '/images/portfolio_solar_commercial.png'
    },
    {
        id: 3,
        title: 'Electrical CAD Blueprint',
        category: 'Industrial',
        image: '/images/cad_blueprint_solar.png'
    },
    {
        id: 4,
        title: 'EV Infrastructure Layout',
        category: 'Civil',
        image: '/images/ev_charging_design.png'
    },
    {
        id: 5,
        title: 'Office Complex Solar Grid',
        category: 'Commercial',
        image: '/images/commercial_solar_design.png'
    },
    {
        id: 6,
        title: 'PV Structural Engineering',
        category: 'Industrial',
        image: '/images/structural_engineering_solar.png'
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
                    <h2 className="gradient-text">
                        Featured Projects
                    </h2>
                    <p>
                        A showcase of our precision and design excellence.
                    </p>
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
                                <div className={styles.activeTabIndicator} />
                            )}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={styles.item}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
