'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
// text
const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Your Expert Partner<br />
                        Precision CAD for your<br />
                        <span>Solar & Roofing Business</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Outsource your solar permit designs, 3D roof reports, and PE stamping to expert engineers. Fast turnarounds, 99.9% accuracy.
                    </p>

                    <div className={styles.formWrapper}>
                        <a href="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem' }}>
                            Get a Free Quote
                        </a>

                    </div>

                    <p className={styles.formNote}>Fast 12-24h Turnaround · No Contracts Required</p>
                    <div className={styles.ratingWrapper}>
                        <div className={styles.stars}>
                            {'★★★★★'.split('').map((star, i) => (
                                <span key={i} style={{ color: '#FFB800' }}>{star}</span>
                            ))}
                        </div>
                        <p className={styles.ratingText}>
                            Rated <strong>4.7/5 stars</strong> with over <span className="text-primary">1,000+ reviews</span>
                        </p>
                    </div>
                </div>

                <div
                    className={styles.imageContainer}
                >
                    <img
                        src="/images/hero.png"
                        alt="World Cad Design Engineering Display"
                        className={styles.heroImage}
                    />
                </div>
            </div>

            {/* Curved Bottom Divider */}
            <div className={styles.curveDivider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
