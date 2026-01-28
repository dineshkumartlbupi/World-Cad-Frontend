import Navbar from '@/components/Navbar';

import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import styles from './ServicesPage.module.css';

import { services } from '@/data/services';
import Link from 'next/link';

export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Our Services"
                subtitle="World Cad Design LLP provides end-to-end CAD solutions for architecture, engineering, and manufacturing industries."
            />

            <section className={styles.detailedGrid}>
                <div className="container">
                    <div className={styles.serviceCards}>
                        {services.map((service, index) => (
                            <SectionReveal key={index}>
                                <div className={styles.serviceItem}>
                                    <div className={styles.textContent}>
                                        <h2>{service.title}</h2>
                                        <p>{service.details}</p>
                                        <ul className={styles.featureList}>
                                            {service.features.map((feature, i) => (
                                                <li key={i}><span>✓</span> {feature}</li>
                                            ))}
                                        </ul>
                                        <Link href={`/services/${service.slug}`} className="btn btn-primary" style={{ marginTop: '20px' }}>
                                            Learn More
                                        </Link>
                                    </div>
                                    <div className={styles.visualContent}>
                                        <div className={styles.glassImg}>
                                            <img src={service.image} alt={service.title} />
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer removed to avoid duplication with layout */}
        </main>
    );
}
