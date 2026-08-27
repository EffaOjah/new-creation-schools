import { Play } from 'lucide-react';

const VideoCeremony = () => {
  return (
    <section className="px-8 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 bg-primary text-white rounded-[40px] overflow-hidden p-4 lg:p-6 shadow-2xl relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

        <div className="flex-1 flex flex-col justify-end p-8 lg:p-12 relative z-10">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-12">
            <Play size={20} fill="currentColor" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Marco Selene's 68th <br /> Ceremony 2026
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/80">
              <span className="font-medium">Time zone:</span>
              <span>5:20 PM (GMT)</span>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <span className="font-medium">Location:</span>
              <span>Westheimer Rd. Santa Ana, Illinois 854</span>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:max-w-2xl relative z-10">
          <div className="h-[400px] lg:h-[600px] rounded-3xl overflow-hidden relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" 
              alt="Graduation Ceremony" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Play size={24} className="text-primary ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCeremony;

