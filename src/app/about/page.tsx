'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import styles from './About.module.css';

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="About World Cad Design LLP"
                subtitle="A global powerhouse in precision CAD and engineering solutions, established to redefine technical excellence."
            />

            <section className={styles.aboutContent}>
                <div className="container">
                    <div className={styles.grid}>
                        <SectionReveal>
                            <div className={styles.textSide}>
                                <h2>Our Engineering Legacy</h2>
                                <p>
                                    Founded with a vision to bridge the gap between complex engineering concepts and digital precision,
                                    World Cad Design LLP has grown into an industry leader. We specialize in transforming bold visions
                                    into detailed, mathematical realities.
                                </p>
                                <p>
                                    Our multidisciplinary team includes veteran architects, structural engineers, and CAD specialists
                                    dedicated to delivering excellence across every project phase.
                                </p>

                                <div className={styles.stats}>
                                    <div className={styles.statItem}>
                                        <h3>15+</h3>
                                        <p>Years Experience</p>
                                    </div>
                                    <div className={styles.statItem}>
                                        <h3>500+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className={styles.statItem}>
                                        <h3>50+</h3>
                                        <p>Expert Designers</p>
                                    </div>
                                </div>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.2}>
                            <div className={styles.imageSide}>
                                <div className={styles.imagePlaceholder}>
                                    <img src="/images/team.png" alt="Engineering Team" />
                                    <div className={styles.blueprintOverlay}></div>
                                </div>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            <section className={styles.mission}>
                <div className="container">
                    <div className={styles.missionGrid}>
                        <SectionReveal>
                            <div className={styles.missionCard}>
                                <div className={styles.icon}>🎯</div>
                                <h3>Our Mission</h3>
                                <p>To empower the global construction and manufacturing sectors with hyper-precise CAD drafting and digital twins that ensure building success.</p>
                            </div>
                        </SectionReveal>

                        <SectionReveal delay={0.2}>
                            <div className={styles.missionCard}>
                                <div className={styles.icon}>👁️</div>
                                <h3>Our Vision</h3>
                                <p>To be the world's most trusted partner for complex engineering design, pioneering the use of AI and metadata in CAD workflows.</p>
                            </div>
                        </SectionReveal>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
