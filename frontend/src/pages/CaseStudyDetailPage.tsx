import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, CheckCircle2, Cpu, Box, Sparkles, Building2, TrendingUp, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { servicesData } from '../data/servicesData';
import { ModelViewer3D } from '../components/ModelViewer3D';

export const CaseStudyDetailPage: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = portfolioData.find((p) => p.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedService = servicesData.find((s) => s.slug === caseStudy.serviceSlug);

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Breadcrumbs */}
      <div className="container-custom mb-8">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/portfolio" className="hover:text-amber-400">Portfolio</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amber-300 font-semibold">{caseStudy.title}</span>
        </div>
      </div>

      {/* Case Study Hero */}
      <section className="container-custom mb-16">
        <div className="max-w-4xl space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge-gold">{caseStudy.industry}</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300">
              Client: {caseStudy.client}
            </span>
            {caseStudy.has3DModel && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-black flex items-center gap-1.5 shadow-md shadow-amber-400/20">
                <Box className="w-3.5 h-3.5" />
                <span>Interactive 3D WebGL Case Study</span>
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            {caseStudy.title}
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal">
            {caseStudy.shortDescription}
          </p>
        </div>

        {/* Results Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {caseStudy.results.map((r, i) => (
            <div key={i} className="glass-panel p-6 border-amber-400/30 text-center sm:text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-heading">
                {r.metric}
              </div>
              <div className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Interactive Presentation OR Hero Visual Showcase */}
      <section className="container-custom mb-20">
        {caseStudy.has3DModel ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h3 className="text-xl font-bold text-white font-heading">
                Interactive 3D Digital Asset Experience
              </h3>
            </div>
            <ModelViewer3D
              modelType={caseStudy.modelType || 'luxury-bottle'}
              title={`${caseStudy.title} — Real-Time WebGL Spatial Showcase`}
              subtitle="Drag to rotate 360°, inspect PBR materials, and test lighting responsiveness"
            />
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-white/10 relative h-[380px] sm:h-[480px]">
            <img
              src={caseStudy.featuredImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-end p-8">
              <div className="space-y-1">
                <span className="text-xs font-mono text-amber-400">Deployed Production Environment</span>
                <h4 className="text-2xl font-bold text-white">{caseStudy.client} Architecture</h4>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Challenge & Solution Grid */}
      <section className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* The Challenge */}
          <div className="glass-panel p-8 space-y-4 border-white/10">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              Project Context
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              The Strategic Challenge
            </h3>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* The Solution */}
          <div className="glass-panel p-8 space-y-4 border-amber-400/30 bg-gradient-to-br from-neutral-900 to-black">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Engineered Execution
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              The Riyadvi Technical Solution
            </h3>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Deployed */}
      <section className="container-custom mb-20">
        <div className="glass-card-glow p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="badge-gold mb-2">Technical Foundations</span>
              <h3 className="text-2xl font-bold text-white mt-1">Technologies Deployed</h3>
              <p className="text-xs text-neutral-400 mt-1">High-throughput microservices, edge rendering & resilient storage.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((t) => (
                <div
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-amber-200 flex items-center gap-1.5"
                >
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Practice Link & Consultation CTA */}
      <section className="container-custom">
        <div className="p-8 md:p-12 glass-panel border-amber-400/40 text-center space-y-5">
          <span className="badge-gold">Replicate Similar Impact</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Have a project similar to {caseStudy.title}?
          </h2>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto">
            Speak directly with the lead engineers who architected this solution.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-gold !text-sm !py-3.5 !px-8"
            >
              Book Technical Consultation
            </button>
            {relatedService && (
              <Link
                to={`/services/${relatedService.slug}`}
                className="btn-secondary !text-sm !py-3.5 !px-8 flex items-center gap-2"
              >
                <span>Explore {relatedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
