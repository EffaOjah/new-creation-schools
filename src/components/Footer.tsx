import logo from '../assets/ncgos-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0b101e] text-white pt-24 pb-24 lg:pb-12 px-6 lg:px-12 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-[1400px] w-full mx-auto relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 lg:mb-24">

          {/* Left Column: Logo, Tagline, Contact */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-12">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="NCGOS Logo" className="rounded h-10 w-auto object-contain" />
                <span className="font-bold text-xl tracking-tight">New Creation Schools</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Providing quality, holistic education from Nursery through Secondary. Raising tomorrow's leaders with excellence, character, and purpose.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xs tracking-widest uppercase text-white/40 mb-4 lg:mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="contact" className="hover:text-white transition-colors">Contact form</a></li>
                <li><a href="mailto:ncgos@gmail.com" className="hover:text-white transition-colors">ncgos@gmail.com</a></li>
              </ul>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-10 lg:gap-8">
            <div>
              <h4 className="font-bold text-xs tracking-widest uppercase text-white/40 mb-4 lg:mb-6">Pages</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/admissions" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="/news" className="hover:text-white transition-colors">News & Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs tracking-widest uppercase text-white/40 mb-4 lg:mb-6">Academics</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Nursery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Primary</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Secondary</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar overlaying/below */}
        <div className="flex justify-center items-center text-xs text-white/40 border-t border-white/10 pt-8 lg:mt-12 relative z-10">
          <div className="text-center">
            © {new Date().getFullYear()} New Creation Group Of Schools. All rights reserved.
          </div>
        </div>

      </div>

      {/* Huge Faded Text Background */}
      <div className="absolute bottom-0 left-0 w-full text-center flex items-end justify-center select-none pointer-events-none overflow-hidden z-0 translate-y-2 md:translate-y-8">
        <h1 className="text-[17vw] md:text-[14vw] font-black text-[#1e3a8a]/20 tracking-tighter leading-none m-0 p-0 transform scale-y-110 md:scale-y-125">
          NEW CREATION
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
