import Navbar from '@/components/Navbar';
import CinematicScroll from '@/components/CinematicScroll';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div id="VERCEL_TEST_v7" style={{display: 'none'}}>VERCEL TEST V7</div>
      <Navbar />
      <main>
        <CinematicScroll />
        <PortfolioSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
