import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Features from './components/Features';
import VideoCeremony from './components/VideoCeremony';
import Testimonials from './components/Testimonials';
import NewsFAQ from './components/NewsFAQ';
import ContactStrip from './components/ContactStrip';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  // Activate scroll-reveal animations globally
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutStats />
        <Features />
        <VideoCeremony />
        <Testimonials />
        <NewsFAQ />
        <ContactStrip />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

