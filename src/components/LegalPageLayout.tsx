import React, { ReactNode } from 'react';
import styles from './LegalPageLayout.module.css';

interface LegalPageLayoutProps {
    title: string;
    lastUpdated?: string;
    children: ReactNode;
}

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>{title}</h1>
                    {lastUpdated && (
                        <span className={styles.lastUpdated}>
                            Last updated: {lastUpdated}
                        </span>
                    )}
                </div>
            </header>

            <main className={styles.contentContainer}>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </div>
    );
};

export default LegalPageLayout;
