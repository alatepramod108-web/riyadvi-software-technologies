import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 text-neutral-400 text-sm relative z-10">
      {/* Upper Pre-Footer Callout Banner */}
      <div className="border-b border-white/5 py-12 bg-gradient-to-r from-amber-500/5 via-neutral-900 to-amber-500/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
              Ready to architect your next digital leap?
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              Partner with an engineering team dedicated to your commercial growth.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-gold text-xs !py-2.5 !px-5">
              Contact Technical Partner
            </Link>
            <Link to="/business-health-checkup" className="btn-secondary text-xs !py-2.5 !px-5">
              Run Free Health Checkup
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg">
                <span className="font-heading font-black text-black text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base text-white tracking-tight">
                  RIYADVI
                </span>
                <span className="text-[9px] text-amber-400 uppercase tracking-widest font-mono">
                  Software Technologies
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Riyadvi Software Technologies is an elite Technology & Digital Solutions Partner. Founded in 2021, we architect high-throughput full-stack platforms, interactive 3D WebGL experiences, and enterprise automation pipelines.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-amber-400 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-amber-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{companyInfo.headquarters}</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">About Riyadvi</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-amber-400 transition-colors">Client Case Studies</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition-colors">Engineering Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-amber-400 transition-colors">Careers & Hiring</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Technical Team</Link>
              </li>
            </ul>
          </div>

          {/* Lead Magnets & Admin */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              Growth Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/business-health-checkup" className="hover:text-amber-400 text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Business Health Checkup
                </Link>
              </li>
              <li>
                <Link to="/software-project-planning-guide" className="hover:text-amber-400 transition-colors">
                  Planning Guide (PDF)
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Admin CRM Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {companyInfo.foundedYear}–2026 {companyInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Enterprise SLAs</span>
            <span>ISO / SOC2 Ready</span>
            <span>Global Edge Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
