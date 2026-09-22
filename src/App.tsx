import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Alumni from './pages/Alumni';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import CTA from './components/CTA';
import SocialSidebar from './components/SocialSidebar';

function App() {
  const location = useLocation();

  // Activate scroll-reveal animations globally on route change
  useEffect(() => {
    // Wait a brief moment for new route elements to mount before attaching observer
    const timeout = setTimeout(() => {
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
    }, 100);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative z-0">
      <Header />
      <SocialSidebar />
      <div className="pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </div>
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
