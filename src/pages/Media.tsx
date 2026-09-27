import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import hero3 from '../assets/hero3.png';
import SEO from '../components/SEO';

// Import all images from the media folder using Vite's eager glob import
const globImages = import.meta.glob<{ default: string }>(
  '../assets/media/*.{png,jpg,jpeg}',
  { eager: true }
);

// Shuffle function (Fisher-Yates)
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const allImages: string[] = shuffleArray(
  Object.values(globImages).map((mod) => mod.default)
);

const ITEMS_PER_PAGE = 30;
const TOTAL_PAGES = Math.ceil(allImages.length / ITEMS_PER_PAGE);

// Masonry span pattern (cycles every 7 items)
function getSpanClass(idx: number): string {
  if (idx % 7 === 0) return 'md:col-span-2 md:row-span-2';
  if (idx % 5 === 0) return 'md:col-span-2 md:row-span-1';
  if (idx % 4 === 0) return 'md:col-span-1 md:row-span-2';
  return 'md:col-span-1 md:row-span-1';
}

const Media = () => {
  const [page, setPage] = useState(1);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Current page images
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const pageImages = allImages.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  // Lightbox navigation
  const openLightbox = (localIdx: number) => setLightboxIdx(startIdx + localIdx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = useCallback(() => {
    setLightboxIdx((prev) => (prev !== null ? Math.max(0, prev - 1) : null));
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIdx((prev) => (prev !== null ? Math.min(allImages.length - 1, prev + 1) : null));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIdx, prevImage, nextImage]);

  // Scroll to top on page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <SEO
        title="Media Gallery"
        description="Explore moments captured across our vibrant campus, celebrating academic achievements and extracurricular triumphs at New Creation Group of Schools."
        canonical="/media"
      />
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero3}
            alt="School Media Gallery"
            className="w-full h-full object-cover object-center lg:object-top"
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal mt-12">
          <span className="text-sky-300 font-bold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <Camera size={18} /> Visuals
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Media Gallery</h1>
          <p className="text-white/70 text-sm">{allImages.length} photos</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="sticky top-20 z-40 bg-white py-4 px-6 lg:px-8 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-slate-900">Media</span>
          </div>
          <span className="text-sm text-slate-400 font-medium">Page {page} of {TOTAL_PAGES}</span>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="mb-10 text-center max-w-2xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Glimpse of Excellence</h2>
            <p className="text-slate-600">Explore moments captured across our vibrant campus, celebrating academic achievements and extracurricular triumphs.</p>
            <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {pageImages.map((src, idx) => (
              <div
                key={`${page}-${idx}`}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${getSpanClass(idx)}`}
              >
                <img
                  src={src}
                  alt={`Gallery ${startIdx + idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover zoom icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white drop-shadow-lg" size={32} />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {TOTAL_PAGES > 1 && (
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                disabled={page === 1}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg font-bold text-slate-700 hover:bg-slate-50 hover:border-primary hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                <ChevronLeft size={18} /> Previous
              </button>

              {/* Page number pills */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => handlePageChange(p)}
                    className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${p === page
                        ? 'bg-primary text-white shadow-md shadow-primary/30'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                      }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(Math.min(TOTAL_PAGES, page + 1))}
                disabled={page === TOTAL_PAGES}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg font-bold text-slate-700 hover:bg-slate-50 hover:border-primary hover:text-primary transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
          >
            <X size={24} />
          </button>

          {/* Image counter */}
          <div className="absolute top-5 left-5 text-white/70 text-sm font-medium">
            {lightboxIdx + 1} / {allImages.length}
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            disabled={lightboxIdx === 0}
            className="absolute left-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all disabled:opacity-30"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <img
            src={allImages[lightboxIdx]}
            alt={`Gallery ${lightboxIdx + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            disabled={lightboxIdx === allImages.length - 1}
            className="absolute right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all disabled:opacity-30"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </main>
  );
};

export default Media;
