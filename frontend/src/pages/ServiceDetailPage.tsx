import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Building,
  Quote
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { ModelViewer3D } from '../components/ModelViewer3D';

interface ServiceDetailPageProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related case studies
  const relatedCases = portfolioData.filter((c) =>
    service.relatedCaseStudySlugs.includes(c.slug) || c.serviceSlug === service.slug
  );

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Breadcrumb Navigation */}
      <div className="container-custom mb-8">
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-amber-400">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amber-300 font-semibold">{service.title}</span>
        </div>
      </div>

      {/* 1. Interactive Service Hero */}
      <section className="container-custom mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="badge-gold">Specialized Practice</div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              {service.tagline}. {service.shortDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation(service.title)}
                className="btn-gold text-xs !py-3 !px-6"
              >
                <span>Get a Quote for {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xl font-extrabold text-amber-400 font-heading">{service.metric}</span>
                <span className="text-xs text-neutral-400 font-mono">{service.metricLabel}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            {service.slug === '3d-modeling' || service.slug === 'ar-vr' ? (
              <ModelViewer3D
                modelType={service.slug === '3d-modeling' ? 'luxury-bottle' : 'spatial-device'}
                title={`${service.title} Interactive Demo`}
                subtitle="Rotate 360°, inspect wireframes & evaluate real-time WebGL rendering"
              />
            ) : (
              <div className="glass-card-glow p-8 space-y-6 border border-amber-400/30">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Technology Stack Benchmark
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  Engineered with Zero Technical Debt
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Every project delivered by our {service.title} practice adheres to modular enterprise design principles, sub-second latency constraints, and automated regression testing.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {service.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-2 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-amber-200 flex items-center gap-1.5"
                    >
                      <Cpu className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Section */}
      <section className="container-custom mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Problem */}
          <div className="glass-panel p-8 border-red-500/20 bg-gradient-to-b from-red-950/10 to-transparent space-y-4">
            <div className="flex items-center gap-2.5 text-red-400 font-semibold text-sm">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>The Industry Bottleneck</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              Why Traditional Approaches Fail
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {service.problem}
            </p>
          </div>

          {/* The Solution */}
          <div className="glass-panel p-8 border-amber-400/30 bg-gradient-to-b from-amber-950/10 to-transparent space-y-4">
            <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm">
              <Lightbulb className="w-5 h-5 shrink-0" />
              <span>The Riyadvi Strategic Approach</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">
              Our High-Performance Architecture
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {service.solution}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="container-custom mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge-gold mb-2">Practice Capabilities</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Key Architecture Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.keyFeatures.map((feat, idx) => (
            <div key={idx} className="glass-panel p-6 space-y-3 hover:border-amber-400/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center text-xs font-mono font-bold">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-white">{feat}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industry Use Cases */}
      <section className="container-custom mb-20">
        <div className="glass-card-glow p-8 md:p-12">
          <div className="max-w-2xl mb-10">
            <span className="badge-gold mb-2">Domain Applications</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Industry Use Cases & Commercial Deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.industryUseCases.map((useCase, i) => (
              <div key={i} className="p-6 rounded-xl bg-neutral-900/80 border border-white/10 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Building className="w-4 h-4" />
                </div>
                <h4 className="text-lg font-bold text-white">{useCase.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Execution Process */}
      <section className="container-custom mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge-gold mb-2">Delivery Methodology</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            How We Execute {service.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {service.process.map((step) => (
            <div key={step.step} className="glass-panel p-6 relative space-y-3 border-t-2 border-t-amber-400/60">
              <div className="text-3xl font-black text-amber-400/30 font-heading">
                0{step.step}
              </div>
              <h4 className="text-base font-bold text-white">{step.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Related Case Studies */}
      {relatedCases.length > 0 && (
        <section className="container-custom mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="badge-gold">Demonstrated Impact</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1">
                Related Case Studies
              </h3>
            </div>
            <Link to="/portfolio" className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1">
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCases.map((cs) => (
              <Link
                key={cs.slug}
                to={`/portfolio/${cs.slug}`}
                className="glass-panel overflow-hidden group hover:border-amber-400/40 transition-all"
              >
                <div className="h-44 overflow-hidden bg-neutral-900 relative">
                  <img
                    src={cs.featuredImage}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-amber-300">
                    {cs.category}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-[11px] font-mono text-neutral-400">{cs.client}</div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {cs.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">{cs.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 7. Action CTA: Get a Quote */}
      <section className="container-custom">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-amber-500/20 via-neutral-950 to-black border border-amber-400/40 text-center space-y-5">
          <span className="badge-gold">Initiate Engagement</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to Accelerate with {service.title}?
          </h2>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto">
            Get an exact architectural estimate, timeline roadmap, and dedicated team allocation proposal.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation(service.title)}
              className="btn-gold !text-sm !py-3.5 !px-8 shadow-xl shadow-amber-500/20"
            >
              Get a Quote for {service.title}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
