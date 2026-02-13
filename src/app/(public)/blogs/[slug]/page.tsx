'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import styles from './BlogPost.module.css';
import Link from 'next/dist/client/link';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  content: string;
  createdAt: string;
}

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;
    
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/blogs/slug/${slug}`
        );

        if (!res.ok) {
          setPost(null);
          return;
        }

        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch blog', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Blog not found.</p>;
    return (
        <>
            <PageHeader
                title={post.category}
                subtitle={`Published on ${new Date(
          post.createdAt
        ).toLocaleDateString()}`}
            />

            <article className={styles.article}>
                <div className={styles.blogContainer}>
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
                            <Link href="/blogs" className="btn btn-outline">← Back to Blogs</Link>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
