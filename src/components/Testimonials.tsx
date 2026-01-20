'use client';

import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        quote: "World Cad Design revolutionized our workflow. We get accurate measurements in hours, not days.",
        author: "Sarah Jenkins",
        role: "Project Manager, Apex Roofing",
        image: "/images/hero.png" // Placeholder, should be user avatars
    },
    {
        id: 2,
        quote: "The solar permit designs are flawless. It helped us speed up our installation process by 40%.",
        author: "Mike Ross",
        role: "CEO, SolarTech Solutions",
        image: "/images/hero.png"
    },
    {
        id: 3,
        quote: "Their architectural drafts are precise and professional. A true partner for our design firm.",
        author: "Emily Chen",
        role: "Lead Architect, Urban Spaces",
        image: "/images/hero.png"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Loved by professionals everywhere</h2>
                    <p>Join hundreds of companies scaling with our design services.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.card}>
                            <div className={styles.quoteMark}>“</div>
                            <p className={styles.quote}>{testimonial.quote}</p>
                            <div className={styles.authorInfo}>
                                <div className={styles.avatarPlaceholder}>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className={styles.author}>{testimonial.author}</h4>
                                    <span className={styles.role}>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
