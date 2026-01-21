'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import styles from './PortfolioPage.module.css';

import { projects } from '@/data/projects';
import Link from 'next/link';

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
                                            <Link href={`/portfolio/${project.slug}`} className={styles.viewBtn}>View Case Study</Link>
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
