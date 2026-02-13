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
                    {/* Main Service Content */}
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

                            </div>

                            <SectionReveal delay={0.5}>
                                <div className={styles.ctaBox}>
                                    <h3>Ready to start your {service.title} project?</h3>
                                    <a href="/contact" className="btn btn-primary">Get a Quote</a>
                                </div>
                            </SectionReveal>
                        </div>
                    </div>


              

                    {/* Sub Services */}
                    {service.subServices && service.subServices.map((subService, index) => (
                        <div key={index} style={{ marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px' }}>
                             <SectionReveal>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--primary-color)' }}>{subService.title}</h2>
                             </SectionReveal>
                             <div className={styles.grid}>
                                <div className={styles.textContent}>
                                    <SectionReveal delay={0.1}>
                                        <p className={styles.description}>{subService.description}</p>
                                    </SectionReveal>
                                     <div className={styles.benefitsGrid}>
                                        <SectionReveal delay={0.2}>
                                            <div className={styles.checkBoxContainer}>
                                                <h3>Features</h3>
                                                <ul>
                                                    {subService.features.map((feature, i) => (
                                                        <li key={i}><span>✓</span> {feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </SectionReveal>
                                    </div>
                                     <SectionReveal delay={0.3}>
                                        <div className={styles.ctaBox}>
                                            <h3>Interested in {subService.title}?</h3>
                                            <a href="/contact" className="btn btn-primary">Contact Us</a>
                                        </div>
                                    </SectionReveal>
                                </div>
                                 <SectionReveal delay={0.2}>
                                    <div className={styles.imageBox}>
                                        <img src={subService.image} alt={subService.title} />
                                        <div className={styles.overlay}></div>
                                    </div>
                                </SectionReveal>
                             </div>

                            

                        </div>
                    ))}

                </div>
            </section>


        </main >
    );
}
