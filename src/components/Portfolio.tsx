'use client';

import React, { useState, useEffect } from 'react';
import styles from './Portfolio.module.css';

const projects = [
    {
        id: 1,
        title: 'Residential Solar Design',
        category: 'Residential',
        image: '/images/portfolio_solar_residential.png',
        description: 'Custom solar panel layout and electrical design for a 5-story residential complex with optimized roof space utilization and seamless integration.'
    },
    {
        id: 2,
        title: 'Commercial Roof Array',
        category: 'Commercial',
        image: '/images/portfolio_solar_commercial.png',
        description: 'Large-scale commercial rooftop solar array design with 250+ panels, structural analysis, and grid interconnection plans for optimal energy output.'
    },
    {
        id: 3,
        title: 'Electrical CAD Blueprint',
        category: 'Industrial',
        image: '/images/cad_blueprint_solar.png',
        description: 'Detailed electrical CAD drawings including wiring diagrams, conduit routing, and panel interconnections with full compliance documentation.'
    },
    {
        id: 4,
        title: 'EV Infrastructure Layout',
        category: 'Civil',
        image: '/images/ev_charging_design.png',
        description: 'Complete EV charging station infrastructure design with power distribution, conduit planning, and safety compliance for commercial parking facilities.'
    },
    {
        id: 5,
        title: 'Office Complex Solar Grid',
        category: 'Commercial',
        image: '/images/commercial_solar_design.png',
        description: 'Comprehensive solar grid design for a modern office complex with energy storage integration, monitoring systems, and performance optimization.'
    },
    {
        id: 6,
        title: 'PV Structural Engineering',
        category: 'Industrial',
        image: '/images/structural_engineering_solar.png',
        description: 'Advanced structural analysis for large PV installations including wind load calculations, roof load assessments, and PE-stamped engineering reports.'
    }
];

const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Civil'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activePopup, setActivePopup] = useState<number | null>(null);
    const [popupTimer, setPopupTimer] = useState<NodeJS.Timeout | null>(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const handleViewDetails = (projectId: number) => {
        setActivePopup(projectId);
        
        // Clear existing timer if any
        if (popupTimer) {
            clearTimeout(popupTimer);
        }

        // Set new timer to close popup after 3 seconds
        const timer = setTimeout(() => {
            setActivePopup(null);
        }, 3000);
        
        setPopupTimer(timer);
    };

    const handlePopupHover = (isHovering: boolean) => {
        if (isHovering) {
            // Clear timer when hovering
            if (popupTimer) {
                clearTimeout(popupTimer);
                setPopupTimer(null);
            }
        } else {
            // Reset timer when hover ends
            const timer = setTimeout(() => {
                setActivePopup(null);
            }, 3000);
            setPopupTimer(timer);
        }
    };

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
                                        <button 
                                            className={styles.viewBtn}
                                            onClick={() => handleViewDetails(project.id)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>

                                {/* Popup */}
                                {activePopup === project.id && (
                                    <div 
                                        className={styles.popup}
                                        onMouseEnter={() => handlePopupHover(true)}
                                        onMouseLeave={() => handlePopupHover(false)}
                                    >
                                        <p>{project.description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
