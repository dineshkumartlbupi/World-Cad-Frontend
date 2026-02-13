export interface SubService {
    title: string;
    description: string;
    features: string[];
    image: string;
    benefits?: string[];
    process?: string[];
    diagrams?: string[];
}
// test
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
    subServices?: SubService[];
}

export const services: Service[] = [
    {
        title: 'Solar Design Services',
        slug: 'solar-design-service',
        details: 'Premier source for Residential & Commercial Solar Design and EV Permitting.',
        fullDescription: 'World CAD Design LLP provides comprehensive solar design solutions tailored to meet the dynamic needs of the renewable energy industry. Whether you are a residential installer or a commercial developer, our expert team delivers precise, code-compliant plan sets that streamline the permitting process. We act as your dedicated engineering back-office, ensuring speed, accuracy, and reliability in every project.',
        features: [
            'Nationwide Permitting Support',
            'Residential & Commercial Expertise',
            'Fast Turnaround Times',
            'Full Engineering Stamping'
        ],
        image: '/images/solar_design_service.png',
        process: [
            'Project Intake',
            'Design & Engineering',
            'Quality Assurance',
            'Delivery & Revisions'
        ],
        subServices: [
            {
                title: 'Residential Solar Design Services',
                description: 'Our core expertise lies in high-volume residential solar permitting. We provide complete plan sets that include PV layouts, stringing diagrams, electrical calculations, and mounting details, all optimized for AHJ and utility approval. We support rooftop, ground-mount, and canopy installations.',
                features: ['PV Plan Sets', 'Single Line Diagrams', 'Battery Storage Design', 'Shading Analysis', 'NEC Code Compliance'],
                image: '/images/residential_solar_design_premium.png',
                process: ['Proposal Design', 'Permit Plan Sets', 'Interconnection Apps', 'As-Built Drawings'],
                diagrams: [
                   '/images/cad_blueprint_solar.png',
                   '/images/solar_rooftop_cad.png'
                ]
            },
            {
                title: 'Proposal Design',
                description: 'Stop using generic 2D layouts. Our premium 3D sales proposals visualize the homeowners potential savings and aesthetic impact. We combine accurate production modeling with beautiful 3D renders to create a proposal that builds trust and excitement.',
                features: ['Photorealistic 3D Renders', 'Shading & Production Analysis', 'Financial Savings Charts', 'Custom Branding'],
                image: '/images/proposal_design_sample.jpg',
                process: ['Address & Bill Input', '3D Modeling', 'Financial Setup', 'Proposal Generation']
            },
            {
                title: 'Permit Planset Design',
                description: 'Comprehensive and code-compliant solar permit packages designed for rapid approval. Our plan sets include site plans, structural details, electrical three-line diagrams, and safety labels, ensuring your project meets all local AHJ and NEC standards.',
                features: ['NEC Compliant Electrical Diagrams', 'Site Plan & Roof Layouts', 'Safety Labeling Requirements', 'Fire Setback Compliance'],
                image: '/images/permit_planset_design.png',
                process: ['Site Assessment', 'Code Review', 'Drafting & Engineering', 'AHJ Submission']
            },
            {
                title: 'As-Built Drawing Design',
                description: 'Accurate post-installation drawings that reflect the field conditions. We update original plans with redlines and field changes to ensure final inspections pass smoothly and system records are exact for future maintenance.',
                features: ['Redline Updates', 'Field Field Verification', 'Final Inspection Support', 'System Record Documentation'],
                image: '/images/as_built_drawing_design.png',
                process: ['Redline Collection', 'Plan Updates', 'Engineering Review', 'Final Delivery']
            },
            {
                title: 'Add-On & Solar Design',
                description: 'Expert design for expanding existing solar systems. We handle compatibility checks, inverter resizing, and Main Panel Upgrades (MPU) if necessary to accommodate increased capacity while maintaining system integrity.',
                features: ['System Compatibility Checks', 'MPU Load Calculations', 'Inverter Matching', 'Expansion Permitting'],
                image: '/images/add_on_solar_design.png',
                process: ['Existing System Audit', 'Expansion Design', 'Load Calculation', 'Permit Plan']
            },
            {
                title: 'Solar Carport Design',
                description: 'Specialized design services for solar carports and canopies. We integrate structural robust design with optimal PV placement, perfect for maximizing production in limited roof space scenarios or providing dual-use functionality.',
                features: ['Structural Foundation Design', 'Cantilever & T-Structure Layouts', 'EV Charging Integration', 'Shading Optimization'],
                image: '/images/solar_carport_design.png',
                process: ['Site Survey', 'Structural Design', 'Electrical Layout', 'Permit Package']
            },
            {
                title: 'Interconnection Application Design',
                description: 'Streamline your utility approval process with our interconnection support. We prepare all necessary electrical single-line diagrams, site maps, and technical data sheets required by utility companies for grid connectivity.',
                features: ['Utility-Specific SLDs', 'Site Maps', 'Technical Data Sheet Preparation', 'Utility Coordination'],
                image: '/images/interconnection_application_design.png',
                process: ['Utility Requirement Check', 'Document Preparation', 'Application Support', 'Approval Tracking']
            },
            {
                title: 'Commercial Solar Design',
                description: 'We handle complex commercial, industrial, and agricultural solar projects (100kW - 5MW+). Our commercial designs account for interconnection complexity, voltage drop optimization, and specific structural considerations for flat roofs or carports.',
                features: ['Commercial PV System Design', 'MW Scale Plant Layouts', 'Commercial Battery Storage', 'Voltage Drop Analysis', 'Equipment Specification'],
                image: '/images/commercial_solar_design_premium.png', // Using available image
                process: ['Feasibility Study', 'System Layout', 'Electrical Engineering', 'Permit Packages'],
                diagrams: ['/images/solar-panel-diagram.png']
            },
            {
                title: 'Structural Engineering',
                description: 'Safety and compliance are paramount. Our licensed structural engineers provide stamped letters. We analyze roof load capacity, wind uplift, and snow loads to ensure your solar installation or building addition is structurally sound and code-compliant.',
                features: ['PE Stamped Letters', 'Wind & Snow Load Analysis', 'Truss Reinforcement', 'Foundation Design'],
                image: '/images/structural_engineering_solar.png',
                process: ['Data Collection', 'Structural Analysis', 'Reinforcement Design', 'PE Stamping']
            },
            {
                title: 'EV Charging Infrastructure',
                description: 'As electric vehicle adoption grows, so does the need for rapid, compliant infrastructure. We provide full electrical load calculations, site plans, and single-line diagrams for Level 2 and DC Fast Charging stations. We ensure ADA compliance and utility coordination.',
                features: ['Load Calculations', 'Site Plan Layouts', 'ADA Compliance', 'Single Line Diagrams'],
                image: '/images/ev_charging_design.png',
                process: ['Site Assessment', 'Load Analysis', 'Electrical Layout', 'Permit Application'],
                diagrams: [
                    '/images/ev_charging_design.png'
                ]
            }
        ]
    },
    {
        title: 'Roofing Design Services',
        slug: 'roofing-design-service',
        details: 'Professional roofing design services delivering precise 3D models, measurement reports, and material takeoffs.',
        fullDescription: 'We offer specialized Roofing Design and Engineering services tailored for contractors, architects, and insurance adjusters. Our detailed CAD drawings and 3D models provide exact measurements and material requirements, eliminating guesswork and minimizing waste. Whether for new construction or storm damage assessment, our structural designs ensure safety, durability, and aesthetic alignment. We support various roofing systems including asphalt, tile, metal, and flat roofs.',
        features: ['Precise Roof Measurements', '3D Roof Modeling', 'Material Takeoffs', 'Storm Damage Assessment'],
        image: '/images/roofing_measurement_service.png',
        benefits: [
            'Accurate Material Ordering',
            'Improved Safety Planning',
            'Professional Client Presentation'
        ],
        process: ['Aerial/Blueprint Import', '3D Model Creation', 'Measurement Extraction', 'Report Delivery'],
        diagrams: [
           '/images/engineering_stamping_service.png'
        ]
    },
    {
    title: 'Solar Sales Proposals',
    slug: 'solar-sales-proposals',
    details: 'Professional 3D solar proposal designs to close more deals.',
    fullDescription: 'Create stunning photorealistic 3D renderings and professional proposals that showcase solar system benefits to homeowners. Our proposals include shading analysis, production estimates, and financial savings projections.',
    features: ['3D Renderings', 'Shading Analysis', 'Production Modeling', 'Financial Projections'],
    image: '/images/sales_proposal_design.png',
    process: ['Site Data Input', '3D Modeling', 'Analysis Setup', 'Proposal Generation']
},
{
    title: 'Structural Engineering',
    slug: 'structural-engineering',
    details: 'PE-stamped structural engineering for solar installations and building projects.',
    fullDescription: 'Our licensed structural engineers provide professional stamps for roof load analysis, wind uplift resistance, snow load calculations, and structural reinforcement design to ensure code compliance.',
    features: ['PE Stamped Letters', 'Load Analysis', 'Truss Design', 'Code Compliance'],
    image: '/images/structural_engineering_solar.png',
    process: ['Data Collection', 'Analysis', 'Design', 'Stamping']
},
{
    title: 'EV Charging Design',
    slug: 'ev-charging-design',
    details: 'Complete electrical design for Level 2 and DC Fast Charging infrastructure.',
    fullDescription: 'Comprehensive EV charging station design including load calculations, site plans, single-line diagrams, ADA compliance, and utility coordination for residential and commercial applications.',
    features: ['Load Calculations', 'Site Plans', 'ADA Compliance', 'Single Line Diagrams'],
    image: '/images/ev_charging_design.png',
    process: ['Site Assessment', 'Load Analysis', 'Design', 'Permitting']
}
];
