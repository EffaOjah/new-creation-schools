import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import media10 from '../assets/media/media-10.jpeg';
import media35 from '../assets/media/media-35.jpeg';
import media23 from '../assets/media/media-23.jpeg';
import media4 from '../assets/media/media-4.jpeg';
import media66 from '../assets/media/media-59.jpeg';
import media77 from '../assets/media/media-77.jpeg';
import media87 from '../assets/media/media-87.jpeg';
import media88 from '../assets/media/media-88.jpeg';

const mediaItems = [
  media10,
  media35,
  media23,
  media4,
  media66,
  media77,
  media87,
  media88,
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
          {mediaItems.map((src, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden shadow-md bg-white rounded cursor-pointer">
              <img
                src={src}
                alt={`Campus media ${index + 1}`}
                className="rounded w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/media" className="inline-flex items-center gap-2 text-white bg-primary px-8 py-3.5 font-bold hover:bg-blue-700 transition-colors rounded shadow-lg">
            View All Media <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
