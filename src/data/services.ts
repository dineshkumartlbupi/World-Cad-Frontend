export interface Service {
    title: string;
    slug: string;
    details: string; // Short summary
    fullDescription: string; // Long description for detail page
    features: string[];
    image: string;
    benefits?: string[];
    process?: string[];
    diagrams?: string[];
}

export const services: Service[] = [

    {
        title: 'Solar Design & Engineering',
        slug: 'solar-storage-design',
        details: 'Complete solar PV and battery storage design sets for residential and commercial permits.',
        fullDescription: 'We specialize in full-service solar design, providing everything from initial sales proposals to stamped permit-ready plan sets. Our team understands NEC codes, fire setbacks, and utility requirements across various states. We optimize string sizing and inverter matching for maximum efficiency.',
        features: ['PV Plan Sets', 'Single Line Diagrams', 'Battery Storage Design', 'Shading Analysis'],
        image: '/images/solar-system-diagram.png',
        benefits: [
            'Fast AHJ Approval',
            'NEC Code Compliant',
            'Battery Integration (Tesla, Enphase, etc.)'
        ],
        diagrams: [
            '/images/solar-system-diagram.png',
            '/images/pv-on-grid-system.jpg',
            '/images/net-metering-works.jpg',
            '/images/solar-panel-diagram.png'
        ]
    },
    {
        title: 'EV Charging Infrastructure',
        slug: 'ev-charging-design',
        details: 'End-to-end electrical design and permitting for residential and commercial EV charging stations.',
        fullDescription: 'As electric vehicle adoption grows, so does the need for rapid, compliant infrastructure. We provide full electrical load calculations, site plans, and single-line diagrams for Level 2 and DC Fast Charging stations. We ensure ADA compliance and utility coordination.',
        features: ['Load Calculations', 'Site Plan Layouts', 'ADA Compliance', 'Single Line Diagrams'],
        image: '/images/ev_charging_design.png',
        benefits: [
            'Utility Coordination Support',
            'Future-Proof Design',
            'Fast Permit Turnaround'
        ],
        process: ['Site Assessment', 'Load Analysis', 'Electrical Layout', 'Permit Application']
    },
    {
        title: 'Structural Engineering',
        slug: 'structural-engineering',
        details: 'PE-stamped structural letters and analysis for rooftop solar and building modifications.',
        fullDescription: 'Safety and compliance are paramount. Our licensed structural engineers provide stamped letters for all 50 states. We analyze roof load capacity, wind uplift, and snow loads to ensure your solar installation or building addition is structurally sound and code-compliant.',
        features: ['PE Stamped Letters', 'Wind & Snow Load Analysis', 'Truss Reinforcement', 'Foundation Design'],
        image: '/images/structural_engineering_solar.png',
        benefits: [
            'Licensed in All 50 States',
            'Quick Turnaround (24-48 hrs)',
            'Risk Mitigation'
        ],
        process: ['Data Collection', 'Structural Analysis', 'Reinforcement Design', 'PE Stamping']
    },
    {
        title: 'Solar Sales Proposals',
        slug: 'solar-sales-proposals',
        details: 'Stunning, high-converting 3D solar proposals that help you close more deals.',
        fullDescription: 'Stop using generic 2D layouts. Our premium 3D sales proposals visualize the homeowners potential savings and aesthetic impact. We combine accurate production modeling with beautiful 3D renders to create a proposal that builds trust and excitement.',
        features: ['Photorealistic 3D Renders', 'Shading & Production Analysis', 'Financial Savings Charts', 'Custom Branding'],
        image: '/images/sales_proposal_design.png',
        benefits: [
            'Higher Close Rates',
            'Premium Brand Image',
            'Accurate Production Estimates'
        ],
        process: ['Address & Bill Input', '3D Modeling', 'Financial Setup', 'Proposal Generation']
    }
];
