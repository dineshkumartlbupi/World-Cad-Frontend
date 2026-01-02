import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionReveal from '@/components/SectionReveal';
import styles from './ServicesPage.module.css';

const detailedServices = [
    {
        title: 'Architectural Drafting',
        details: 'From conceptual sketches to permit-ready construction documents. We provide detailed floor plans, elevations, and sections.',
        features: ['2D Floor Plans', 'Elevation Drawings', 'Section Details', 'Permit Sets'],
        image: '/images/architectural.png'
    },
    {
        title: '3D BIM Modeling',
        details: 'Intelligent 3D models that store functional and physical data. We use Revit and ArchiCAD for comprehensive BIM coordination.',
        features: ['Quantity Takeoffs', 'Clash Detection', '4D Scheduling', 'Asset Management'],
        image: '/images/bim.png'
    },
    {
        title: 'Mechanical Design',
        details: 'Precision engineering design for industrial parts and machinery. We handle complex assemblies and manufacturing drawings.',
        features: ['Solid Modeling', 'Assembly Drawings', 'FEA Analysis', 'Reverse Engineering'],
        image: '/images/mechanical.png'
    },
    {
        title: 'Electrical & Plumbing',
        details: 'Integrated MEP solutions that ensure system efficiency and building code compliance.',
        features: ['Lighting Layouts', 'HVAC Design', 'Pipe Routing', 'Load Calculations'],
        image: '/images/mep.png'
    }
];

export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Our Services"
                subtitle="World Cad Design LLP provides end-to-end CAD solutions for architecture, engineering, and manufacturing industries."
            />

            <section className={styles.detailedGrid}>
                <div className="container">
                    <div className={styles.serviceCards}>
                        {detailedServices.map((service, index) => (
                            <SectionReveal key={index}>
                                <div className={styles.serviceItem}>
                                    <div className={styles.textContent}>
                                        <h2>{service.title}</h2>
                                        <p>{service.details}</p>
                                        <ul className={styles.featureList}>
                                            {service.features.map((feature, i) => (
                                                <li key={i}><span>✓</span> {feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.visualContent}>
                                        <div className={styles.glassImg}>
                                            <img src={service.image} alt={service.title} />
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
