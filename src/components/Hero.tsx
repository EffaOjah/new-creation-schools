import { ArrowRight, Play, GraduationCap, Lightbulb, Globe, Users } from 'lucide-react';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-end overflow-hidden">
        {/* Full Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594923544727-8794d5914331?auto=format&fit=crop&w=2000&q=80"
            alt="University Campus Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative z-10 px-8 pb-20 pt-32 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight animate-fade-in-down"
            style={{ animationDelay: '0.1s' }}
          >
            New Creation <br />
            <span className="text-sky-300 italic font-serif">Group of Schools</span>
          </h1>

          <p
            className="text-white/80 max-w-2xl text-base md:text-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Empowering students with world-class education, innovation, and global opportunities to thrive in an ever-changing world.
          </p>

          <div
            className="flex flex-wrap justify-center items-center gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            <a href="#apply" className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg">
              Apply Now <ArrowRight size={16} />
            </a>
            <a href="#campus" className="flex items-center gap-3 text-white font-medium hover:text-primary transition-colors border border-white/30 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
              <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center bg-transparent">
                <Play size={10} className="text-white ml-0.5" fill="currentColor" />
              </div>
              Explore Campus
            </a>
          </div>
        </div>
      </section>

      {/* Feature Strip — below hero */}
      <div className="bg-white py-8 px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x-0 lg:divide-x divide-slate-300">
            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-700 shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">World-Class Education</h4>
                <p className="text-xs text-slate-500 mt-0.5">Learn from the best</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
                <Lightbulb size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Innovative Programs</h4>
                <p className="text-xs text-slate-500 mt-0.5">Future-focused learning</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Global Opportunities</h4>
                <p className="text-xs text-slate-500 mt-0.5">Your future, worldwide</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
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

