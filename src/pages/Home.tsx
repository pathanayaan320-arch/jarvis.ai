import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Screenshots from '../components/Screenshots';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
