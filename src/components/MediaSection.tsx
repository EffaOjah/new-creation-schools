import { ArrowRight } from 'lucide-react';

const mediaItems = [
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', alt: 'Campus Life' },
  { src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80', alt: 'Library' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', alt: 'Classroom' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', alt: 'Students' },
  { src: 'https://images.unsplash.com/photo-1610694858449-0079cf6a5b96?auto=format&fit=crop&w=800&q=80', alt: 'Stair Well' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', alt: 'Graduation' },
  { src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80', alt: 'University' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', alt: 'Architecture' }
];

const MediaSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary rounded mb-4">
            Our Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Campus Life in Media</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {mediaItems.map((item, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden shadow-md bg-white rounded cursor-pointer">
              <img
                src={item.src}
                alt={item.alt}
                className="rounded w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#media" className="inline-flex items-center gap-2 text-white bg-primary px-8 py-3.5 font-bold hover:bg-blue-700 transition-colors rounded shadow-lg">
            View All Media <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
