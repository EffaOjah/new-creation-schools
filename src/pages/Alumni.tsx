import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Search } from 'lucide-react';

// Mock Alumni Data
const ALUMNI_DATA = [
  { id: 1, name: "David Effiong", year: "2025", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Sarah Okafor", year: "2025", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Michael Bassey", year: "2024", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Grace Edet", year: "2024", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "Samuel Asuquo", year: "2024", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "Blessing Umoh", year: "2023", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80" },
  { id: 7, name: "Victor Etim", year: "2023", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80" },
  { id: 8, name: "Anita Okon", year: "2022", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80" },
];

// Extract unique years and sort descending
const YEARS = Array.from(new Set(ALUMNI_DATA.map(a => a.year))).sort((a, b) => Number(b) - Number(a));

const Alumni = () => {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const filteredAlumni = useMemo(() => {
    let result = ALUMNI_DATA;
    if (selectedYear !== "All") {
      result = result.filter(a => a.year === selectedYear);
    }
    // Sort most recent first
    return result.sort((a, b) => Number(b.year) - Number(a.year));
  }, [selectedYear]);

  return (
    <main className="relative bg-white overflow-hidden">
      {/* Background Shape Cuts (Decorative) */}
      <div className="absolute top-[300px] right-0 w-[50vw] h-[800px] bg-slate-50 origin-top-right -skew-y-6 -z-10" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[600px] bg-blue-50/50 origin-bottom-left skew-y-3 -z-10" />

      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80";
            }}
            alt="Alumni Graduation"
            className="w-full h-full object-cover"
          />
          {/* Overlay with a diagonal cut effect */}
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
        </div>
        
        {/* SVG Cut shape on the bottom of the hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 120 1200 120z" className="fill-slate-50" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal">
          <span className="text-sky-300 font-bold tracking-widest uppercase text-sm mb-4 block flex items-center justify-center gap-2">
            <GraduationCap size={18} /> Our Pride
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Alumni Network</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="sticky top-20 z-40 bg-slate-50 py-4 px-6 lg:px-8 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-50">/</span>
          <span className="text-slate-900">Alumni</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-8 relative z-10 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header & Filter Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 reveal">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Past Graduates</h2>
              <p className="text-slate-600">Explore the brilliant minds who have passed through our halls.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-2 rounded shadow-sm border border-slate-200 w-full md:w-auto">
              <div className="pl-3 text-slate-400">
                <Search size={18} />
              </div>
              <select 
                className="w-full md:w-48 bg-transparent font-bold text-slate-700 focus:outline-none py-2 pr-4 cursor-pointer"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="All">All Years</option>
                {YEARS.map(year => (
                  <option key={year} value={year}>Class of {year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Alumni Grid */}
          {filteredAlumni.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredAlumni.map((alumni, index) => (
                <div 
                  key={alumni.id} 
                  className={`bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group reveal delay-${(index % 4) * 100}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={alumni.image} 
                      alt={alumni.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 relative text-center">
                    {/* Decorative cut in the card */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45" />
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-1 mt-2 relative z-10">{alumni.name}</h3>
                    <div className="inline-flex items-center justify-center bg-blue-50 text-primary px-3 py-1 rounded text-xs font-bold tracking-wider relative z-10">
                      Class of {alumni.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <GraduationCap size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-900">No Alumni Found</h3>
              <p className="text-slate-500">No records found for the selected filter.</p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
};

export default Alumni;
