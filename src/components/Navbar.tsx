'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/images/logo.png" alt="World Cad Design LLP Logo" className={styles.logoImage} />
                </Link>

                <div className={styles.links}>
                    <Link href="/">Home</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact" className="btn btn-primary ">Get a Quote</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
