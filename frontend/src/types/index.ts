export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  tagline: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  industryUseCases: { title: string; desc: string }[];
  techStack: string[];
  process: { step: number; title: string; desc: string }[];
  metric: string;
  metricLabel: string;
  iconName: string;
  relatedCaseStudySlugs: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: 'Web' | 'Mobile' | '3D / AR' | 'AI' | 'Enterprise';
  shortDescription: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  technologies: string[];
  has3DModel?: boolean;
  modelType?: 'quantum-core' | 'luxury-bottle' | 'spatial-device';
  featuredImage: string;
  serviceSlug: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: string[];
  featured?: boolean;
}

export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  designation: string;
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface HealthCheckupData {
  businessName: string;
  industry: string;
  companySize: string;
  currentWebsite: string;
  monthlyVisitors: string;
  marketingChannels: string[];
  techStack: string;
  biggestBottleneck: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

export interface AdminStats {
  totalEnquiries: number;
  consultationRequests: number;
  healthCheckupLeads: number;
  leadMagnetLeads: number;
  jobApplications: number;
  recentActivity: Array<{
    type: string;
    title: string;
    date: string;
    status: string;
  }>;
}
