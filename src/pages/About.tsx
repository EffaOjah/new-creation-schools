import { Users, BookOpen, Monitor, Award, Heart, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[250px] md:h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80"
            alt="Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">About Us</h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="sticky top-20 z-40 bg-slate-50 py-4 px-6 lg:px-8 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="opacity-50">/</span>
          <span className="text-slate-900">About Us</span>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              New Creation Group of Schools was founded with a singular vision: to provide holistic, world-class education that empowers students to excel academically and morally. From our humble beginnings, we have grown into a beacon of academic excellence in the region.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We believe in creating an environment where every child is recognized as a unique individual with boundless potential. Our dedicated staff and comprehensive curriculum are designed to challenge and inspire our students to reach their highest aspirations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded p-4 border border-slate-100 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Our Mission</h3>
                <p className="text-sm text-slate-600">To inspire lifelong learning and leadership.</p>
              </div>
              <div className="bg-slate-50 rounded p-4 border border-slate-100 text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Our Vision</h3>
                <p className="text-sm text-slate-600">To be a globally recognized center of excellence.</p>
              </div>
            </div>
          </div>
          <div className="relative reveal delay-100">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" 
              alt="Students in classroom" 
              className="rounded shadow-xl object-cover w-full h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded p-6 shadow-xl max-w-[200px] border border-slate-100">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-slate-600 font-medium">Years of Educational Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Campus</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">World-Class Facilities</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We provide a conducive environment equipped with state-of-the-art facilities to support comprehensive learning and physical development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facility Card 1 */}
            <div className="bg-white rounded p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Modern Library</h3>
              <p className="text-slate-600 leading-relaxed">A vast collection of physical and digital resources to foster a reading culture and support research.</p>
            </div>

            {/* Facility Card 2 */}
            <div className="bg-white rounded p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Science Laboratories</h3>
              <p className="text-slate-600 leading-relaxed">Fully equipped Physics, Chemistry, and Biology labs for practical, hands-on scientific learning.</p>
            </div>

            {/* Facility Card 3 */}
            <div className="bg-white rounded p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-200">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ICT Suites</h3>
              <p className="text-slate-600 leading-relaxed">State-of-the-art computer labs with high-speed internet to develop essential digital skills.</p>
            </div>

            {/* Facility Card 4 */}
            <div className="bg-white rounded p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sports Complex</h3>
              <p className="text-slate-600 leading-relaxed">Extensive sports fields and courts to promote physical fitness, teamwork, and healthy competition.</p>
            </div>

            {/* Facility Card 5 */}
            <div className="bg-white rounded p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal delay-100">
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Classrooms</h3>
              <p className="text-slate-600 leading-relaxed">Spacious, air-conditioned classrooms with smart boards for interactive and engaging learning sessions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
