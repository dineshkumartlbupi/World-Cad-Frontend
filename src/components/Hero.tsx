'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <motion.h1
                    className={`${styles.title} gradient-text`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    World-Class Engineering.<br />
                    <span>Precision Defined.</span>
                </motion.h1>

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
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link href="/services" className="btn btn-primary">Our Solutions</Link>
                    <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
                </motion.div>
            </div>

            {/* Decorative Blueprint Lines */}
            <div className={styles.blueprintDecor}>
                <div className={styles.lineH}></div>
                <div className={styles.lineV}></div>
            </div>
        </section>
    );
};

export default Hero;
