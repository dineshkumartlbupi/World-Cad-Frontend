'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';

import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import { services } from '@/data/services';
import styles from './ServiceDetail.module.css';

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return notFound();
    }

    return (
        <main>
            <Navbar />
            <PageHeader
                title={service.title}
                subtitle={service.details}
            />

            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.grid}>
                        <SectionReveal>
                            <div className={styles.imageBox}>
                                <img src={service.image} alt={service.title} />
                                <div className={styles.overlay}></div>
                            </div>
                        </SectionReveal>

                        <div className={styles.textContent}>
                            <SectionReveal delay={0.2}>
                                <h2>Overview</h2>
                                <p className={styles.description}>{service.fullDescription}</p>
                            </SectionReveal>

                            <div className={styles.benefitsGrid}>
                                <SectionReveal delay={0.3}>
                                    <div className={styles.checkBoxContainer}>
                                        <h3>Key Features</h3>
                                        <ul>
                                            {service.features.map((feature, i) => (
                                                <li key={i}><span>✓</span> {feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </SectionReveal>

                                <SectionReveal delay={0.4}>
                                    <div className={styles.checkBoxContainer}>
                                        <h3>Benefits</h3>
                                        <ul>
                                            {service.benefits?.map((benefit, i) => (
                                                <li key={i}><span>★</span> {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </SectionReveal>
                            </div>

                            <SectionReveal delay={0.5}>
                                <div className={styles.ctaBox}>
                                    <h3>Ready to start your {service.title} project?</h3>
                                    <a href="/contact" className="btn btn-primary">Get a Quote</a>
                                </div>
                            </SectionReveal>
                        </div>
                    </div>


                    {service.diagrams && service.diagrams.length > 0 && (
                        <div className={styles.diagramsSection}>
                            <SectionReveal>
                                <h3 className={styles.diagramsHeader}>Process Diagrams</h3>
                            </SectionReveal>
                            <div className={styles.detailGallery}>
                                {service.diagrams.map((src, index) => (
                                    <SectionReveal key={index} delay={index * 0.1}>
                                        <div className={styles.galleryItem}>
                                            <img src={src} alt={`${service.title} Diagram ${index + 1}`} />
                                        </div>
                                    </SectionReveal>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>


        </main >
    );
}
