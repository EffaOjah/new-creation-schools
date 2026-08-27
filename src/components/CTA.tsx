import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-[32px] lg:rounded-[40px] overflow-hidden p-8 py-16 lg:p-24 text-center shadow-2xl shadow-primary/30 bg-primary isolate reveal scale-in">
          
          {/* Deep Blue Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#054a8f] to-[#032d57] -z-10" />

          {/* Decorative Shape Cuts (Top Left) */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-[100px] rotate-45 blur-2xl -z-10" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-300/20 rounded-full mix-blend-overlay blur-3xl -z-10" />

          {/* Decorative Shape Cuts (Bottom Right) */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-[100px] -rotate-45 blur-2xl -z-10" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-400/20 rounded-full mix-blend-overlay blur-3xl -z-10" />
          
          {/* Floating subtle lines (Glassmorphism cut effect) */}
          <div className="absolute top-1/4 -right-10 w-40 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 -z-10" />
          <div className="absolute bottom-1/4 -left-10 w-40 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent -rotate-45 -z-10" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Start Your Journey <br />
              Toward a <span className="text-sky-300 italic font-serif">Brighter Future</span>
            </h2>
            
            <p className="text-white/80 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
              Join a diverse, forward-thinking academic community committed to excellence, innovation, and global opportunity. Empowering tomorrow's leaders today.
            </p>
            
            <div className="flex justify-center w-full">
              <a href="#apply" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-sky-50 transition-all shadow-lg hover:shadow-white/20 flex items-center gap-2 group w-full sm:w-auto justify-center">
                Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

