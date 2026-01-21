'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import Link from 'next/link';
import styles from './Blogs.module.css';

import { blogPosts } from '@/data/blogPosts';

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
                                        <Link href={`/blogs/${post.slug}`} className={styles.readMore}>
                                            Read More →
                                        </Link>
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
