import Hero from '../components/Hero';
import AboutStats from '../components/AboutStats';
import Features from '../components/Features';
import MediaSection from '../components/MediaSection';
import Testimonials from '../components/Testimonials';
import NewsFAQ from '../components/NewsFAQ';
import ContactStrip from '../components/ContactStrip';
import SEO from '../components/SEO';

const Home = () => {
 return (
 <main>
 <SEO canonical="/" />
 <Hero />
 <AboutStats />
 {/* <Features /> */}
 <MediaSection />
 <Testimonials />
 <NewsFAQ />
 <ContactStrip />
 </main>
 );
};

export default Home;
