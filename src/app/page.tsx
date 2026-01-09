import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <WhyChooseUs />

      <SectionReveal>
        <Services />
      </SectionReveal>

      <Industries />

      <SectionReveal>
        <Process />
      </SectionReveal>

      <SectionReveal>
        <Portfolio />
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>

      <Footer />
    </main>
  );
}
