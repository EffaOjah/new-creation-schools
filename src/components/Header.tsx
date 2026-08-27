import { useState, useEffect } from 'react';
import { X, Menu, ArrowRight } from 'lucide-react';
import ncgosLogo from '../assets/ncgos-logo.png';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Campus', href: '#campus' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Alumni', href: '#alumni' },
  { label: 'Contact Us', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 z-50 w-full h-20 flex items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-slate-100 shadow-sm' : 'bg-transparent border-b border-transparent'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={ncgosLogo}
            alt="New Creation Group of Schools"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:block">
          <ul className={`flex items-center gap-8 text-sm font-medium transition-colors ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={`hover:text-primary transition-colors ${link.label === 'Home' ? (scrolled ? 'text-primary font-bold' : 'text-white font-bold') : ''}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a href="#admissions" className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all shadow-sm ${
            scrolled ? 'bg-primary text-white hover:bg-blue-700' : 'bg-white text-primary hover:bg-white/90'
          }`}>
            Apply Now <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </header>

      {/* No overlay needed for fullscreen */}

      {/* Sidebar Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-[70] flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img src={ncgosLogo} alt="NCGOS" className="h-10 w-auto object-contain" />
            <div className="leading-tight">
              <div className="font-bold text-sm text-slate-900">New Creation</div>
              <div className="text-[10px] text-slate-500 tracking-wide uppercase">Group of Schools</div>
            </div>
          </div>
          <button onClick={() => setMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-800 transition-colors" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-primary transition-colors text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar CTA */}
        <div className="px-6 pb-10 pt-4 border-t border-slate-100">
          <a
            href="#admissions"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-2xl font-bold text-base hover:bg-blue-700 transition-colors shadow-lg"
          >
            Apply Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
