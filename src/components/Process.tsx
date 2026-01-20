import React from 'react';
import styles from './Process.module.css';

const steps = [
    {
        id: "01",
        title: "Send Request",
        description: "Submit your project requirements via our dashboard or email.",
        icon: "📤"
    },
    {
        id: "02",
        title: "CAD Drafting",
        description: "Our experts create precision measurement reports.",
        icon: "📐"
    },
    {
        id: "03",
        title: "Quality Check",
        description: "Rigorous QA to ensure 99.9% accuracy.",
        icon: "✅"
    },
    {
        id: "04",
        title: "Delivery",
        description: "Receive your permit-ready files in <24 hours.",
        icon: "🚀"
    },
    {
        id: "05",
        title: "Scale",
        description: "Win more jobs with faster turnaround times.",
        icon: "📈"
    }
];

const Process = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>How World Cad Design Works</h2>
                    <p className={styles.subheading}>A seamless workflow designed for roofing and solar professionals.</p>
                </div>

                <div className={styles.stepsContainer}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepItem}>
                            <div className={styles.iconWrapper}>
                                <div className={styles.iconCircle}>
                                    {step.icon}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={styles.connector} />
                                )}
                            </div>
                            <div className={styles.content}>
                                <span className={styles.stepId}>Step {step.id}</span>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
