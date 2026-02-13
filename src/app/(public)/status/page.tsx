import React from 'react';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';

export const metadata = {
    title: 'System Status | World Cad Design',
    description: 'Real-time system status and service availability for World Cad Design.',
};

export default function StatusPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="System Status"
                subtitle="Real-time monitoring of our services"
            />

            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        textAlign: 'center',
                        padding: '40px',
                        backgroundColor: '#F4F6F8',
                        borderRadius: '12px',
                        border: '1px solid #DFE1E6'
                    }}>
                        <h2 style={{ color: '#1051b3', marginBottom: '20px' }}>
                            🚀 Coming Soon
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#5E6C84', lineHeight: '1.6', marginBottom: '20px' }}>
                            We will update this page soon with real-time system status monitoring.
                        </p>
                        <p style={{ color: '#7A869A', marginBottom: '30px' }}>
                            In the meantime, if you experience any issues with our services, please contact us at <strong>support@worldcaddesign.com</strong> or call our support team.
                        </p>
                        <div style={{
                            padding: '20px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '8px',
                            marginTop: '30px',
                            border: '1px solid #EBECF0'
                        }}>
                            <p style={{ marginBottom: '10px' }}>
                                <strong>All Services:</strong> <span style={{ color: '#2D9D5B' }}>✓ Operational</span>
                            </p>
                            <p style={{ color: '#7A869A', fontSize: '0.9rem' }}>
                                Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
