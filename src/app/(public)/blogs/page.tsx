'use client'

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import Link from 'next/link';
import styles from './Blogs.module.css';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image: string;
  isActive: boolean;
  createdAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/blogs');
        const data = await res.json();

        const activeBlogs = data.filter((blog: Blog) => blog.isActive);
        setBlogs(activeBlogs);
      } catch (error) {
        console.error('Failed to fetch blogs', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

    return (
        <main>
            <Navbar />
            <PageHeader
                title="Insights & Resources"
                subtitle="Expert insights, industry trends, and technical guides from our CAD design professionals."
            />

            <section className={styles.blogs}>
  <div className="container">
    {loading ? (
      <p style={{ textAlign: 'center' }}>Loading blogs...</p>
    ) : (
      <div className={styles.grid}>
        {blogs.map((post, index) => (
          <SectionReveal key={post._id} delay={index * 0.1}>
            <article className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} />
                <div className={styles.category}>{post.category}</div>
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <Link
                  href={`/blogs/${post.slug}`}
                  className={styles.readMore}
                >
                  Read More →
                </Link>
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>
    )}
  </div>
</section>



        </main>
    );
}
