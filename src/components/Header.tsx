import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, ArrowRight, ChevronDown } from 'lucide-react';
import ncgosLogo from '../assets/ncgos-logo.png';

type NavLink = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  {
    label: 'Media',
    dropdown: [
      { label: 'Blogs', href: '/blog' },
      { label: 'Gallery', href: '/#media' }
    ]
  },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Contact Us', href: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  // Scroll to top on route change
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <div className="fixed top-0 z-50 w-full flex flex-col">
        {/* Top Bar */}
        <div
          className={`bg-primary text-white text-xs px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono tracking-wide transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-20 py-2 opacity-100'
            }`}
        >
          <div className="flex items-center">
            Main Campus: 4 Uwanse Close, Calabar, Nigeria
          </div>
          <div className="flex items-center">
            Admissions open for 2026/2027 academic session
          </div>
        </div>

        {/* Main Header */}
        <header className="w-full h-20 bg-white shadow-sm border-b border-slate-200 flex items-center justify-between px-6 lg:px-8">
          {/* Logo and Name */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={ncgosLogo}
                alt="New Creation Group of Schools"
                className="rounded h-16 w-auto object-contain"
              />
              <div>
                <h1 className="text-xl lg:text-2xl font-black text-primary tracking-tight">New Creation Schools</h1>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[15px] font-normal uppercase tracking-wide text-slate-700">
              {navLinks.map((link) => {
                const isActive = link.href ? (location.pathname === link.href || (location.pathname === '/' && link.href === '/')) : false;
                return (
                  <li key={link.label} className="relative group">
                    {link.dropdown ? (
                      <>
                        <div className="hover:text-primary transition-colors pb-1 cursor-pointer flex items-center gap-1">
                          {link.label} <ChevronDown size={14} className="mt-0.5" />
                        </div>
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:scale-100 scale-95">
                          <div className="py-2">
                            {link.dropdown.map(sublink => (
                              <Link
                                key={sublink.label}
                                to={sublink.href}
                                className="block px-5 py-2.5 hover:bg-slate-50 hover:text-primary text-slate-700 transition-colors"
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={link.href!}
                        className={`hover:text-primary transition-colors relative pb-1 ${isActive ? 'text-primary font-medium after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary' : ''
                          }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="rounded lg:hidden p-2 text-slate-700"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </header>
      </div>

      {/* Sidebar Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-[70] flex flex-col transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img src={ncgosLogo} alt="NCGOS" className="rounded h-10 w-auto object-contain" />
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
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.dropdown ? (
                  <div className="mb-2">
                    <div className="block py-2 text-slate-700 font-medium text-lg mb-2">
                      {link.label}
                    </div>
                    <ul className="bg-slate-50 border-l-2 border-primary ml-2 pl-4 py-2 space-y-3 rounded">
                      {link.dropdown.map(sublink => (
                        <li key={sublink.label}>
                          <Link
                            to={sublink.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-slate-600 font-medium hover:text-primary transition-colors text-base"
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={link.href!}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-slate-700 font-medium hover:text-primary transition-colors text-lg"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar CTA */}
        <div className="px-6 pb-10 pt-4 border-t border-slate-100">
          <Link
            to="/admissions"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 font-bold text-base hover:bg-blue-700 transition-colors shadow-lg rounded"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
