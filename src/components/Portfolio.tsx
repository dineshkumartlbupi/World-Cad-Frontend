import React from 'react';
import styles from './Portfolio.module.css';

const projects = [
    {
        title: 'Skyline Plaza',
        category: 'Commercial Architecture',
        image: '/images/hero.png' // Reusing hero for demo
    },
    {
        title: 'Precision Engine Part',
        category: 'Industrial Design',
        image: '/images/hero.png'
    },
    {
        title: 'Eco-Friendly Residence',
        category: 'Residential Design',
        image: '/images/hero.png'
    },
    {
        title: 'Smart City Infrastructure',
        category: 'Civil Engineering',
        image: '/images/hero.png'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="gradient-text">Featured Projects</h2>
                    <p>A showcase of our precision and design excellence.</p>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src={project.image} alt={project.title} />
                                <div className={styles.overlay}>
                                    <div className={styles.info}>
                                        <span>{project.category}</span>
                                        <h3>{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
