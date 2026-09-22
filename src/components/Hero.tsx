import { ArrowRight, GraduationCap, Lightbulb, Globe, Users } from 'lucide-react';
import heroImage from '../assets/hero1.png';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-7rem)] flex flex-col justify-end overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${heroImage}?auto=format&fit=crop&w=2000&q=80`}
            alt="University Campus Background"
            className="rounded w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 px-8 pb-20 pt-32 max-w-7xl mx-auto w-full flex flex-col items-start justify-center h-full">
          <div className="bg-black/30 p-8 md:p-12 rounded max-w-3xl space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight animate-fade-in-down"
              style={{ animationDelay: '0.1s' }}
            >
              Transforming potential into accomplishments
            </h1>

            <p
              className="text-white/90 text-base md:text-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Personalized education that nurtures passions, hones talents and ignites the spark that makes your child unique.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in-up"
              style={{ animationDelay: '0.7s' }}
            >
              <a href="#apply" className="bg-primary hover:bg-blue-600 text-white px-8 py-3.5 font-bold transition-colors flex items-center gap-2 shadow-lg rounded">
                Apply Now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Social Strip */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 max-w-sm md:hidden flex justify-center items-center gap-8 bg-primary/90 py-3 z-20 rounded-t-2xl shadow-lg">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-sky-200 transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-white hover:text-sky-200 transition-colors" aria-label="WhatsApp">
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

      {/* Feature Strip — below hero */}
      <div className="bg-white py-8 px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x-0 lg:divide-x divide-slate-300">
            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 bg-green-50 flex items-center justify-center text-green-700 shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">World-Class Education</h4>
                <p className="text-xs text-slate-500 mt-0.5">Learn from the best</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
                <Lightbulb size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Innovative Programs</h4>
                <p className="text-xs text-slate-500 mt-0.5">Future-focused learning</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Global Opportunities</h4>
                <p className="text-xs text-slate-500 mt-0.5">Your future, worldwide</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Vibrant Campus Life</h4>
                <p className="text-xs text-slate-500 mt-0.5">Grow, connect, belong</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

