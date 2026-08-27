import { ArrowRight } from 'lucide-react';
import ncgos_blog1 from '../assets/ann1.png';

const NewsFAQ = () => {

  return (
    <>
      <section className="bg-white py-24 px-8 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                Latest News & Blogs
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Discover Our <span className="italic font-serif text-primary">Stories</span>
              </h2>
            </div>
            <a href="#all-blogs" className="inline-flex items-center gap-2 bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition-colors shrink-0">
              View All Blogs <ArrowRight size={18} />
            </a>
          </div>

          {/* Featured Blog */}
          <div className="bg-slate-50 rounded-[24px] lg:rounded-[36px] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-[4/3] relative">
              <img
                src={ncgos_blog1}
                alt="Students studying"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-[10px] lg:text-xs font-bold tracking-widest uppercase text-primary shadow-sm">
                Academic Excellence
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs lg:text-sm text-primary font-bold mb-4 tracking-wider uppercase">
                <span>August 24, 2026</span>
                <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary/40" />
                <span className="text-slate-500">By Admin</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-serif leading-tight text-slate-900">
                How Our Students Achieved Record-Breaking National Exam Results
              </h3>

              <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 line-clamp-3">
                This year, New Creation Group of Schools set a new benchmark in academic excellence. Our holistic approach to learning, combined with the dedication of our teaching staff and the hard work of our students, resulted in the highest national exam pass rate in our history. Read on to discover the strategies that made this possible.
              </p>

              <div>
                <a href="#read-more" className="inline-flex items-center gap-2 bg-primary text-white hover:bg-blue-700 px-5 py-2 lg:px-6 lg:py-2.5 rounded-full text-xs lg:text-sm font-bold transition-all shadow-md">
                  Read Full Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsFAQ;
