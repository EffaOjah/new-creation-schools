import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogs';

const NewsFAQ = () => {
  const featuredPost = BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];

  return (
    <>
      <section className="bg-white py-24 px-8 border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary mb-6 rounded">
              Latest News & Blogs
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Discover Our <span className="text-primary">Stories</span>
            </h2>
          </div>

          {/* Featured Blog */}
          <div className="bg-slate-50 overflow-hidden flex flex-col lg:flex-row shadow-sm rounded border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-[4/3] relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="rounded w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 text-[10px] lg:text-xs font-bold tracking-widest uppercase text-primary shadow-sm rounded">
                {featuredPost.category}
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs lg:text-sm text-primary font-bold mb-4 tracking-wider uppercase">
                <span>{featuredPost.date}</span>
                <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-primary/40" />
                <span className="text-slate-500">By {featuredPost.author}</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight text-slate-900">
                {featuredPost.title}
              </h3>

              <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div>
                <Link to={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 bg-primary text-white hover:bg-blue-700 px-5 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm font-bold transition-all shadow-md rounded">
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white bg-primary px-8 py-3.5 font-bold hover:bg-blue-700 transition-colors rounded shadow-lg">
              View All Blogs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsFAQ;
