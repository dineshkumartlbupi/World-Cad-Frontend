'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import { projects } from '@/data/projects';
import styles from './ProjectDetail.module.css';

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return notFound();
    }

    return (
        <main>
            <Navbar />
            <PageHeader
                title={project.title}
                subtitle={`${project.category} Project • ${project.location}`}
            />

            <section className={styles.detailSection}>
                <div className="container">
                    <SectionReveal>
                        <div className={styles.heroImage}>
                            <img src={project.image} alt={project.title} />
                        </div>
                    </SectionReveal>

                    <div className={styles.grid}>
                        <div className={styles.mainContent}>
                            <SectionReveal delay={0.1}>
                                <div className={styles.card}>
                                    <h2>The Challenge</h2>
                                    <p>{project.challenge}</p>
                                </div>
                            </SectionReveal>

                            <SectionReveal delay={0.2}>
                                <div className={styles.card}>
                                    <h2>Our Solution</h2>
                                    <p>{project.solution}</p>
                                </div>
                            </SectionReveal>
                        </div>

                        <div className={styles.sidebar}>
                            <SectionReveal delay={0.3}>
                                <div className={styles.statsCard}>
                                    <h3>Project Data</h3>
                                    <div className={styles.statRow}>
                                        <span>Client</span>
                                        <strong>{project.client}</strong>
                                    </div>
                                    <div className={styles.statRow}>
                                        <span>Location</span>
                                        <strong>{project.location}</strong>
                                    </div>
                                    <div className={styles.statRow}>
                                        <span>Completion</span>
                                        <strong>{project.completionDate}</strong>
                                    </div>
                                    <div className={styles.divider}></div>
                                    {project.stats?.map((stat, i) => (
                                        <div key={i} className={styles.statRow}>
                                            <span>{stat.label}</span>
                                            <strong>{stat.value}</strong>
                                        </div>
                                    ))}
                                </div>
                            </SectionReveal>

                            <div style={{ marginTop: '20px' }}>
                                <a href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                    Start Similar Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
