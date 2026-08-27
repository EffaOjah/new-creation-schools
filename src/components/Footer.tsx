import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/ncgos-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] text-white py-16 px-6 lg:px-8 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between border-b border-white/10 pb-12 mb-10">

          {/* Logo & About */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="NCGOS Logo" className="h-12 w-auto object-contain" />
              <div className="leading-tight">
                <div className="font-bold text-sm text-white">New Creation</div>
                <div className="text-xs text-white/60 tracking-wide">Group of Schools</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Providing quality, holistic education from Nursery through Secondary. Raising tomorrow's leaders with excellence, character, and purpose.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col sm:flex-row gap-16 lg:gap-24">
            <div>
              <h4 className="font-bold text-xs tracking-widest uppercase text-white/40 mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs tracking-widest uppercase text-white/40 mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>72 Mayne Avenue, Calabar, Nigeria</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <span>+234 816 400 4644</span>
                    <span>+234 912 391 1246</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                  <a href="mailto:amethystfieldschools20@gmail.com" className="hover:text-white transition-colors break-all">
                    amethystfieldschools20@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} New Creation Group of Schools. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

