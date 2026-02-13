import React from 'react';
import PageHeader from '@/components/PageHeader';

const Glossary = () => {
    return (
        <div>
            <PageHeader 
                title="Glossary" 
                description="Understand key terms and concepts related to solar and roofing engineering."
            />
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Glossary</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        We're currently updating this section with comprehensive definitions and explanations.
                    </p>
                    <p className="text-gray-500">
                        Please check back soon for a detailed glossary of industry terms and concepts.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Glossary;
