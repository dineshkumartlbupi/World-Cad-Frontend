'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import styles from './Careers.module.css';

const jobOpenings = [
    {
        id: 1,
        title: 'Senior CAD Designer - Architecture',
        department: 'Design',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        experience: '5+ years',
        description: 'Lead architectural CAD projects with expertise in AutoCAD, Revit, and 3D modeling.',
    },
    {
        id: 2,
        title: 'BIM Specialist',
        department: 'Engineering',
        location: 'On-site',
        type: 'Full-time',
        experience: '3+ years',
        description: 'Develop and manage BIM models for large-scale commercial and infrastructure projects.',
    },
    {
        id: 3,
        title: 'MEP Design Engineer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        experience: '4+ years',
        description: 'Design mechanical, electrical, and plumbing systems for diverse building types.',
    },
    {
        id: 4,
        title: '3D Visualization Artist',
        department: 'Design',
        location: 'Hybrid',
        type: 'Full-time',
        experience: '2+ years',
        description: 'Create photorealistic renderings and animations for architectural presentations.',
    },
    {
        id: 5,
        title: 'Structural CAD Technician',
        department: 'Engineering',
        location: 'On-site',
        type: 'Contract',
        experience: '3+ years',
        description: 'Produce detailed structural drawings and documentation using industry-standard tools.',
    },
    {
        id: 6,
        title: 'Junior CAD Drafter',
        department: 'Design',
        location: 'Remote',
        type: 'Full-time',
        experience: '0-2 years',
        description: 'Support the design team with 2D/3D drafting and model development.',
    }
];

const benefits = [
    { icon: '💼', title: 'Competitive Salary', description: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Benefits', description: 'Comprehensive medical, dental, and vision coverage' },
    { icon: '🌴', title: 'Paid Time Off', description: 'Generous vacation and flexible work arrangements' },
    { icon: '📚', title: 'Learning & Development', description: 'Professional training and certification programs' },
    { icon: '🚀', title: 'Career Growth', description: 'Clear paths for advancement and mentorship' },
    { icon: '🌍', title: 'Remote Work', description: 'Flexible work-from-home options' },
];

export default function CareersPage() {
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
                    <div className={styles.jobsList}>
                        {jobOpenings.map((job, index) => (
                            <SectionReveal key={job.id} delay={index * 0.1}>
                                <div
                                    className={styles.jobCard}
                                >
                                    <div className={styles.jobHeader}>
                                        <div>
                                            <h3>{job.title}</h3>
                                            <div className={styles.jobMeta}>
                                                <span className={styles.department}>{job.department}</span>
                                                <span>•</span>
                                                <span>{job.location}</span>
                                                <span>•</span>
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                        <div className={styles.experience}>{job.experience}</div>
                                    </div>
                                    <p>{job.description}</p>
                                    <button className="btn btn-outline">Apply Now</button>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
