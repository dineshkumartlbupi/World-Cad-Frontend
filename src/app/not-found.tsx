import Link from 'next/link';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.blob + ' ' + styles.blob1}></div>
      <div className={styles.blob + ' ' + styles.blob2}></div>
      
      <div className={styles.glassCard}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.description}>
          Oops! The page you're looking for seems to have wandered off the grid. 
          Let's get you back to familiar territory.
        </p>
        <Link href="/" className={styles.homeButton}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
