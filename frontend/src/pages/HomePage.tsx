import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  Award,
  Globe,
  Smartphone,
  Eye,
  Box,
  Palette,
  ExternalLink
} from 'lucide-react';
import { Hero3D } from '../components/Hero3D';
import { TechConstellation3D } from '../components/TechConstellation3D';
import { DigitalTransformation } from '../components/DigitalTransformation';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { companyInfo } from '../data/companyData';

interface HomePageProps {
  onOpenConsultation: () => void;
}

const serviceIcons: Record<string, React.FC<{ className?: string }>> = {
  'web-development': Globe,
  'app-development': Smartphone,
  'digital-marketing': TrendingUp,
  'ar-vr': Eye,
  '3d-modeling': Box,
  'ui-ux-design': Palette
};

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="relative overflow-hidden">
      {/* ========================================================
          1. HERO SECTION (3D Interactive Core + Exact PDF Copy)
         ======================================================== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Technology & Digital Solutions Partner</span>
              </div>

              {/* Exact PDF Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                Custom Software & <br />
                <span className="gold-gradient-text">Digital Solutions</span> <br />
                to Grow Your Business
              </h1>

              {/* Exact PDF Supporting Text */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Web & App Development, UI/UX Design, and Business Strategy – all tailored to your needs.
              </p>

              {/* Exact PDF CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="btn-gold w-full sm:w-auto text-sm !py-3.5 !px-7 flex items-center justify-center gap-2"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  to="/services"
                  className="btn-secondary w-full sm:w-auto text-sm !py-3.5 !px-7 flex items-center justify-center gap-2"
                >
                  <span>Explore Our Solutions</span>
                </Link>
              </div>

              {/* Proof Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-heading">Since 2021</div>
                  <div className="text-[11px] text-neutral-400 font-mono">Proven Track Record</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300 font-heading">99.9%</div>
                  <div className="text-[11px] text-neutral-400 font-mono">Platform Uptime</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-heading">60 FPS</div>
                  <div className="text-[11px] text-neutral-400 font-mono">WebGL Optimization</div>
                </div>
              </div>
            </div>

            {/* Right 3D Interactive Canvas */}
            <div className="lg:col-span-6 relative">
              <Hero3D />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. DIGITAL TRANSFORMATION SECTION (Interactive 6-Stage)
         ======================================================== */}
      <DigitalTransformation />

      {/* ========================================================
          3. CORE SERVICES (Interactive Visual Treatments)
         ======================================================== */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/10 border border-amber-400/30 text-amber-300 uppercase tracking-wider mb-3">
                Full-Lifecycle Solutions
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Specialized Engineering Services
              </h2>
              <p className="mt-3 text-neutral-400 max-w-xl text-sm md:text-base">
                Explore our six core practices designed to elevate brand authority, operational velocity, and revenue throughput.
              </p>
            </div>
            <Link to="/services" className="btn-secondary self-start md:self-auto text-xs flex items-center gap-1.5">
              <span>View All Services Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
              const Icon = serviceIcons[service.slug] || Globe;
              return (
                <div
                  key={service.slug}
                  className="glass-panel p-6 md:p-8 relative flex flex-col justify-between group hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-neutral-900 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-neutral-500">0{index + 1}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {service.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-heading">{service.metric}</div>
                      <div className="text-[10px] text-neutral-500 font-mono">{service.metricLabel}</div>
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TECHNOLOGY ECOSYSTEM (Interactive 3D Constellation)
         ======================================================== */}
      <section className="py-24 bg-black relative border-t border-b border-white/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/10 border border-amber-400/30 text-amber-300 uppercase tracking-widest mb-3">
              Modern Tech Stack
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Technology Ecosystem
            </h2>
            <p className="mt-4 text-neutral-400 text-sm md:text-base leading-relaxed">
              Explore our connected 3D galaxy of modern frontends, high-throughput microservices, spatial WebGL runtimes, and distributed databases.
            </p>
          </div>

          <TechConstellation3D />
        </div>
      </section>

      {/* ========================================================
          5. WHY RIYADVI (Interactive Timeline & Health Checkup)
         ======================================================== */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content & Timeline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/10 border border-amber-400/30 text-amber-300 uppercase tracking-widest">
                Partner of Choice
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Why Visionary Brands Choose Riyadvi Since 2021
              </h2>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                We position as your true Technology & Digital Solutions Partner — not a detached vendor. We bring commercial acumen, technical architecture, and spatial design under one roof.
              </p>

              {/* Interactive Timeline Preview */}
              <div className="space-y-4 pt-4 border-l-2 border-amber-400/30 pl-5 ml-2">
                {companyInfo.milestones.slice(0, 3).map((item) => (
                  <div key={item.year} className="relative group">
                    <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-neutral-900 border-2 border-amber-400 group-hover:scale-125 transition-transform" />
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-amber-400">{item.year}</span>
                      <span className="text-sm font-bold text-white">{item.title}</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link to="/about" className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5">
                  <span>Explore full company timeline & leadership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Lead Generation Callout: Business Health Checkup Card */}
            <div className="lg:col-span-5">
              <div className="glass-card-glow p-8 space-y-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-amber-400/30 shadow-2xl relative">
                <div className="flex items-center justify-between">
                  <span className="badge-gold">Interactive Diagnostic</span>
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>

                <h3 className="text-2xl font-bold text-white font-heading leading-snug">
                  Is Your Business Ready for Its Next Digital Growth Stage?
                </h3>

                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                  Take our proprietary 6-step Business Health Checkup to analyze your website performance, technology readiness, and conversion bottleneck.
                </p>

                <div className="space-y-2.5 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Instant Digital Readiness Score (0–100)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Tailored Architectural Roadmap & Recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>100% Free Assessment with Immediate Feedback</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/business-health-checkup"
                    className="btn-gold !w-full text-center text-xs !py-3 font-bold"
                  >
                    Start Business Health Checkup →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FEATURED PORTFOLIO HIGHLIGHTS (Dynamic Case Studies)
         ======================================================== */}
      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="badge-gold mb-3">Proven Results</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Featured Case Studies
              </h2>
              <p className="mt-3 text-neutral-400 max-w-xl text-sm md:text-base">
                Discover how we engineered commercial breakthroughs for clients across luxury commerce, AI analytics, and healthcare.
              </p>
            </div>
            <Link to="/portfolio" className="btn-secondary text-xs flex items-center gap-1.5 self-start md:self-auto">
              <span>View All 10 Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.slice(0, 3).map((caseStudy) => (
              <div
                key={caseStudy.slug}
                className="glass-panel overflow-hidden group flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-neutral-900">
                    <img
                      src={caseStudy.featuredImage}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-amber-300 border border-white/10 uppercase">
                      {caseStudy.category}
                    </div>
                    {caseStudy.has3DModel && (
                      <div className="absolute bottom-3 right-3 bg-amber-500/90 text-black px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                        <Box className="w-3 h-3" />
                        <span>3D Interactive</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-mono text-neutral-400">{caseStudy.client}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {caseStudy.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                  <div className="pt-3">
                    <div className="text-base font-extrabold text-amber-400 font-heading">
                      {caseStudy.results[0]?.metric}
                    </div>
                    <div className="text-[10px] text-neutral-500 font-mono">
                      {caseStudy.results[0]?.label}
                    </div>
                  </div>
                  <Link
                    to={`/portfolio/${caseStudy.slug}`}
                    className="pt-3 text-xs font-semibold text-neutral-200 group-hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
