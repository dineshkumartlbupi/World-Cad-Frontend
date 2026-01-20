'use client';

import { ReactNode } from 'react';

interface SectionRevealProps {
    children: ReactNode;
    delay?: number;
}

const SectionReveal = ({ children }: SectionRevealProps) => {
    return (
        <div className="section-reveal">
            {children}
        </div>
    );
};

export default SectionReveal;
