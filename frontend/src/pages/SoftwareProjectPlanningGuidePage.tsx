import React, { useState } from 'react';
import {
  Download,
  BookOpen,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Sparkles,
  Loader2,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SoftwareProjectPlanningGuidePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    guideType: 'Riyadvi Software Project Planning Guide (2026 Edition)'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setDownloadUrl(data.downloadUrl || '/guides/Riyadvi_Software_Project_Planning_Guide_2026.pdf');
        setSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit download request.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Handbook Preview & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="badge-gold">Complimentary Strategic Lead Magnet</div>

            {/* Exact PDF Title */}
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Download Software <br />
              <span className="gold-gradient-text">Project Planning Guide</span>
            </h1>

            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              The exact enterprise framework used by Riyadvi architects to scope, design, budget, and deploy multi-million dollar digital ecosystems without cost overruns or architectural debt.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                Inside the 2026 Edition:
              </div>
              {[
                'Full-Stack Architecture Decision Matrix (Next.js vs Remix vs Vite)',
                'Interactive 3D WebGL Feasibility & GPU Performance Budgets',
                'Microservices vs Modular Monolith Database Topology Blueprints',
                'Enterprise Project Estimation Worksheets & Sprint Velocity Formulas',
                'Security & SOC2 / HIPAA Compliance Checklists'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Graphic Handbook Cover Card */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <div className="text-white font-bold">Format: High-Res Interactive PDF Blueprint</div>
                <div className="text-neutral-400 font-mono">Immediate Direct Access • No Spam Guaranteed</div>
              </div>
            </div>
          </div>

          {/* Right Column: Collection Form & Instant Access */}
          <div className="lg:col-span-6">
            <div className="glass-card-glow p-8 md:p-10 border border-amber-400/30 space-y-6">
              {submitted ? (
                <div className="text-center py-10 space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/40 animate-bounce">
                    <FileText className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      Access Granted!
                    </h3>
                    <p className="text-neutral-300 text-xs sm:text-sm mt-2 max-w-sm mx-auto">
                      Thank you, <span className="text-amber-300 font-semibold">{formData.name}</span>. Your copy of the Software Project Planning Guide is ready for instant download.
                    </p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-neutral-300 space-y-1">
                    <div className="font-semibold text-white">Registered Lead Confirmation:</div>
                    <div className="font-mono text-neutral-400">{formData.email} • {formData.company}</div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={downloadUrl}
                      download="Riyadvi_Software_Project_Planning_Guide_2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold !w-full text-xs !py-3.5 flex items-center justify-center gap-2 font-bold"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF Guide Immediately</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="badge-gold mb-1">Instant Access</span>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      Get Your Free Copy
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Fill out the fields below to receive immediate access to the blueprint.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Required PDF Fields: Name, Company, Email, Phone */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nova Digital Studio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="elena@novastudio.design"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+49 30 123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold !w-full py-3.5 text-xs flex items-center justify-center gap-2 font-bold shadow-lg shadow-amber-400/20 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Validating & Storing Lead...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Software Project Planning Guide</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-neutral-500 font-mono">
                    Protected by enterprise privacy standards. No marketing spam.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
