import { ArrowUpRight } from 'lucide-react';
import ncgosLogo from '../assets/ncgos-logo.png';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-16 px-6 lg:px-8 relative z-10">
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-white rounded p-10 md:p-12 .5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left z-10 reveal">
                    <span className="text-slate-500 font-bold tracking-widest uppercase text-[10px] mb-2 block">
                        Enrollment Open
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                        Enroll your Child Today!
                    </h2>
                    <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-lg mx-auto md:mx-0">
                        Empowering future leaders through sound academic excellence, emotional strength, and social balance in a supportive learning environment.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Link to="/admissions" className="bg-primary text-white px-6 py-3 font-bold hover:bg-blue-700 transition-all shadow-md rounded flex items-center gap-2 text-xs uppercase tracking-wider">
                            Apply for Admission <ArrowUpRight size={16} />
                        </Link>
                        <Link to="/contact" className="bg-primary text-white px-6 py-3 font-bold hover:bg-blue-700 transition-all shadow-md rounded text-xs uppercase tracking-wider">
                            Make an Enquiry
                        </Link>
                    </div>
                </div>

                {/* Right Content - Concentric Circles Design */}
                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center reveal delay-200 mt-8 md:mt-0">
                    {/* Circles */}
                    <div className="absolute inset-0 border border-slate-300 border-dashed animate-[spin_60s_linear_infinite]" />
                    <div className="absolute inset-6 border border-slate-300 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
                    <div className="absolute inset-12 border border-slate-300 border-dashed animate-[spin_30s_linear_infinite]" />
                    <div className="absolute inset-20 border border-slate-300 border-dashed animate-[spin_20s_linear_infinite_reverse]" />

                    {/* Center Logo Card */}
                    <div className="relative z-10 w-24 h-24 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] flex items-center justify-center p-3 border border-slate-50">
                        <img src={ncgosLogo} alt="Logo" className="rounded w-full h-full object-contain" />
                    </div>

                    {/* Orbiting Elements */}
                    <div className="absolute top-[10%] left-[20%] w-10 h-10 overflow-hidden border-[3px] border-white shadow-md rounded bg-white">
                        <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=100&q=80" alt="Student" className="rounded w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-[20%] right-[15%] w-12 h-12 overflow-hidden border-[3px] border-white shadow-md rounded bg-white">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=100&q=80" alt="Student" className="rounded w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-[30%] right-[10%] w-8 h-8 overflow-hidden border-[3px] border-white shadow-md rounded bg-white">
                        <img src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?auto=format&fit=crop&w=100&q=80" alt="Student" className="rounded w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-[15%] left-[25%] w-12 h-12 overflow-hidden border-[3px] border-white shadow-md rounded bg-white">
                        <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=100&q=80" alt="Student" className="rounded w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTA;
