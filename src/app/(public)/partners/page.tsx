import React from 'react';
import PageHeader from '@/components/PageHeader';

const Partners = () => {
    return (
        <div>
            <PageHeader 
                title="Partners" 
                description="Discover our trusted partners and strategic collaborations."
            />
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Partners</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        We're currently updating this section with information about our partner network and collaborations.
                    </p>
                    <p className="text-gray-500">
                        Please check back soon to learn about the organizations we work with to deliver exceptional value.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Partners;
