import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { useEffect } from 'react';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-8 text-center max-w-md">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-bold rounded shadow-md hover:bg-blue-700 transition-colors">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* Featured Image Hero */}
      <section className="w-full h-[300px] md:h-[450px] relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 w-full z-10 px-6 lg:px-8 pb-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-primary text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded mb-4 shadow-sm">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
              <span className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</span>
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
              <span className="flex items-center gap-1.5"><User size={16} /> {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm py-4 px-6 lg:px-8 border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
            <Link to="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
            <span className="opacity-50 shrink-0">/</span>
            <Link to="/blog" className="hover:text-primary transition-colors shrink-0">Blog</Link>
            <span className="opacity-50 shrink-0">/</span>
            <span className="text-slate-900 truncate">{post.title}</span>
          </div>
          
          <button className="hidden sm:flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-bold">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 md:p-12">
          {/* We use arbitrary variants to style the raw HTML content without needing the typography plugin */}
          <div 
            className="max-w-none text-slate-700 leading-relaxed text-lg
                       [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4
                       [&_p]:mb-6
                       [&_a]:text-primary [&_a]:font-bold hover:[&_a]:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Bottom Action */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
              <ArrowLeft size={18} /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

    </main>
  );
};

export default BlogDetail;
