import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';
import styles from './ContactPage.module.css';

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <PageHeader
                title="Contact Us"
                subtitle="Connect with World Cad Design LLP for a consultation or professional project estimation."
            />

            <div className={styles.fullContact}>
                <div className="container">
                    <Contact />
                </div>
            </div>

            <section className={styles.mapSection}>
                <div className="container">
                    <div className={styles.mapContainer}>
                        {/* Placeholder for Map */}
                        <div className={styles.mapPlaceholder}>
                            <div className={styles.mapOverlay}>
                                <h3>Our Global Headquarters</h3>
                                <p>Block A, Loni Industrial Area,<br />Ghaziabad, Uttar Pradesh 201007, INDIA</p>
                                <div className={styles.badge}>India Office</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
