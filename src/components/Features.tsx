const featuresData = [
 {
 title: 'JETS Club',
 description: 'Fostering innovation through science, technology, and practical experiments.',
 image: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=600&q=80',
 },
 {
 title: 'Inter-House Sports',
 description: 'Building teamwork, resilience, and physical fitness through annual competitions.',
 image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80',
 },
 {
 title: 'Cultural Day',
 description: 'Celebrating our rich diversity and heritage through arts, food, and performance.',
 image: 'https://plus.unsplash.com/premium_photo-1745839716056-7dc088097cc5?auto=format&fit=crop&w=600&q=80',
 },
 {
 title: 'Field Excursions',
 description: 'Learning beyond the classroom with practical, real-world educational trips.',
 image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
 },
];

const Features = () => {
 return (
 <section className="py-24 px-8 bg-slate-50 relative overflow-hidden">
 <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
 <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary mb-6 reveal">
 Why Choose Us
 </div>

 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-3xl mb-16 leading-tight reveal delay-100">
          Beyond the <br />
          <span className="text-primary">Classroom</span>
 </h2>

 <p className="text-slate-500 max-w-2xl mb-16 text-lg leading-relaxed">
 We offer a wide range of extracurricular activities that allow students to explore their passions, build character, and develop new skills.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
 {featuresData.map((feature, index) => (
 <div
 key={index}
 className={`reveal group relative overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer delay-${(index + 1) * 100}`}
 >
 {/* Background Image */}
 <img
 src={feature.image}
 alt={feature.title}
 className="rounded absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
 />

 {/* Gradient Overlay */}
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 lg:opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

 {/* Content */}
 <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
 <h3 className="text-3xl font-bold text-white mb-3 translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
 {feature.title}
 </h3>
 <p className="text-white/80 text-sm leading-relaxed opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 lg:delay-100">
 {feature.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default Features;

