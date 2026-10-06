import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { careersData } from '../data/careersData';

export const CareersPage: React.FC = () => {
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [experienceFilter, setExperienceFilter] = useState('All');

  const departments = ['All', 'Engineering', 'Design', 'Mobile', 'Management'];
  const experiences = ['All', '3-6 Years', '4-7 Years', '5+ Years'];

  const filteredJobs = careersData.filter((job) => {
    const matchDept = departmentFilter === 'All' || job.department === departmentFilter;
    const matchExp = experienceFilter === 'All' || job.experience.includes(experienceFilter.replace(' Years', ''));
    return matchDept && matchExp;
  });

  return (
    <div className="pt-32 pb-24 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="badge-gold">Join Riyadvi Software Technologies</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Build the Future of <span className="gold-gradient-text">Interactive Software</span>
          </h1>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            We are always seeking exceptional engineers, 3D artists, and product strategists who refuse to settle for mediocre interfaces.
          </p>
        </div>

        {/* Culture / Perks Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 space-y-2 border-amber-400/20">
            <div className="text-amber-400 font-bold text-lg font-heading">✦ Autonomous Ownership</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              No micromanagement. You own your architectural decisions, tools, and technical delivery from day one.
            </p>
          </div>
          <div className="glass-panel p-6 space-y-2 border-amber-400/20">
            <div className="text-amber-400 font-bold text-lg font-heading">✦ Global Enterprise Scale</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Ship software used by millions across North America, Europe, and Asia with sub-second performance budgets.
            </p>
          </div>
          <div className="glass-panel p-6 space-y-2 border-amber-400/20">
            <div className="text-amber-400 font-bold text-lg font-heading">✦ Tech & Learning Stipends</div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Annual stipends for top-tier hardware, displays, WebGL masterclasses, and international tech summits.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              Department:
            </span>
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDepartmentFilter(d)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  departmentFilter === d
                    ? 'bg-amber-400 text-black font-semibold border-amber-300'
                    : 'bg-white/5 text-neutral-400 border-white/10 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-400">Experience:</span>
            <select
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="bg-neutral-900 border border-white/10 text-xs text-white rounded-lg px-3 py-1.5"
            >
              <option value="All">All Levels</option>
              {experiences.filter((e) => e !== 'All').map((exp) => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.slug}
              className="glass-panel p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-amber-400/40 transition-all group"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase">
                    {job.department}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {job.type} ({job.experience})
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {job.title}
                </h3>

                <p className="text-xs text-neutral-400 max-w-2xl line-clamp-2">
                  {job.overview}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to={`/careers/${job.slug}`}
                  className="btn-gold !text-xs !py-3 !px-6"
                >
                  <span>View Details & Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-neutral-400 text-sm">
              No positions matching selected filters. You can still submit an open candidate profile via our contact portal.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
