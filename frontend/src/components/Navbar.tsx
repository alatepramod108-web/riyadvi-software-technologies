import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <span className="font-heading font-black text-black text-xl tracking-tighter">R</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5">
              RIYADVI
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                TECH
              </span>
            </span>
            <span className="text-[10px] text-neutral-400 uppercase tracking-widest -mt-1 font-mono">
              Software Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber-400 py-2 ${
                      location.pathname.startsWith('/services') ? 'text-amber-400 font-semibold' : 'text-neutral-300'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-72 bg-neutral-950/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl animate-fade-in z-50">
                      <div className="px-3 py-2 text-[11px] font-mono text-neutral-400 uppercase border-b border-white/5 mb-1">
                        Core Capabilities
                      </div>
                      {servicesData.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="flex flex-col px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <span className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400">
                            {s.title}
                          </span>
                          <span className="text-[11px] text-neutral-400 truncate">
                            {s.tagline}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  isActive ? 'text-amber-400 font-semibold' : 'text-neutral-300'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons & Utilities */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/business-health-checkup"
            className="text-xs font-semibold px-3 py-2 rounded-lg text-amber-300 bg-amber-400/10 border border-amber-400/30 hover:bg-amber-400/20 transition-all flex items-center gap-1.5"
            title="Interactive 6-Step Digital Assessment"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Health Checkup</span>
          </Link>

          <button
            onClick={onOpenConsultation}
            className="btn-gold text-xs !py-2 !px-4"
          >
            <PhoneCall className="w-3.5 h-3.5 text-black" />
            <span>Book Consultation</span>
          </button>

          <Link
            to="/admin"
            className="text-xs font-mono text-neutral-400 hover:text-white px-2.5 py-1.5 rounded bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors"
            title="Access Admin CRM"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-200 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-base font-medium text-neutral-200 hover:text-amber-400 py-1"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pl-3 border-l-2 border-amber-400/30 space-y-2">
              <span className="text-[11px] font-mono text-neutral-400 uppercase">Individual Services</span>
              {servicesData.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block text-xs text-neutral-300 hover:text-amber-400 py-0.5"
                >
                  → {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/business-health-checkup"
              className="text-center py-2.5 px-4 rounded-lg text-amber-300 bg-amber-400/10 border border-amber-400/30 text-xs font-semibold"
            >
              ✦ Free Business Health Checkup
            </Link>
            <Link
              to="/software-project-planning-guide"
              className="text-center py-2.5 px-4 rounded-lg text-neutral-300 bg-white/5 border border-white/10 text-xs font-semibold"
            >
              Download Planning Guide
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-gold w-full text-center text-xs !py-3"
            >
              Book Free Consultation
            </button>
            <Link
              to="/admin"
              className="text-center py-2 rounded text-xs font-mono text-neutral-400 hover:text-white bg-white/5"
            >
              Admin CRM Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
