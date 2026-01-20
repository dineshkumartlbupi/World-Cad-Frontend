'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import styles from './Blogs.module.css';

const blogPosts = [
    {
        id: 1,
        title: 'The Future of BIM in Construction',
        excerpt: 'Exploring how Building Information Modeling is transforming the construction industry with real-time collaboration and data-driven insights.',
        category: 'BIM Technology',
        date: 'Jan 5, 2026',
        readTime: '5 min read',
        image: '/images/bim.png'
    },
    {
        id: 2,
        title: 'MEP Design Best Practices for Modern Buildings',
        excerpt: 'Essential guidelines and strategies for efficient Mechanical, Electrical, and Plumbing design in contemporary architecture.',
        category: 'Engineering',
        date: 'Dec 28, 2025',
        readTime: '7 min read',
        image: '/images/mep.png'
    },
    {
        id: 3,
        title: '3D Rendering: From Concept to Photorealism',
        excerpt: 'A comprehensive guide to creating stunning photorealistic visualizations that bring architectural concepts to life.',
        category: 'Visualization',
        date: 'Dec 20, 2025',
        readTime: '6 min read',
        image: '/images/architectural.png'
    },
    {
        id: 4,
        title: 'Sustainable Design with CAD Technology',
        excerpt: 'How CAD tools are enabling architects and engineers to design more environmentally sustainable buildings.',
        category: 'Sustainability',
        date: 'Dec 15, 2025',
        readTime: '8 min read',
        image: '/images/hero.png'
    },
    {
        id: 5,
        title: 'Industrial Design Workflow Optimization',
        excerpt: 'Streamlining product design processes with advanced CAD techniques and automation tools.',
        category: 'Industrial Design',
        date: 'Dec 10, 2025',
        readTime: '5 min read',
        image: '/images/mechanical.png'
    },
    {
        id: 6,
        title: 'CAD Standards and Documentation',
        excerpt: 'Maintaining consistency and quality across projects through proper CAD standards and documentation practices.',
        category: 'Best Practices',
        date: 'Dec 5, 2025',
        readTime: '6 min read',
        image: '/images/team.png'
    }
];

export default function BlogsPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Insights & Resources"
                subtitle="Expert insights, industry trends, and technical guides from our CAD design professionals."
            />

            <section className={styles.blogs}>
                <div className="container">
                    <div className={styles.grid}>
                        {blogPosts.map((post, index) => (
                            <SectionReveal key={post.id} delay={index * 0.1}>
                                <article
                                    className={styles.blogCard}
                                >
                                    <div className={styles.imageWrapper}>
                                        <img src={post.image} alt={post.title} />
                                        <div className={styles.category}>{post.category}</div>
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.meta}>
                                            <span>{post.date}</span>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <a href="#" className={styles.readMore}>
                                            Read More →
                                        </a>
                                    </div>
                                </article>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
