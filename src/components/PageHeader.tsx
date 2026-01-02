import React from 'react';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
    return (
        <div className={styles.header}>
            <div className="container">
                <h1 className="gradient-text">{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default PageHeader;
