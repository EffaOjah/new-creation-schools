import { Link } from 'react-router-dom';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';

const Blog = () => {
  const featuredPost = BLOG_POSTS.find(post => post.featured) || BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.filter(post => post.id !== featuredPost.id);

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
            alt="School News and Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal">
          <span className="text-sky-300 font-bold tracking-widest uppercase text-sm mb-4 block flex items-center justify-center gap-2">
            <BookOpen size={18} /> News & Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="sticky top-20 z-40 bg-white py-4 px-6 lg:px-8 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-50">/</span>
          <span className="text-slate-900">Blog</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 reveal">
            <h2 className="text-3xl font-bold text-slate-900">Featured Story</h2>
            <div className="w-12 h-1 bg-primary mt-4 rounded"></div>
          </div>

          {/* Featured Post Layout */}
          {featuredPost && (
            <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 flex flex-col lg:flex-row group reveal">
              <div className="w-full lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-bold tracking-widest uppercase text-primary shadow-sm rounded">
                  {featuredPost.category}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 tracking-wider uppercase mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary" /> {featuredPost.date}</span>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                  <span className="flex items-center gap-1.5"><User size={14} className="text-primary" /> {featuredPost.author}</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div>
                  <Link to={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 bg-slate-50 text-primary border border-slate-200 hover:bg-primary hover:text-white hover:border-primary px-6 py-3 font-bold transition-all shadow-sm rounded">
                    Read Full Article <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Future Posts Grid (Empty for now) */}
          {otherPosts.length > 0 && (
            <div className="mt-24 reveal">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900">More Recent News</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map(post => (
                  <div key={post.id} className="bg-white rounded overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition-all">
                     <div className="aspect-video overflow-hidden">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                     </div>
                     <div className="p-6">
                       <div className="text-xs font-bold text-primary tracking-wider uppercase mb-2">{post.category}</div>
                       <h4 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors">{post.title}</h4>
                       <p className="text-slate-500 text-sm line-clamp-2">{post.excerpt}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
};

export default Blog;
