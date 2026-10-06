import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Building,
  Globe,
  TrendingUp,
  Cpu,
  AlertCircle,
  Award,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BusinessHealthCheckupPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Business Info
    businessName: '',
    industry: 'Technology & SaaS',
    companySize: '10-50 Employees',
    // Step 2: Website & Digital Presence
    currentWebsite: '',
    pageSpeedPerception: 'Moderate (2-4 seconds)',
    mobileReadiness: 'Partially Optimized',
    // Step 3: Marketing
    marketingChannels: ['SEO & Organic Search', 'LinkedIn / B2B Outreach'],
    monthlyVisitors: '10,000 - 50,000',
    conversionRate: '1% - 3%',
    // Step 4: Technology
    techStackType: 'Modern JavaScript (React/Node/Next)',
    cloudProvider: 'AWS / Cloudflare Edge',
    apiMaturity: 'REST APIs Deployed',
    // Step 5: Challenges
    biggestBottleneck: 'Low conversion velocity & outdated design aesthetic',
    automationNeed: 'High - Need automated lead workflows and 3D showcases',
    // Step 6: Contact Info & Submission
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resultData, setResultData] = useState<{
    score: number;
    readinessGrade: string;
    recommendations: string[];
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleMarketingChannel = (channel: string) => {
    setFormData((prev) => {
      const exists = prev.marketingChannels.includes(channel);
      return {
        ...prev,
        marketingChannels: exists
          ? prev.marketingChannels.filter((c) => c !== channel)
          : [...prev.marketingChannels, channel]
      };
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/health-checkup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setResultData({
          score: data.score,
          readinessGrade: data.readinessGrade,
          recommendations: data.recommendations
        });
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.55 }
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit health checkup assessment.');
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
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="container-custom max-w-4xl mx-auto">
        {/* Header (Exact PDF Headline) */}
        <div className="text-center space-y-4 mb-12">
          <div className="badge-gold">Interactive Lead Diagnostic Tool</div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Is Your Business Ready for Its <br />
            <span className="gold-gradient-text">Next Digital Growth Stage?</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Complete this multi-step diagnostic to evaluate your architecture, conversion funnel, and technology readiness. Receive an instant score and custom recommendations.
          </p>
        </div>

        {/* Step Progress Tracker */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
            <span>Stage 0{currentStep} of 0{totalSteps}</span>
            <span className="text-amber-400 font-semibold">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Interactive Assessment Card */}
        <div className="glass-card-glow p-8 md:p-12 border border-amber-400/30">
          {submitted && resultData ? (
            /* Results Screen */
            <div className="space-y-8 animate-fade-in">
              <div className="text-center space-y-4 pb-6 border-b border-white/10">
                <div className="w-20 h-20 rounded-full bg-amber-400/20 text-amber-400 border-2 border-amber-400/40 flex items-center justify-center mx-auto text-3xl font-black font-heading">
                  {resultData.score}
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    Digital Health Score
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {resultData.readinessGrade}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto">
                  Assessed for <span className="text-white font-semibold">{formData.businessName || 'Your Business'}</span>. A comprehensive PDF breakdown and architectural blueprint have been archived for your review.
                </p>
              </div>

              {/* Recommendations */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>Strategic Engineering Recommendations</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resultData.recommendations.map((rec, i) => (
                    <div key={i} className="p-4 rounded-xl bg-neutral-900/90 border border-white/10 text-xs text-neutral-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="/guides/Riyadvi_Software_Project_Planning_Guide_2026.pdf"
                  download
                  className="btn-gold text-xs !py-3 !px-6 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Accompanying Planning Guide</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="btn-secondary text-xs !py-3 !px-6 w-full sm:w-auto"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* STEP 1: Business Information */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        Step 1: Business Information
                      </h3>
                      <p className="text-xs text-neutral-400">Tell us about your organization scale and industry.</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Company / Organization Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Acme Global Logistics"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Industry Sector</label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="form-input-custom text-xs bg-neutral-900"
                        >
                          <option value="Technology & SaaS">Technology & SaaS</option>
                          <option value="Luxury Retail & E-Commerce">Luxury Retail & E-Commerce</option>
                          <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                          <option value="Real Estate & Architecture">Real Estate & Architecture</option>
                          <option value="Financial Services & Fintech">Financial Services & Fintech</option>
                          <option value="Multi-Unit Franchise / Hospitality">Multi-Unit Franchise / Hospitality</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Company Size</label>
                        <select
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className="form-input-custom text-xs bg-neutral-900"
                        >
                          <option value="1-10 Employees">1-10 Employees</option>
                          <option value="10-50 Employees">10-50 Employees</option>
                          <option value="50-250 Employees">50-250 Employees</option>
                          <option value="250+ Enterprise">250+ Enterprise</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Website & Digital Presence */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        Step 2: Website & Digital Presence
                      </h3>
                      <p className="text-xs text-neutral-400">Evaluate current speed, usability, and architecture.</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Current Website URL</label>
                      <input
                        type="url"
                        placeholder="https://yourcompany.com"
                        value={formData.currentWebsite}
                        onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Perceived Load Speed</label>
                        <select
                          value={formData.pageSpeedPerception}
                          onChange={(e) => setFormData({ ...formData, pageSpeedPerception: e.target.value })}
                          className="form-input-custom text-xs bg-neutral-900"
                        >
                          <option value="Lightning Fast (< 1.5 seconds)">Lightning Fast (&lt; 1.5 seconds)</option>
                          <option value="Moderate (2-4 seconds)">Moderate (2-4 seconds)</option>
                          <option value="Sluggish / Heavy (> 4 seconds)">Sluggish / Heavy (&gt; 4 seconds)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Mobile Responsiveness</label>
                        <select
                          value={formData.mobileReadiness}
                          onChange={(e) => setFormData({ ...formData, mobileReadiness: e.target.value })}
                          className="form-input-custom text-xs bg-neutral-900"
                        >
                          <option value="Fully Responsive & PWA Ready">Fully Responsive & PWA Ready</option>
                          <option value="Partially Optimized">Partially Optimized</option>
                          <option value="Desktop Focused / Broken on Phones">Desktop Focused / Broken on Phones</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Marketing */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        Step 3: Marketing & Acquisition Funnels
                      </h3>
                      <p className="text-xs text-neutral-400">Select active traffic and acquisition channels.</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-2">Active Channels (Select all that apply)</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {['SEO & Organic Search', 'Google Ads (Search/PMax)', 'Meta / Social Ads', 'LinkedIn / B2B Outreach', 'Email Lifecycle Automation', 'Direct Referrals'].map((ch) => {
                          const active = formData.marketingChannels.includes(ch);
                          return (
                            <button
                              type="button"
                              key={ch}
                              onClick={() => toggleMarketingChannel(ch)}
                              className={`p-3 rounded-xl border text-xs text-left transition-all ${
                                active
                                  ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                                  : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                              }`}
                            >
                              {active ? '✓ ' : '+ '} {ch}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Monthly Traffic Volume</label>
                        <select
                          value={formData.monthlyVisitors}
                          onChange={(e) => setFormData({ ...formData, monthlyVisitors: e.target.value })}
                          className="form-input-custom text-xs bg-neutral-900"
                        >
                          <option value="Under 5,000">Under 5,000</option>
                          <option value="5,000 - 15,000">5,000 - 15,000</option>
                          <option value="15,000 - 50,000">15,000 - 50,000</option>
                          <option value="50,000+ High Volume">50,000+ High Volume</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Estimated Conversion Rate</label>
                        <select
                          value={formData.conversionRate}
                          onChange={(e) => setFormData({ ...formData, conversionRate: e.target.value })}
                          className="form-input-custom text-xs bg-neutral-900"
                        >
                          <option value="Below 1% (Low)">Below 1% (Low)</option>
                          <option value="1% - 3% (Average)">1% - 3% (Average)</option>
                          <option value="3% - 6% (Strong)">3% - 6% (Strong)</option>
                          <option value="Above 6% (Elite)">Above 6% (Elite)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Technology */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        Step 4: Technology & Infrastructure
                      </h3>
                      <p className="text-xs text-neutral-400">Review infrastructure modernity and cloud topology.</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Core Tech Stack</label>
                        <select
                          value={formData.techStackType}
                          onChange={(e) => setFormData({ ...formData, techStackType: e.target.value })}
                          className="form-input-custom text-xs bg-neutral-900"
                        >
                          <option value="Modern JavaScript (React/Node/Next)">Modern JavaScript (React/Node/Next)</option>
                          <option value="WordPress / Legacy PHP / Monolith">WordPress / Legacy PHP / Monolith</option>
                          <option value="Shopify / E-Commerce Saas">Shopify / E-Commerce Saas</option>
                          <option value="Python / Django / FastAPI">Python / Django / FastAPI</option>
                          <option value="Custom Proprietary Framework">Custom Proprietary Framework</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Cloud Infrastructure</label>
                        <select
                          value={formData.cloudProvider}
                          onChange={(e) => setFormData({ ...formData, cloudProvider: e.target.value })}
                          className="form-input-custom text-xs bg-neutral-900"
                        >
                          <option value="AWS / Cloudflare Edge">AWS / Cloudflare Edge</option>
                          <option value="Vercel / Render / Managed Cloud">Vercel / Render / Managed Cloud</option>
                          <option value="Traditional Shared / VPS Hosting">Traditional Shared / VPS Hosting</option>
                          <option value="Google Cloud / Azure">Google Cloud / Azure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">API Readiness & Microservices</label>
                      <select
                        value={formData.apiMaturity}
                        onChange={(e) => setFormData({ ...formData, apiMaturity: e.target.value })}
                        className="form-input-custom text-xs bg-neutral-900"
                      >
                        <option value="REST APIs Deployed">REST APIs Deployed</option>
                        <option value="GraphQL / Edge Microservices">GraphQL / Edge Microservices</option>
                        <option value="Legacy tightly coupled monolithic DB calls">Legacy tightly coupled monolithic DB calls</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Business Challenges */}
              {currentStep === 5 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        Step 5: Primary Business Challenges
                      </h3>
                      <p className="text-xs text-neutral-400">Pinpoint bottlenecks preventing your next revenue tier.</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Biggest Current Operational Bottleneck</label>
                      <select
                        value={formData.biggestBottleneck}
                        onChange={(e) => setFormData({ ...formData, biggestBottleneck: e.target.value })}
                        className="form-input-custom text-xs bg-neutral-900"
                      >
                        <option value="Low conversion velocity & outdated design aesthetic">Low conversion velocity & outdated design aesthetic</option>
                        <option value="Scalability bottlenecks & slow platform performance">Scalability bottlenecks & slow platform performance</option>
                        <option value="Disparate tools lacking unified API integration">Disparate tools lacking unified API integration</option>
                        <option value="High customer acquisition cost (CAC)">High customer acquisition cost (CAC)</option>
                        <option value="Lack of interactive 3D / modern spatial experiences">Lack of interactive 3D / modern spatial experiences</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Priority Need for Automation</label>
                      <select
                        value={formData.automationNeed}
                        onChange={(e) => setFormData({ ...formData, automationNeed: e.target.value })}
                        className="form-input-custom text-xs bg-neutral-900"
                      >
                        <option value="High - Need automated lead workflows and 3D showcases">High - Need automated lead workflows and 3D showcases</option>
                        <option value="Medium - Modernize frontend and mobile experience first">Medium - Modernize frontend and mobile experience first</option>
                        <option value="Strategic - Complete cloud replatforming">Strategic - Complete cloud replatforming</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Submission & Contact Info */}
              {currentStep === 6 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">
                        Step 6: Submission & Report Generation
                      </h3>
                      <p className="text-xs text-neutral-400">Where should we deliver your comprehensive readiness diagnostic?</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Contact Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robert Vance"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="form-input-custom text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Contact Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="robert@company.com"
                          value={formData.contactEmail}
                          onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                          className="form-input-custom text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-300 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 312 555 0192"
                          value={formData.contactPhone}
                          onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                          className="form-input-custom text-xs"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200">
                      ⚡ On submission, your assessment will be securely sent to our backend and evaluated by our architecture engine to produce your score.
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn-secondary text-xs !py-2.5 !px-5 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-gold text-xs !py-2.5 !px-6 flex items-center gap-1.5"
                  >
                    <span>Continue to Step 0{currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold text-xs !py-3 !px-8 flex items-center gap-2 font-bold shadow-lg shadow-amber-400/20"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Calculating Health Score...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Submit & Calculate Score</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
