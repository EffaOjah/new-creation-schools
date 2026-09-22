import { Quote } from 'lucide-react';

const testimonials = [
  {
    body: "The academic growth and character development we've seen in our children is simply outstanding.",
    parent: "Mrs. Sarah Adebayo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "A safe, nurturing environment where every child is treated with care and encouraged to excel.",
    parent: "Mr. David Okafor",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "The teachers are incredibly dedicated. We couldn't have chosen a better school for our kids.",
    parent: "Mrs. Linda Chioma",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "From the modern facilities to the holistic curriculum, everything here is designed for student success.",
    parent: "Mr. Emmanuel Eze",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "The perfect balance of rigorous academics and engaging extracurricular activities.",
    parent: "Dr. Grace Nnaji",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
  },
  {
    body: "Watching my child look forward to school every day brings me so much peace of mind.",
    parent: "Mr. & Mrs. Okoro",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=150&q=80",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary mb-6 rounded reveal">
          Parent Testimonials
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight text-center mb-16">
          What Parents & Students <br />
          <span className="text-primary">Are Saying</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex pb-8">
        {/* Gradient Fades for edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-slide-left gap-6 px-3">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[300px] md:w-[380px] shrink-0 bg-slate-50 p-8 rounded border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <Quote size={40} className="text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex flex-col gap-1 mb-6">
                <div className="font-bold text-slate-900 text-lg">{t.parent}</div>
                <div className="text-xs text-slate-500 font-medium">Proud Parent</div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                "{t.body}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
