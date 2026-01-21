export interface Project {
    title: string;
    slug: string;
    category: string;
    image: string;
    client?: string;
    location?: string;
    completionDate?: string;
    challenge: string;
    solution: string;
    stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
    {
        title: 'Dubai Sky Tower',
        slug: 'dubai-sky-tower',
        category: 'Architecture',
        image: '/images/bim.png',
        client: 'Al-Futtaim Developers',
        location: 'Dubai, UAE',
        completionDate: '2024',
        challenge: 'Designing a 60-story mixed-use tower that withstands extreme wind loads while maintaining a sleek, twisted aesthetic.',
        solution: 'We utilized parametric BIM modeling to optimize the structural diagrid system. This allowed us to reduce steel tonnage by 15% while achieving the complex twisted geometry requested by the architect.',
        stats: [
            { label: 'Height', value: '280m' },
            { label: 'Floors', value: '60' },
            { label: 'Area', value: '1.2M sq.ft' }
        ]
    },
    {
        title: 'Jet Engine Part',
        slug: 'jet-engine-part',
        category: 'Mechanical',
        image: '/images/mechanical.png',
        client: 'AeroTech Dynamics',
        location: 'Germany',
        completionDate: '2023',
        challenge: 'Reverse engineering a legacy turbine blade with complex curvature and internal cooling channels for which original drawings were lost.',
        solution: 'Using high-resolution 3D scanning and surface modeling in SolidWorks, we recreated the part with 0.01mm accuracy. We optimized the cooling channels for better airflow using CFD simulation.',
        stats: [
            { label: 'Accuracy', value: '±0.01mm' },
            { label: 'Material', value: 'Titanium Alloy' }
        ]
    },
    {
        title: 'Residential Villa',
        slug: 'residential-villa',
        category: 'Residential',
        image: '/images/architectural.png',
        client: 'Private Client',
        location: 'California, USA',
        completionDate: '2025',
        challenge: 'Creating a modern, net-zero energy home on a steep hillside with strict zoning height restrictions.',
        solution: 'We designed a stepped-level foundation that hugged the terrain, minimizing excavation. Large south-facing glazing with passive shading enhanced natural light without overheating.',
        stats: [
            { label: 'Size', value: '4,500 sq.ft' },
            { label: 'Energy', value: 'Net-Zero' }
        ]
    },
    {
        title: 'Tech Hub Park',
        slug: 'tech-hub-park',
        category: 'Architecture',
        image: '/images/hero.png',
        client: 'Silicon Valley Corp',
        location: 'Austin, Texas',
        completionDate: '2024',
        challenge: 'Master planning a 50-acre campus that fosters collaboration while providing quiet zones for deep work.',
        solution: 'Our design featured a central "green spine" park connecting five main office buildings. We used pedestrian flow analysis to place amenities effectively.',
        stats: [
            { label: 'Site Area', value: '50 Acres' },
            { label: 'Buildings', value: '5' }
        ]
    },
    {
        title: 'Industrial Assembly',
        slug: 'industrial-assembly',
        category: 'Mechanical',
        image: '/images/mep.png',
        client: 'HeavyMach Inc.',
        location: 'China',
        completionDate: '2023',
        challenge: 'Designing an automated conveyor assembly line for heavy automotive parts with limited floor space.',
        solution: 'We engineered a multi-level vertical conveyor system. Detailed interference checking in Inventor ensured zero collisions between moving parts.',
        stats: [
            { label: 'Throughput', value: '500 units/hr' },
            { label: 'Efficiency', value: '+30%' }
        ]
    },
    {
        title: 'Luxury Apartment',
        slug: 'luxury-apartment',
        category: 'Residential',
        image: '/images/architectural.png',
        client: 'Elite Homes',
        location: 'London, UK',
        completionDate: '2025',
        challenge: 'Refurbishing a heritage listed building into luxury apartments without damaging the historic facade.',
        solution: 'We used laser scanning to map the existing structure. The interior design was coordinated using BIM to route modern MEP systems through narrow historic voids.',
        stats: [
            { label: 'Units', value: '12' },
            { label: 'Value', value: '£25M' }
        ]
    }
];
