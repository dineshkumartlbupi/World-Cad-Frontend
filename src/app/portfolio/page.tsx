'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import styles from './PortfolioPage.module.css';

const projects = [
    { title: 'Dubai Sky Tower', category: 'Architecture', image: '/images/bim.png' },
    { title: 'Jet Engine Part', category: 'Mechanical', image: '/images/mechanical.png' },
    { title: 'Residential Villa', category: 'Residential', image: '/images/architectural.png' },
    { title: 'Tech Hub Park', category: 'Architecture', image: '/images/hero.png' },
    { title: 'Industrial Assembly', category: 'Mechanical', image: '/images/mep.png' },
    { title: 'Luxury Apartment', category: 'Residential', image: '/images/architectural.png' },
];

const categories = ['All', 'Architecture', 'Mechanical', 'Residential'];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Our Portfolio"
                subtitle="A showcase of challenging and successful design projects delivered by World Cad Design LLP worldwide."
            />

            <section className={styles.portfolioSection}>
                <div className="container">
                    <SectionReveal>
                        <div className={styles.filterBar}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </SectionReveal>

                    <div className={styles.grid}>
                        {filteredProjects.map((project, index) => (
                            <SectionReveal key={index} delay={index * 0.1}>
                                <div className={styles.projectCard}>
                                    <div className={styles.imageBox}>
                                        <img src={project.image} alt={project.title} />
                                        <div className={styles.overlay}>
                                            <span>{project.category}</span>
                                            <h3>{project.title}</h3>
                                            <button className={styles.viewBtn}>View Case Study</button>
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
