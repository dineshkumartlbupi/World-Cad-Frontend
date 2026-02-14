'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import styles from './Careers.module.css';

interface Career {
    _id: string;
    position: string;
    department: string;
    experience: string;
    location: string;
    description: string;
    isActive?: boolean;
}


const benefits = [
    { icon: '💼', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive medical, dental, and vision coverage' },
    { icon: '🌴', title: 'Paid Time Off', description: 'Generous vacation and flexible work arrangements' },
    { icon: '📚', title: 'Learning & Development', description: 'Professional training and certification programs' },
    { icon: '🚀', title: 'Career Growth', description: 'Clear paths for advancement and mentorship' },
    { icon: '🌍', title: 'Remote Work', description: 'Flexible work-from-home options' },
];

export default function CareersPage() {
    const [careers, setCareers] = useState<Career[]>([]);
    const [loading, setLoading] = useState(true);

    const handleMailClick = (email: string, position: string) => {
        const subject = `Application for ${position} - WorldCAD`;
        const body = `[Attach your resume and cover letter here.]\n\nBest regards,\n[Your Name]`;

        const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=${encodeURIComponent(email)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        const newWindow = window.open(gmailUrl, '_blank');
        if (newWindow) newWindow.opener = null;
    };

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/careers');
                const data = await res.json();

                const activeCareers = data.filter(
                    (job: Career) => job.isActive !== false
                );

                setCareers(activeCareers);
            } catch (error) {
                console.error('Failed to fetch careers', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCareers();
    }, []);

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Join Our Team"
                subtitle="Build your career with a global leader in CAD design and engineering innovation."
            />

            {/* Benefits Section */}
            <section className={styles.benefits}>
                <div className="container">
                    <SectionReveal>
                        <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '60px' }}>
                            Why Work With Us?
                        </h2>
                    </SectionReveal>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <SectionReveal key={index} delay={index * 0.1}>
                                <div className={styles.benefitCard}>
                                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <section className={styles.openings}>
                <div className="container">
                    <SectionReveal>
                        <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '60px' }}>
                            Open Positions
                        </h2>
                    </SectionReveal>
                    {loading ? (
    <p style={{ textAlign: 'center' }}>Loading positions...</p>
) : (
                    <div className={styles.jobsList}>
                        {careers.map((job, index) => (
                            <SectionReveal key={job._id} delay={index * 0.1}>
                                <div
                                    className={styles.jobCard}
                                >
                                    <div className={styles.jobHeader}>
                                        <div>
                                            <h3>{job.position}</h3>
                                            <div className={styles.jobMeta}>
                                                <span className={styles.department}>{job.department}</span>
                                                <span>•</span>
                                                <span>{job.location}</span>
                                            </div>
                                        </div>
                                        <div className={styles.experience}>{job.experience}</div>
                                    </div>
                                    <p>{job.description}</p>
                                    <button
                                        type="button"
                                        className="btn btn-outline"
                                        onClick={() => handleMailClick('admin@gmail.com', job.position)}
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>)}
                </div>
            </section>
        </main>
    );
}
