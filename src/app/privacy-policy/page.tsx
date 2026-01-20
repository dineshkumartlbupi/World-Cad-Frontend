import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
    title: 'Privacy Policy | World Cad Design',
    description: 'Privacy Policy for World Cad Design. We are committed to protecting your CAD data, intellectual property, and personal information.',
};

export default function PrivacyPolicy() {
    return (
        <LegalPageLayout
            title="Privacy Policy"
            lastUpdated={new Date().toLocaleDateString()}
        >
            <section>
                <h2>1. Introduction</h2>
                <p>
                    Welcome to <strong>World Cad Design LLP</strong> ("we," "our," or "us"). We recognize the critical importance of protecting your intellectual property, proprietary designs, and personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website and CAD/engineering design services.
                </p>
            </section>

            <section>
                <h2>2. Intellectual Property & CAD Data Security</h2>
                <p>
                    Given the nature of our business, we handle sensitive architectural and engineering data. We commit to the following strict standards:
                </p>
                <ul>
                    <li><strong>Non-Disclosure:</strong> All client project files, including DWG, RVT, PDF, and other design formats, are treated as strictly confidential. We are happy to sign a Non-Disclosure Agreement (NDA) prior to project commencement.</li>
                    <li><strong>Data Isolation:</strong> Project files are stored on secure, encrypted servers with access restricted only to the engineering team members directly working on your project.</li>
                    <li><strong>No Resale or Reuse:</strong> We do not reuse, resell, or share your proprietary designs, blocks, or details with other clients or third parties without your explicit written consent.</li>
                </ul>
            </section>

            <section>
                <h2>3. Information We Collect</h2>
                <p>
                    We collect information to provide and improve our services:
                </p>
                <ul>
                    <li><strong>Personal Information:</strong> Name, business email, phone number, and company details provided via our contact forms.</li>
                    <li><strong>Project Data:</strong> Design briefs, sketches, CAD files, and technical specifications uploaded or utilized during the service delivery.</li>
                    <li><strong>Technical Data:</strong> IP addresses, browser type, and usage patterns to analyze website performance and improve user experience.</li>
                </ul>
            </section>

            <section>
                <h2>4. How We Use Your Information</h2>
                <p>
                    Your data is used solely for:
                </p>
                <ul>
                    <li>Delivering requested CAD, BIM, and rendering services.</li>
                    <li>Processing payments and invoicing.</li>
                    <li>Communicating project updates, queries, and deliverables.</li>
                    <li>Improving our internal workflows and website functionality.</li>
                </ul>
            </section>

            <section>
                <h2>5. Data Retention</h2>
                <p>
                    We retain your personal and project data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. Unless otherwise agreed, project files may be archived for a period of up to 3 years to facilitate future revisions, after which they are securely deleted.
                </p>
            </section>

            <section>
                <h2>6. Contact Us</h2>
                <p>
                    For privacy concerns, NDA requests, or to exercise your data rights, please contact our Compliance Team:
                    <br /><br />
                    <strong>World Cad Design LLP</strong><br />
                    Email: support@worldcaddesign.com<br />
                    Address: Block A, Loni Industrial Area, Ghaziabad, Uttar Pradesh 201007, INDIA
                </p>
            </section>
        </LegalPageLayout>
    );
}
