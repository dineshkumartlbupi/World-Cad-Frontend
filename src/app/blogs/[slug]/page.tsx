'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';

import PageHeader from '@/components/PageHeader';
import { blogPosts } from '@/data/blogPosts';
import styles from './BlogPost.module.css';

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return notFound();
    }

    return (
        <main>
            <Navbar />
            <PageHeader
                title={post.category}
                subtitle={`Published on ${post.date} • ${post.readTime}`}
            />

            <article className={styles.article}>
                <div className="container">
                    <div className={styles.contentWrapper}>
                        <h1 className={styles.title}>{post.title}</h1>
                        <div className={styles.imageWrapper}>
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div
                            className={styles.body}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        <div className={styles.backLink}>
                            <a href="/blogs" className="btn btn-outline">← Back to Blogs</a>
                        </div>
                    </div>
                </div>
            </article>


        </main>
    );
}
