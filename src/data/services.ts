export interface Service {
    title: string;
    slug: string;
    details: string; // Short summary
    fullDescription: string; // Long description for detail page
    features: string[];
    image: string;
    benefits?: string[];
    process?: string[];
}

export const services: Service[] = [
    {
        title: 'Architectural Drafting',
        slug: 'architectural-drafting',
        details: 'From conceptual sketches to permit-ready construction documents. We provide detailed floor plans, elevations, and sections.',
        fullDescription: 'Our Architectural Drafting service is the backbone of successful construction projects. We bridge the gap between creative vision and technical reality. Whether you are an architect needing support for large projects or a homeowner needing permit drawings, our team delivers high-precision CAD files complying with local building codes (IBC, CBC, etc.).',
        features: ['2D Floor Plans', 'Elevation Drawings', 'Section Details', 'Permit Sets'],
        image: '/images/architectural.png',
        benefits: [
            '100% Layer Standard Compliance (AIA)',
            'Fast Turnaround for Redlines',
            'Schedules & Material Legends Included'
        ],
        process: ['Input Review', 'Preliminary Draft', 'Client Review', 'Final Construction Set']
    },
    {
        title: '3D BIM Modeling',
        slug: '3d-bim-modeling',
        details: 'Intelligent 3D models that store functional and physical data. We use Revit and ArchiCAD for comprehensive BIM coordination.',
        fullDescription: 'Building Information Modeling (BIM) is not just 3D modeling; it is smart construction. We create LOD 200 to LOD 500 models that serve as a database for your building. Our models are used for clash detection, quantity take-offs, and facility management.',
        features: ['Quantity Takeoffs', 'Clash Detection', '4D Scheduling', 'Asset Management'],
        image: '/images/bim.png',
        benefits: [
            'Reduce Construction Waste',
            ' Visualize Before Building',
            'Accurate BOM (Bill of Materials)'
        ]
    },
    {
        title: 'Mechanical Design',
        slug: 'mechanical-design',
        details: 'Precision engineering design for industrial parts and machinery. We handle complex assemblies and manufacturing drawings.',
        fullDescription: 'From individual components to complex automated assemblies, our Mechanical Design services cover the full product lifecycle. We use SolidWorks and Inventor to create manufacturable 3D parts and 2D fabrication drawings with GD&T.',
        features: ['Solid Modeling', 'Assembly Drawings', 'FEA Analysis', 'Reverse Engineering'],
        image: '/images/mechanical.png',
        benefits: [
            'DFM (Design for Manufacturing) feedback',
            'Tolerance Stack-up Analysis',
            'STEP/IGES file formats for CNC'
        ]
    },
    {
        title: 'Electrical & Plumbing',
        slug: 'electrical-plumbing',
        details: 'Integrated MEP solutions that ensure system efficiency and building code compliance.',
        fullDescription: 'A building works only as well as its systems. Our Electrical and Plumbing design services ensure that your power, lighting, water, and waste systems are efficient, compliant, and clash-free. We coordinate tightly with structural elements.',
        features: ['Lighting Layouts', 'HVAC Design', 'Pipe Routing', 'Load Calculations'],
        image: '/images/mep.png',
        benefits: [
            'Energy Efficient Design',
            'Code Compliance Checks',
            'Coordinated Service Drawings'
        ]
    }
];
