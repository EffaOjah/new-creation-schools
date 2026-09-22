import { ArrowRight, CheckCircle2 } from 'lucide-react';
import aboutimg from '../assets/school-overview.jpg';

const highlights = [
    'Nurturing young minds from Nursery through Primary with care and excellence',
    'Rigorous Secondary education that prepares students for national exams and beyond',
    "A safe, inclusive environment that celebrates every child's uniqueness",
    'Experienced educators dedicated to academic and character development',
];

const AboutStats = () => {
    return (
        <section id="about" className="py-24 px-8 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Image Side */}
                <div className="flex-1 w-full relative reveal from-left">
                    {/* Decorative background shape */}
                    <div className="absolute -top-6 -left-6 w-full h-full ] bg-primary/10 z-0" />
                    <div className="relative z-10 ] overflow-hidden shadow-2xl rounded aspect-[4/5] w-full max-w-md">
                        <img
                            src={aboutimg}
                            alt="Students in a classroom"
                            className="rounded w-full h-full object-cover"
                        />
                        {/* Floating stat badge */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-8 py-4 shadow-xl rounded flex justify-around items-center w-[calc(100%-48px)]">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">25+</div>
                                <div className="text-xs text-slate-500 mt-0.5">Years of Excellence</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200" />
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">1,000+</div>
                                <div className="text-xs text-slate-500 mt-0.5">Alumni Strong</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 space-y-8 reveal from-right">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary">
                        About Our School
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Shaping Futures from <br />
                        <span className="text-primary">Nursery to Secondary</span>
                    </h2>

                    <p className="text-slate-500 text-base leading-relaxed">
                        Founded with a passion for excellence, <strong className="text-slate-700">New Creation Group of Schools</strong> is a premier institution offering Nursery, Primary, and Secondary education. We believe every child deserves a world-class foundation — academically, morally, and socially.
                    </p>

                    <p className="text-slate-500 text-base leading-relaxed">
                        Our school combines a rigorous curriculum with a warm, supportive atmosphere, empowering students to discover their full potential and step into the future with confidence.
                    </p>

                    {/* Highlights List */}
                    <ul className="space-y-4 pt-2">
                        {highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                                <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 pt-4">
                        <a
                            href="/about"
                            className="bg-primary hover:bg-blue-700 text-white px-7 py-3.5 font-bold transition-colors flex items-center gap-2 shadow-md rounded shadow-blue-900/20"
                        >
                            Read More <ArrowRight size={16} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutStats;

