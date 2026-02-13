import React from 'react';
import PageHeader from '@/components/PageHeader';

const CaseStudies = () => {
    return (
        <div>
            <PageHeader 
                title="Case Studies" 
                description="Explore our real-world project success stories and client achievements."
            />
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Case Studies</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        We're currently updating this section with our latest case studies and success stories.
                    </p>
                    <p className="text-gray-500">
                        Please check back soon to see detailed examples of how we've helped our clients achieve their goals.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
