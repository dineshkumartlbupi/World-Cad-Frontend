import React from 'react';
import styles from './Process.module.css';

const steps = [
    {
        id: "01",
        title: "Send Request",
        description: "Submit your project requirements via our dashboard or email.",
        icon: "/images/icon_step_request.png"
    },
    {
        id: "02",
        title: "CAD Drafting",
        description: "Our experts create precision measurement reports.",
        icon: "/images/icon_step_drafting.png"
    },
    {
        id: "03",
        title: "Quality Check",
        description: "Rigorous QA to ensure 99.9% accuracy.",
        icon: "/images/icon_step_quality.png"
    },
    {
        id: "04",
        title: "Delivery",
        description: "Receive your permit-ready files in <24 hours.",
        icon: "/images/icon_step_delivery.png"
    },
    {
        id: "05",
        title: "Scale",
        description: "Win more jobs with faster turnaround times.",
        icon: "/images/icon_step_scale.png"
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
                                    <img src={step.icon} alt={step.title} style={{ width: '60%', height: '60%', objectFit: 'fill' }} />
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
