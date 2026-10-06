import React, { useState, useEffect } from 'react';
import {
  Users,
  MessageSquare,
  Calendar,
  Activity,
  FileText,
  Briefcase,
  CheckCircle,
  Clock,
  RefreshCw,
  Search,
  ExternalLink,
  ChevronRight,
  Shield,
  Download
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'enquiries' | 'consultations' | 'health' | 'leads' | 'applications'>('overview');
  const [stats, setStats] = useState<any>(null);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [consultations, setConsultations] = useState<any[]>([]);
  const [healthCheckups, setHealthCheckups] = useState<any[]>([]);
  const [leadMagnets, setLeadMagnets] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [resStats, resEnq, resCons, resHealth, resLeads, resApps] = await Promise.all([
        fetch('/api/admin/stats').then((r) => r.json()),
        fetch('/api/admin/enquiries').then((r) => r.json()),
        fetch('/api/admin/consultations').then((r) => r.json()),
        fetch('/api/admin/health-checkups').then((r) => r.json()),
        fetch('/api/admin/lead-magnets').then((r) => r.json()),
        fetch('/api/admin/applications').then((r) => r.json())
      ]);

      if (resStats.success) setStats(resStats.stats);
      if (resEnq.success) setEnquiries(resEnq.data);
      if (resCons.success) setConsultations(resCons.data);
      if (resHealth.success) setHealthCheckups(resHealth.data);
      if (resLeads.success) setLeadMagnets(resLeads.data);
      if (resApps.success) setApplications(resApps.data);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const updateStatus = async (collection: string, id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/${collection}/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        fetchAllData();
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  return (
    <div className="pt-28 pb-24 relative min-h-screen">
      <div className="container-custom">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge-gold">Enterprise CRM</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Database Active
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
              Riyadvi Lead & Operations Portal
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchAllData}
              className="btn-secondary text-xs !py-2 !px-3.5 flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Telemetry</span>
            </button>
          </div>
        </div>

        {/* Top Metric Cards (Exact PDF Requirements) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          <div
            onClick={() => setActiveTab('enquiries')}
            className={`glass-panel p-5 cursor-pointer transition-all ${
              activeTab === 'enquiries' ? 'border-amber-400 bg-neutral-900' : 'hover:border-amber-400/40'
            }`}
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
              <span>Total Enquiries</span>
              <MessageSquare className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
              {stats?.totalEnquiries ?? enquiries.length}
            </div>
            <div className="text-[10px] text-amber-300 font-mono mt-1">Client Inbound</div>
          </div>

          <div
            onClick={() => setActiveTab('consultations')}
            className={`glass-panel p-5 cursor-pointer transition-all ${
              activeTab === 'consultations' ? 'border-amber-400 bg-neutral-900' : 'hover:border-amber-400/40'
            }`}
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
              <span>Consultations</span>
              <Calendar className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
              {stats?.consultationRequests ?? consultations.length}
            </div>
            <div className="text-[10px] text-amber-300 font-mono mt-1">Strategy Calls</div>
          </div>

          <div
            onClick={() => setActiveTab('health')}
            className={`glass-panel p-5 cursor-pointer transition-all ${
              activeTab === 'health' ? 'border-amber-400 bg-neutral-900' : 'hover:border-amber-400/40'
            }`}
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
              <span>Health Checkups</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
              {stats?.healthCheckupLeads ?? healthCheckups.length}
            </div>
            <div className="text-[10px] text-amber-300 font-mono mt-1">Diagnostic Submissions</div>
          </div>

          <div
            onClick={() => setActiveTab('leads')}
            className={`glass-panel p-5 cursor-pointer transition-all ${
              activeTab === 'leads' ? 'border-amber-400 bg-neutral-900' : 'hover:border-amber-400/40'
            }`}
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
              <span>Lead Magnets</span>
              <FileText className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
              {stats?.leadMagnetLeads ?? leadMagnets.length}
            </div>
            <div className="text-[10px] text-amber-300 font-mono mt-1">Guide Downloads</div>
          </div>

          <div
            onClick={() => setActiveTab('applications')}
            className={`glass-panel p-5 cursor-pointer transition-all ${
              activeTab === 'applications' ? 'border-amber-400 bg-neutral-900' : 'hover:border-amber-400/40'
            }`}
          >
            <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
              <span>Job Applications</span>
              <Briefcase className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2 font-heading">
              {stats?.jobApplications ?? applications.length}
            </div>
            <div className="text-[10px] text-amber-300 font-mono mt-1">Talent Pipeline</div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-white/5 pb-4">
          {[
            { id: 'overview', label: 'Dashboard Overview' },
            { id: 'enquiries', label: `Enquiries (${enquiries.length})` },
            { id: 'consultations', label: `Consultations (${consultations.length})` },
            { id: 'health', label: `Health Checkups (${healthCheckups.length})` },
            { id: 'leads', label: `Lead Magnets (${leadMagnets.length})` },
            { id: 'applications', label: `Applications (${applications.length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs px-4 py-2 rounded-lg border transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-400 text-black font-bold border-amber-300'
                  : 'bg-white/5 text-neutral-400 border-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            <div className="glass-panel p-6 border-amber-400/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Recent System Inbounds</span>
              </h3>
              <div className="space-y-3">
                {stats?.recentActivity?.map((act: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 font-mono font-bold">
                        {act.type}
                      </span>
                      <span className="text-white font-medium">{act.title}</span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-400 font-mono">
                      <span>{new Date(act.date).toLocaleDateString()}</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10">
                        {act.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ENQUIRIES (Exact PDF Fields: Name, Email, Phone, Company, Requirement, Date, Status) */}
        {activeTab === 'enquiries' && (
          <div className="glass-panel overflow-hidden animate-fade-in border-amber-400/20">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Contact Enquiries Register</h3>
              <span className="text-xs text-neutral-400 font-mono">{enquiries.length} Inbound Requests</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-900/90 text-neutral-400 font-mono border-b border-white/10">
                  <tr>
                    <th className="p-3.5">Name</th>
                    <th className="p-3.5">Email</th>
                    <th className="p-3.5">Phone</th>
                    <th className="p-3.5">Company</th>
                    <th className="p-3.5">Requirement</th>
                    <th className="p-3.5">Date</th>
                    <th className="p-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {enquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 font-semibold text-white">{enq.name}</td>
                      <td className="p-3.5 font-mono text-amber-300">{enq.email}</td>
                      <td className="p-3.5 font-mono">{enq.phone || 'N/A'}</td>
                      <td className="p-3.5">{enq.company || 'N/A'}</td>
                      <td className="p-3.5 max-w-xs truncate" title={enq.requirement}>{enq.requirement}</td>
                      <td className="p-3.5 font-mono text-neutral-400">
                        {new Date(enq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-3.5">
                        <select
                          value={enq.status}
                          onChange={(e) => updateStatus('enquiries', enq.id, e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[11px]"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Qualified">Qualified</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: CONSULTATIONS */}
        {activeTab === 'consultations' && (
          <div className="glass-panel overflow-hidden animate-fade-in border-amber-400/20">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Consultation Booking Requests</h3>
              <span className="text-xs text-neutral-400 font-mono">{consultations.length} Bookings</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-900/90 text-neutral-400 font-mono border-b border-white/10">
                  <tr>
                    <th className="p-3.5">Name</th>
                    <th className="p-3.5">Email</th>
                    <th className="p-3.5">Company</th>
                    <th className="p-3.5">Service Focus</th>
                    <th className="p-3.5">Preferred Date</th>
                    <th className="p-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {consultations.map((c) => (
                    <tr key={c.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 font-semibold text-white">{c.name}</td>
                      <td className="p-3.5 font-mono text-amber-300">{c.email}</td>
                      <td className="p-3.5">{c.company || 'N/A'}</td>
                      <td className="p-3.5 text-white">{c.service}</td>
                      <td className="p-3.5 font-mono text-neutral-400">{c.preferredDate}</td>
                      <td className="p-3.5">
                        <select
                          value={c.status}
                          onChange={(e) => updateStatus('consultations', c.id, e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[11px]"
                        >
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed">Completed</option>
                          <option value="Rescheduled">Rescheduled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: HEALTH CHECKUPS */}
        {activeTab === 'health' && (
          <div className="glass-panel overflow-hidden animate-fade-in border-amber-400/20">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Business Health Checkup Leads</h3>
              <span className="text-xs text-neutral-400 font-mono">{healthCheckups.length} Submissions</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-900/90 text-neutral-400 font-mono border-b border-white/10">
                  <tr>
                    <th className="p-3.5">Business</th>
                    <th className="p-3.5">Contact</th>
                    <th className="p-3.5">Industry</th>
                    <th className="p-3.5">Score</th>
                    <th className="p-3.5">Readiness Grade</th>
                    <th className="p-3.5">Bottleneck</th>
                    <th className="p-3.5">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {healthCheckups.map((h) => (
                    <tr key={h.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 font-semibold text-white">{h.businessName}</td>
                      <td className="p-3.5">
                        <div className="text-white">{h.contactName}</div>
                        <div className="font-mono text-amber-300 text-[10px]">{h.contactEmail}</div>
                      </td>
                      <td className="p-3.5">{h.industry}</td>
                      <td className="p-3.5 font-black text-amber-400 font-mono text-sm">{h.score} / 100</td>
                      <td className="p-3.5 text-xs text-amber-200">{h.readinessGrade}</td>
                      <td className="p-3.5 max-w-xs truncate text-[11px] text-neutral-400" title={h.biggestBottleneck}>
                        {h.biggestBottleneck}
                      </td>
                      <td className="p-3.5 font-mono text-neutral-400">
                        {new Date(h.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: LEAD MAGNETS */}
        {activeTab === 'leads' && (
          <div className="glass-panel overflow-hidden animate-fade-in border-amber-400/20">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Software Project Planning Guide Downloads</h3>
              <span className="text-xs text-neutral-400 font-mono">{leadMagnets.length} Downloads</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-900/90 text-neutral-400 font-mono border-b border-white/10">
                  <tr>
                    <th className="p-3.5">Name</th>
                    <th className="p-3.5">Company</th>
                    <th className="p-3.5">Email</th>
                    <th className="p-3.5">Phone</th>
                    <th className="p-3.5">Downloaded Asset</th>
                    <th className="p-3.5">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {leadMagnets.map((l) => (
                    <tr key={l.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 font-semibold text-white">{l.name}</td>
                      <td className="p-3.5">{l.company}</td>
                      <td className="p-3.5 font-mono text-amber-300">{l.email}</td>
                      <td className="p-3.5 font-mono">{l.phone || 'N/A'}</td>
                      <td className="p-3.5 text-xs text-neutral-300">{l.guideName}</td>
                      <td className="p-3.5 font-mono text-neutral-400">
                        {new Date(l.downloadedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 6: JOB APPLICATIONS */}
        {activeTab === 'applications' && (
          <div className="glass-panel overflow-hidden animate-fade-in border-amber-400/20">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-base font-bold text-white">Submitted Career Applications</h3>
              <span className="text-xs text-neutral-400 font-mono">{applications.length} Candidates</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-900/90 text-neutral-400 font-mono border-b border-white/10">
                  <tr>
                    <th className="p-3.5">Candidate</th>
                    <th className="p-3.5">Email</th>
                    <th className="p-3.5">Position</th>
                    <th className="p-3.5">Experience</th>
                    <th className="p-3.5">Resume</th>
                    <th className="p-3.5">Date</th>
                    <th className="p-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-neutral-300">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 font-semibold text-white">{app.name}</td>
                      <td className="p-3.5 font-mono text-amber-300">{app.email}</td>
                      <td className="p-3.5 font-medium text-white">{app.position}</td>
                      <td className="p-3.5">{app.experience}</td>
                      <td className="p-3.5">
                        {app.resumeUrl ? (
                          <a
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono"
                          >
                            <span>Resume File</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-neutral-500">None</span>
                        )}
                      </td>
                      <td className="p-3.5 font-mono text-neutral-400">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-3.5">
                        <select
                          value={app.status}
                          onChange={(e) => updateStatus('applications', app.id, e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[11px]"
                        >
                          <option value="In Review">In Review</option>
                          <option value="Interview Scheduled">Interview Scheduled</option>
                          <option value="Offer Extended">Offer Extended</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
