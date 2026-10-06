import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, CheckCircle2, Loader2, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirement: 'Web & Enterprise Platform Development',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit contact enquiry.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="badge-gold">Start a Strategic Partnership</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Connect With Our <span className="gold-gradient-text">Engineering Leadership</span>
          </h1>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
            Whether you are modernizing an enterprise portal, building an interactive 3D WebGL experience, or developing native mobile apps — let's build something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Channels, WhatsApp, Calendly, Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 space-y-6 border-amber-400/30">
              <h3 className="text-xl font-bold text-white font-heading">
                Direct Communication Channels
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">Email Solutions Team</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-amber-400 font-medium">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">Direct Phone Line</div>
                    <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-amber-400 font-medium">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">Global Innovation Hub</div>
                    <div className="text-white">{companyInfo.headquarters}</div>
                  </div>
                </div>
              </div>

              {/* Integrations: WhatsApp & Calendly */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  Instant Access Integrations
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918041228920?text=Hi%20Riyadvi%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all text-xs font-semibold"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Calendly */}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all text-xs font-semibold"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4" />
                    <span>Instant Calendar Booking (Calendly)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Interactive Location Visual */}
            <div className="glass-panel p-6 border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>HEADQUARTERS RADAR</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  HQ Online
                </span>
              </div>
              <div className="h-32 rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden flex items-center justify-center text-center p-4">
                <div className="space-y-1">
                  <MapPin className="w-6 h-6 text-amber-400 mx-auto" />
                  <div className="text-xs font-bold text-white">Bangalore Silicon Corridor</div>
                  <div className="text-[10px] text-neutral-400 font-mono">12.9716° N, 77.5946° E • Hybrid Operations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-glow p-8 md:p-10 border border-amber-400/30 space-y-6">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/40 animate-bounce">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Enquiry Registered Successfully!
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-amber-300 font-semibold">{formData.name}</span>. Your enquiry has been written to our database and our technical solutions director will respond within 24 hours.
                  </p>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-neutral-400 max-w-sm mx-auto">
                    Registered Requirement: <span className="text-white font-medium">{formData.requirement}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        requirement: 'Web & Enterprise Platform Development',
                        message: ''
                      });
                    }}
                    className="btn-gold !text-xs !py-3 !px-6 mt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="badge-gold mb-1">Direct Technical Inquiry</span>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      Request Technical Consultation & Quote
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Fill out this form to connect with our engineering team. Data is routed directly to our backend API.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Michael Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="michael@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Acme Enterprise"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Primary Requirement *</label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="form-input-custom text-xs bg-neutral-900"
                    >
                      <option value="Web & Enterprise Platform Development">Web & Enterprise Platform Development</option>
                      <option value="Cross-Platform Mobile App (iOS / Android)">Cross-Platform Mobile App (iOS / Android)</option>
                      <option value="3D Modeling & WebGL Interactive Showcases">3D Modeling & WebGL Interactive Showcases</option>
                      <option value="AR / VR & WebXR Spatial Experiences">AR / VR & WebXR Spatial Experiences</option>
                      <option value="AI Integration & Custom LLM Architecture">AI Integration & Custom LLM Architecture</option>
                      <option value="Digital Transformation & Architecture Audit">Digital Transformation & Architecture Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Project Details / Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your goals, current technology stack, desired timeline, or budget..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input-custom text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold !w-full py-3.5 text-xs flex items-center justify-center gap-2 mt-2 font-bold"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending to API...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Connect with Technical Partner</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
