import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';

const HERO_SLIDES = [
  {
    image: hero1,
    heading: 'Transforming Potential into Accomplishments',
    sub: 'Personalized education that nurtures passions, hones talents and ignites the spark that makes your child unique.',
  },
  {
    image: hero2,
    heading: 'Excellence from Nursery to Secondary',
    sub: 'A rigorous, caring curriculum designed to challenge every student and build confident, capable young leaders.',
  },
  {
    image: hero3,
    heading: 'A Safe Space for Every Learner',
    sub: 'We celebrate every child\'s uniqueness in an inclusive environment where curiosity thrives and character is built.',
  },
  {
    image: hero4,
    heading: 'Shaping the Future, One Student at a Time',
    sub: 'Join a community of over 500 proud alumni and counting — where academic success meets lifelong purpose.',
  },
];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-7rem)] flex flex-col justify-end overflow-hidden group">
        {/* Carousel Backgrounds */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${idx === currentIdx ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={`Campus Background ${idx + 1}`}
              className="w-full h-full object-cover object-center lg:object-top"
            />
          </div>
        ))}

        {/* Left/Right Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Slide Text — fades with the image */}
        <div className="relative z-10 px-8 pb-20 pt-32 max-w-7xl mx-auto w-full flex flex-col items-start justify-center h-full pointer-events-none">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute transition-all duration-700 max-w-3xl ${idx === currentIdx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            >
              <div className="bg-black/30 p-8 md:p-12 rounded space-y-6 pointer-events-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
                  {slide.heading}
                </h1>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  {slide.sub}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href="/admissions" className="bg-primary hover:bg-blue-600 text-white px-8 py-3.5 font-bold transition-colors flex items-center gap-2 shadow-lg rounded">
                    Apply Now <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Social Strip */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 max-w-sm md:hidden flex justify-center items-center gap-8 bg-primary/90 py-3 z-30 rounded-t-2xl shadow-lg pointer-events-auto">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-sky-200 transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://wa.me/2348099587456" target="_blank" rel="noreferrer" className="text-white hover:text-sky-200 transition-colors" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a href="mailto:info@ncgos.edu" className="text-white hover:text-sky-200 transition-colors" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
