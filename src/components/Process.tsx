import React from 'react';
import styles from './Process.module.css';

const steps = [
    {
        number: '01',
        title: 'Consultation',
        description: 'We deep-dive into your project requirements, technical constraints, and long-term goals.'
    },
    {
        number: '02',
        title: 'Strategic Drafting',
        description: 'Our engineers create high-fidelity 2D and 3D drafts using industry-leading CAD tools.'
    },
    {
        number: '03',
        title: 'Technical Review',
        description: 'Rigorous quality checks ensure 100% accuracy and compliance with global engineering standards.'
    },
    {
        number: '04',
        title: 'Final Delivery',
        description: 'Seamless handover of all digital assets, blueprints, and BIM models for project execution.'
    }
];

const Process = () => {
    return (
        <section id="process" className={styles.process}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="gradient-text">Our Engineering Process</h2>
                    <p>A systematic approach to technical excellence and precision.</p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.stepHeader}>
                                <span className={styles.stepNumber}>{step.number}</span>
                                <div className={styles.stepLine}></div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
