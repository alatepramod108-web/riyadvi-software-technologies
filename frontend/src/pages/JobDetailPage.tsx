import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  Upload,
  Send,
  Loader2,
  FileCheck,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { careersData } from '../data/careersData';

export const JobDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const job = careersData.find((j) => j.slug === slug);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '3+ years',
    message: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('position', job.title);
      data.append('experience', formData.experience);
      data.append('message', formData.message);
      if (resumeFile) {
        data.append('resumeFile', resumeFile);
      }

      const res = await fetch('/api/applications', {
        method: 'POST',
        body: data
      });
      const resJson = await res.json();

      if (res.ok && resJson.success) {
        setSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMsg(resJson.error || 'Failed to submit application.');
      }
    } catch (err) {
      setErrorMsg('Network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 relative">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-8">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/careers" className="hover:text-amber-400">Careers</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amber-300 truncate max-w-xs">{job.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Job Details */}
          <div className="lg:col-span-7 space-y-8">
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-gold">{job.department}</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neutral-300">
                  {job.designation}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {job.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {job.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                  Experience: {job.experience}
                </span>
              </div>
            </header>

            <div className="glass-panel p-8 space-y-4">
              <h3 className="text-lg font-bold text-white font-heading">Role Overview</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{job.overview}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-heading">Core Responsibilities</h3>
              <div className="space-y-2.5">
                {job.responsibilities.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-heading">Requirements & Competencies</h3>
              <div className="space-y-2.5">
                {job.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-heading">Benefits & Perks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.benefits.map((b, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300">
                    ✦ {b}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Functional Application Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 glass-card-glow p-8 space-y-6 border border-amber-400/30">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto border border-amber-400/40 animate-bounce">
                    <FileCheck className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Application Transmitted!
                  </h3>
                  <p className="text-neutral-300 text-xs leading-relaxed max-w-sm mx-auto">
                    Thank you, <span className="text-amber-300 font-semibold">{formData.name}</span>. Your application for <span className="text-white font-medium">{job.title}</span> has been securely routed to our technical talent review team.
                  </p>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-neutral-400">
                    Status: <span className="text-amber-300 font-medium">In Initial Engineering Review</span>
                  </div>
                  <Link
                    to="/careers"
                    className="btn-gold !w-full text-xs text-center mt-4"
                  >
                    Browse Other Opportunities
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="badge-gold mb-1">Direct Submission</span>
                    <h3 className="text-2xl font-bold text-white font-heading">Apply for this Position</h3>
                    <p className="text-xs text-neutral-400">
                      Submit your credentials directly to the hiring managers.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="aditya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Relevant Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 5 years building React & Three.js"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="form-input-custom text-xs"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Resume (PDF / DOCX)
                    </label>
                    <div className="relative border-2 border-dashed border-white/10 hover:border-amber-400/50 rounded-xl p-4 text-center cursor-pointer transition-colors bg-white/5">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                      <span className="text-xs text-neutral-300 block">
                        {resumeFile ? resumeFile.name : 'Click to select or drag resume file'}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono">Max size: 10MB</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Cover Note or Portfolio URL
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about complex technical problems you have solved..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input-custom text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold !w-full py-3 text-xs flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
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
