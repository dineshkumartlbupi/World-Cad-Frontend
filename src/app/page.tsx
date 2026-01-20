
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Contact from '@/components/Contact';

import SectionReveal from '@/components/SectionReveal';

export default function Home() {
  return (
    <main>

      <Hero />
      <TrustedBy />

      <SectionReveal>
        <Process />
      </SectionReveal>

      <SectionReveal>
        <Features />
      </SectionReveal>

      <SectionReveal>
        <Testimonials />
      </SectionReveal>

      <SectionReveal>
        <Portfolio />
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>


    </main>
  );
}
