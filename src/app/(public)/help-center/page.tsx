import React from 'react';
import PageHeader from '@/components/PageHeader';

const HelpCenter = () => {
    return (
        <div>
            <PageHeader 
                title="Help Center" 
                description="Find answers to common questions and get the support you need."
            />
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Help Center</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        We're currently updating this section with helpful resources and FAQs.
                    </p>
                    <p className="text-gray-500">
                        Please check back soon for guides, tutorials, and answers to frequently asked questions.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HelpCenter;
