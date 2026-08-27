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
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary mb-6 reveal">
          Parent Testimonials
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center leading-tight reveal delay-100">
          What Our Parents <br />
          <span className="text-primary italic font-serif">Are Saying</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`reveal bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative group delay-${(i % 3 + 1) * 100}`}
            >
              <Quote size={40} className="text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex flex-col gap-1 mb-6">
                <div className="font-bold text-slate-900 text-lg">{t.parent}</div>
                <div className="text-xs text-slate-500 font-medium">Proud Parent</div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed italic line-clamp-2">
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

