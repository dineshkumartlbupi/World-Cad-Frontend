'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
// text
const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.overlay}></div>

            {/* Background Blueprint Grid - Animated via CSS */}
            <div className={styles.gridBackground}></div>

            <div className={`container ${styles.content}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.tagline}>Precision Engineering & Design</span>
                    <h1 className={`${styles.title}`}>
                        World-Class <span className="gradient-text">Engineering.</span><br />
                        Precision <span className={styles.outlineText}>Defined.</span>
                    </h1>
                </motion.div>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    World Cad Design LLP delivers state-of-the-art CAD solutions that redefine industry standards.
                    From complex 3D modeling to comprehensive BIM management, we turn your boldest ideas into reality.
                </motion.p>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link href="/services" className="btn btn-primary">Our Solutions</Link>
                    <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
                    <Link href="/contact" className="btn btn-outline">Contact Us</Link>
                </motion.div>
            </div>

            {/* Decorative Blueprint Lines */}
            <div className={styles.blueprintDecor}>
                <div className={styles.lineH}></div>
                <div className={styles.lineV}></div>
                <div className={styles.circleDecor}></div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Scroll to Explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
