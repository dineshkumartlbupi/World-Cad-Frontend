import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
    title: 'Terms of Service | World Cad Design',
    description: 'Terms of Service for World Cad Design. Guidelines for our CAD and engineering services.',
};

export default function TermsOfService() {
    return (
        <LegalPageLayout
            title="Terms of Service"
            lastUpdated={new Date().toLocaleDateString()}
        >
            <section>
                <h2>1. Scope of Services</h2>
                <p>
                    <strong>World Cad Design LLP</strong> agrees to provide architectural, structural, MEP designing, BIM modeling, and 3D rendering services ("Services") as detailed in the specific project proposal or purchase order. We aim to deliver high-quality, precise drafts that meet industry standards (e.g., AIA, ISO).
                </p>
            </section>

            <section>
                <h2>2. Intellectual Property Rights</h2>
                <p>
                    We believe in clear ownership:
                </p>
                <ul>
                    <li><strong>Client Ownership:</strong> Upon full payment, the Client retains 100% ownership and copyright of all final deliverables (PDFs, DWGs, RVT files, etc.) created specifically for their project.</li>
                    <li><strong>Our Tools:</strong> World Cad Design retains ownership of its standard libraries, templates, macros, and underlying methodologies used to create the deliverables, granting the Client a non-exclusive license to use them within the deliverables.</li>
                </ul>
            </section>

            <section>
                <h2>3. Revisions & Corrections</h2>
                <p>
                    We strive for perfection, but design is an iterative process.
                </p>
                <ul>
                    <li><strong>Standard Revisions:</strong> Our fixed-cost projects typically include up to two (2) rounds of minor revisions at no additional cost, provided the original scope remains unchanged.</li>
                    <li><strong>Errors:</strong> Any technical errors or deviations from the provided instructions will be corrected by us at no additional cost, regardless of the number of revisions.</li>
                    <li><strong>Scope Creep:</strong> Changes to the design intent, new architectural features, or additions requested after the work has begun will be treated as a Change Order and may incur hourly charges.</li>
                </ul>
            </section>

            <section>
                <h2>4. Payments & Billing</h2>
                <p>
                    Invoices are due upon receipt or as per the terms specified in your proposal (e.g., Net 15, Net 30). Late payments may result in a temporary suspension of services or delivery of final files. For large projects, we may require an upfront deposit or milestone-based payments.
                </p>
            </section>

            <section>
                <h2>5. Limitation of Liability</h2>
                <p>
                    While we exercise a high degree of care, World Cad Design is not a licensed Architect or Professional Engineer of Record in all jurisdictions. Our drawings are intended for design and drafting support and should be reviewed and sealed by a licensed professional where required by local law. We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our deliverables.
                </p>
            </section>
        </LegalPageLayout>
    );
}
