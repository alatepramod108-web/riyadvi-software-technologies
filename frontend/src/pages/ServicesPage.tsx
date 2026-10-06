import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, TrendingUp, Eye, Box, Palette, CheckCircle, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'web-development': Globe,
  'app-development': Smartphone,
  'digital-marketing': TrendingUp,
  'ar-vr': Eye,
  '3d-modeling': Box,
  'ui-ux-design': Palette
};

export const ServicesPage: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="pt-32 pb-24 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="badge-gold">Enterprise Engineering & Design Practices</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Specialized Services Built for <span className="gold-gradient-text">Unstoppable Growth</span>
          </h1>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            From reactive web and native mobile ecosystems to spatial 3D WebGL and programmatic digital growth funnels — discover our end-to-end technical practices.
          </p>
        </div>

        {/* 6 Reusable Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.slug] || Globe;
            return (
              <div
                key={service.slug}
                className="glass-panel p-8 flex flex-col justify-between group hover:border-amber-400/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-xs text-neutral-500">PRACTICE 0{index + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-mono mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-mono">
                      Highlights
                    </div>
                    {service.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white font-heading">{service.metric}</div>
                    <div className="text-[10px] text-neutral-500 font-mono">{service.metricLabel}</div>
                  </div>
                  <Link
                    to={`/services/${service.slug}`}
                    className="btn-gold !text-xs !py-2 !px-4"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 md:p-12 glass-card-glow text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">
            Need a tailored multi-discipline technical partnership?
          </h3>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto">
            We frequently assemble dedicated cross-functional teams blending 3D artists, full-stack engineers, and cloud architects for strategic initiatives.
          </p>
          <div className="pt-2">
            <button onClick={onOpenConsultation} className="btn-gold text-xs !py-3 !px-6">
              Schedule Custom Architecture Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
