import React, { useState } from 'react';
import { Target, Compass, Palette, Cpu, Rocket, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

const stepIcons = [Target, Compass, Palette, Cpu, Rocket, TrendingUp];

export const DigitalTransformation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = companyInfo.transformationStages;

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden border-t border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 uppercase tracking-widest mb-4">
            Proven Delivery Framework
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            The Digital Transformation Journey
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-400 leading-relaxed">
            How Riyadvi bridges the chasm between raw business ambition and market-defining software execution through a structured 6-stage lifecycle.
          </p>
        </div>

        {/* Step Progression Bar */}
        <div className="relative mb-12">
          {/* Progress Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-800 -translate-y-1/2 z-0" />
          <div
            className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {steps.map((stage, idx) => {
              const Icon = stepIcons[idx] || Cpu;
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 text-left lg:text-center ${
                    isActive
                      ? 'bg-neutral-900 border border-amber-400/50 shadow-lg shadow-amber-500/10 scale-105'
                      : 'bg-neutral-950/60 border border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Step Badge */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm mb-3 transition-colors ${
                      isActive
                        ? 'bg-amber-400 text-black shadow-md shadow-amber-400/30'
                        : isPassed
                        ? 'bg-neutral-800 text-amber-300 border border-amber-400/30'
                        : 'bg-neutral-900 text-neutral-400 border border-white/10'
                    }`}
                  >
                    {isPassed ? <CheckCircle className="w-5 h-5 text-amber-400" /> : <Icon className="w-5 h-5" />}
                  </div>

                  <span className="text-[11px] font-mono text-amber-400 font-semibold tracking-wider">
                    STAGE {stage.step}
                  </span>
                  <span className={`text-sm font-bold mt-1 leading-snug transition-colors ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Active Stage Detail */}
        <div className="glass-panel p-6 md:p-10 border border-amber-400/20 bg-gradient-to-r from-neutral-950 via-neutral-900/90 to-neutral-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                  PHASE {steps[activeStep].step} OF 06
                </span>
                <span className="text-neutral-400 text-sm font-medium">Enterprise Lifecycle</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Iterative Validation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Transparent Telemetry</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Guaranteed SLAs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end space-y-4">
              <div className="w-full bg-neutral-950/80 p-5 rounded-xl border border-white/10 text-sm">
                <div className="text-neutral-400 text-xs uppercase tracking-wider mb-2 font-mono">Next Milestone</div>
                <div className="text-amber-200 font-semibold flex items-center justify-between">
                  <span>{steps[(activeStep + 1) % steps.length].title}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="flex-1 py-2 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-neutral-300 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="flex-1 py-2 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-all shadow-md shadow-amber-400/20"
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
