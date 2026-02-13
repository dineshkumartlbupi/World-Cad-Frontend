import React from 'react';
import PageHeader from '@/components/PageHeader';

const Process = () => {
    return (
        <div>
            <PageHeader 
                title="Our Process" 
                description="Learn how we approach projects and deliver exceptional results."
            />
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Process</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        We're currently updating this section with detailed information about our project workflow and methodology.
                    </p>
                    <p className="text-gray-500">
                        Please check back soon to see how we ensure quality and efficiency in every project.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Process;
