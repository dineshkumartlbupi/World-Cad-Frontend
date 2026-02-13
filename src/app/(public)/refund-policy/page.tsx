import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
    title: 'Refund Policy | World Cad Design',
    description: 'Refund Policy for World Cad Design. Transparency in our billing and cancellation processes.',
};

export default function RefundPolicy() {
    return (
        <LegalPageLayout
            title="Refund Policy"
            lastUpdated={new Date().toLocaleDateString()}
        >
            <section>
                <h2>1. Our Commitment</h2>
                <p>
                    World Cad Design is committed to delivering high-quality engineering drafts and models. We value your business and aim for complete satisfaction. Our refund policy is designed to be fair and transparent for both parties.
                </p>
            </section>

            <section>
                <h2>2. Cancellation Before Work Begins</h2>
                <p>
                    If a project is cancelled by the Client after payment but <strong>before</strong> our design team has started any work, a full refund (100%) will be issued, minus any applicable transaction processing fees.
                </p>
            </section>

            <section>
                <h2>3. Milestone-Based Work</h2>
                <p>
                    For larger projects structured with milestones (e.g., 50% Draft, 100% Final):
                </p>
                <ul>
                    <li>Payments structured for completed and approved milestones are <strong>non-refundable</strong>. These payments represent the time and expertise already invested by our team.</li>
                    <li>If a project is cancelled mid-way, the Client is responsible for payment proportional to the hours worked up to the point of cancellation.</li>
                </ul>
            </section>

            <section>
                <h2>4. Quality Guarantee</h2>
                <p>
                    If the deliverables do not meet the specifications provided in the original scope of work:
                </p>
                <ul>
                    <li>We will provide <strong>unlimited corrections</strong> at no additional cost until the work matches the agreed-upon requirements.</li>
                    <li>Refunds are not issued for dissatisfaction based on artistic preference alone (e.g., in 3D rendering) where specific stylistic guidelines were not provided beforehand.</li>
                </ul>
            </section>

            <section>
                <h2>5. Contact for Billing Issues</h2>
                <p>
                    If you believe there has been a billing error or have a dispute, please contact our accounts department immediately within 14 days of the invoice date.<br /><br />
                    Email: accounts@worldcaddesign.com
                </p>
            </section>
        </LegalPageLayout>
    );
}
