import React, { useState } from 'react';
import { Award, Target, Compass, Sparkles, CheckCircle2, Users, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export const AboutPage: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [activeMilestoneYear, setActiveMilestoneYear] = useState('2026');

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Glow Ambience */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Hero Header */}
      <section className="container-custom mb-20 text-center max-w-4xl mx-auto space-y-5">
        <div className="badge-gold">Founded in 2021</div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Pioneering the Next Era of <br />
          <span className="gold-gradient-text">Digital Architecture</span>
        </h1>
        <p className="text-base sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          We exist to bridge the divide between avant-garde 3D design and battle-tested cloud engineering, creating digital products that accelerate enterprise revenue.
        </p>
      </section>

      {/* Vision, Mission & Values Grid */}
      <section className="container-custom mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="glass-panel p-8 md:p-10 border-amber-400/30 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">Our Vision</h3>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="glass-panel p-8 md:p-10 border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">Our Mission</h3>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="badge-gold mb-2">Our Operating DNA</span>
            <h3 className="text-3xl font-extrabold text-white mt-2">Core Principles</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.values.map((v, i) => (
              <div key={i} className="glass-panel p-6 space-y-3 hover:border-amber-400/40 transition-colors">
                <span className="text-xs font-mono text-amber-400 font-bold">0{i + 1}</span>
                <h4 className="text-lg font-bold text-white">{v.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Milestones Timeline (Since 2021) */}
      <section className="container-custom mb-24">
        <div className="glass-card-glow p-8 md:p-12 border border-amber-400/30">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-gold mb-2">Since 2021</div>
            <h3 className="text-3xl font-extrabold text-white">
              The Evolution of Riyadvi
            </h3>
            <p className="text-xs text-neutral-400 mt-2">
              From our founding in 2021 to our present global footprint — track key company milestones.
            </p>
          </div>

          {/* Timeline Nav Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {companyInfo.milestones.map((m) => (
              <button
                key={m.year}
                onClick={() => setActiveMilestoneYear(m.year)}
                className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeMilestoneYear === m.year
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105'
                    : 'bg-neutral-900 text-neutral-400 border border-white/10 hover:text-white'
                }`}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          {(() => {
            const current = companyInfo.milestones.find((m) => m.year === activeMilestoneYear) || companyInfo.milestones[0];
            return (
              <div className="p-8 rounded-2xl bg-neutral-900/90 border border-amber-400/20 max-w-2xl mx-auto text-center space-y-4 animate-fade-in">
                <span className="text-4xl font-black text-amber-400 font-heading">{current.year}</span>
                <h4 className="text-2xl font-bold text-white">{current.title}</h4>
                <p className="text-sm text-neutral-300 leading-relaxed">{current.desc}</p>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="container-custom mb-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="badge-gold mb-2">Industry Honors</span>
          <h3 className="text-3xl font-extrabold text-white mt-2">
            Awards & Accreditations
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.awards.map((award, idx) => (
            <div key={idx} className="glass-panel p-6 space-y-3 border-amber-400/20 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white leading-snug">{award.title}</h4>
              <p className="text-xs text-neutral-400 font-mono">{award.issuer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="container-custom mb-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="badge-gold mb-2">People Behind the Vision</span>
          <h3 className="text-3xl font-extrabold text-white mt-2">
            Leadership & Architecture Board
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyInfo.leadership.map((leader, i) => (
            <div key={i} className="glass-panel overflow-hidden group hover:border-amber-400/40 transition-all">
              <div className="h-64 overflow-hidden bg-neutral-900">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {leader.name}
                </h4>
                <div className="text-xs font-mono text-amber-400">{leader.role}</div>
                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Callout */}
      <section className="container-custom">
        <div className="p-8 md:p-12 glass-panel border-amber-400/40 text-center space-y-4">
          <span className="badge-gold">Partner With Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Experience the Riyadvi Advantage First-Hand
          </h2>
          <p className="text-neutral-300 text-sm max-w-lg mx-auto">
            Book an introductory alignment conversation with our leadership team.
          </p>
          <div className="pt-2">
            <button onClick={onOpenConsultation} className="btn-gold !text-sm !py-3.5 !px-8">
              Book Technical Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
