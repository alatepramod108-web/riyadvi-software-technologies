import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', '3D / AR', 'AI', 'Web', 'Mobile', 'Enterprise'];

  const filteredProjects = filter === 'All'
    ? portfolioData
    : portfolioData.filter((p) => p.category === filter);

  return (
    <div className="pt-32 pb-24 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="badge-gold">Proven Engineering Track Record</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Client Success & <span className="gold-gradient-text">Case Studies</span>
          </h1>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            Explore how Riyadvi architects high-impact commercial outcomes through 3D spatial computing, cloud microservices, and AI-driven platforms.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-4 py-2 rounded-full border transition-all ${
                filter === cat
                  ? 'bg-amber-400 text-black font-bold border-amber-300 shadow-md shadow-amber-400/20'
                  : 'bg-white/5 text-neutral-400 border-white/10 hover:border-amber-400/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="glass-panel overflow-hidden group flex flex-col justify-between hover:border-amber-400/50 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-52 overflow-hidden bg-neutral-900">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-amber-300 border border-white/10">
                    {project.category}
                  </div>
                  {project.has3DModel && (
                    <div className="absolute top-3 right-3 bg-amber-400 text-black px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow-lg">
                      <Box className="w-3.5 h-3.5" />
                      <span>3D WebGL</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-mono text-neutral-400">{project.client}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="p-6 pt-0 mt-4 border-t border-white/5 flex items-center justify-between">
                <div className="pt-3">
                  <div className="text-lg font-black text-amber-400 font-heading">
                    {project.results[0]?.metric}
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    {project.results[0]?.label}
                  </div>
                </div>
                <Link
                  to={`/portfolio/${project.slug}`}
                  className="btn-gold !text-xs !py-2 !px-3.5 mt-3"
                >
                  <span>Explore Case</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
