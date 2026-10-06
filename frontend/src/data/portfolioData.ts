import { CaseStudy } from '../types';

export const portfolioData: CaseStudy[] = [
  {
    id: 'case-1',
    slug: 'wanaromah',
    title: 'Wanaromah Perfumers',
    client: 'Wanaromah Fragrance Atelier',
    industry: 'Luxury Fragrance & E-Commerce',
    category: '3D / AR',
    shortDescription: 'High-end 3D WebGL flacon visualizer with gold metallic reflections, scent note orchestration, and global checkout.',
    challenge: 'Wanaromah needed to convey the sensory prestige of rare artisanal fragrances digitally, where flat product photos failed to inspire online buyers.',
    solution: 'Engineered an interactive 3D WebGL bottle showcase using React Three Fiber and PBR shaders. Users can inspect the flacon in real-time 360°, trigger olfactory notes, and customize bottle engravings.',
    results: [
      { metric: '+215%', label: 'Online D2C Sales Growth' },
      { metric: '4.8 min', label: 'Average Session Duration' },
      { metric: '-42%', label: 'Return Rate on Purchases' }
    ],
    technologies: ['React', 'Three.js', 'React Three Fiber', 'GLSL Shaders', 'Shopify Storefront API', 'GSAP'],
    has3DModel: true,
    modelType: 'luxury-bottle',
    featuredImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: '3d-modeling'
  },
  {
    id: 'case-2',
    slug: 'laxmi-astro-ai',
    title: 'Laxmi Astro AI',
    client: 'Laxmi Astrological Innovations',
    industry: 'Artificial Intelligence & Predictive Analytics',
    category: 'AI',
    shortDescription: 'AI-driven Vedic astrological prediction engine processing ephemeris planetary data with natural language insights.',
    challenge: 'Traditional astrological consultations were bottlenecked by manual calculations and lacked dynamic modern visualization of planetary transits.',
    solution: 'Designed and deployed a high-speed AI analytics engine pairing Swiss Ephemeris astronomical calculations with LLM-powered personalized life path forecasting.',
    results: [
      { metric: '1.2M+', label: 'Predictions Generated' },
      { metric: '<350ms', label: 'Ephemeris Query Latency' },
      { metric: '91%', label: 'User Satisfaction Rating' }
    ],
    technologies: ['Next.js', 'Python FastAPI', 'OpenAI API', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    has3DModel: true,
    modelType: 'quantum-core',
    featuredImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'web-development'
  },
  {
    id: 'case-3',
    slug: 'puratap',
    title: 'Puratap Systems',
    client: 'Puratap Water Filtration',
    industry: 'IoT, Cleantech & Consumer Hardware',
    category: 'Web',
    shortDescription: 'IoT telemetry web portal and maintenance subscription engine monitoring pure water flow and filter life in real time.',
    challenge: 'Puratap needed to transition from offline manual maintenance calls to automated smart telemetry and recurring filter subscription renewals.',
    solution: 'Built a unified customer web portal and IoT ingestion pipeline with live cartridge health bars, automated replacement dispatching, and self-service booking.',
    results: [
      { metric: '88%', label: 'Automated Renewal Rate' },
      { metric: '150k+', label: 'Connected Filtration Units' },
      { metric: '-60%', label: 'Support Ticket Volume' }
    ],
    technologies: ['React', 'Node.js', 'MQTT IoT', 'PostgreSQL', 'Stripe Subscriptions', 'Tailwind CSS'],
    has3DModel: false,
    featuredImage: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'web-development'
  },
  {
    id: 'case-4',
    slug: 'tony-guy',
    title: 'Tony & Guy Regional',
    client: 'Tony & Guy Regional Salons',
    industry: 'Luxury Beauty & Lifestyle',
    category: 'Mobile',
    shortDescription: 'Omnichannel salon booking and stylist portfolio experience with seamless calendar synchronization.',
    challenge: 'Managing thousands of high-value appointments across franchise stylists with frequent double-bookings and fragmented phone scheduling.',
    solution: 'Delivered an elegant web and mobile booking interface allowing clients to choose specialized stylists, view live lookbooks, and book in 3 taps.',
    results: [
      { metric: '+175%', label: 'Online Bookings' },
      { metric: '99.4%', label: 'Booking Accuracy' },
      { metric: '3.4x', label: 'Repeat Client Visits' }
    ],
    technologies: ['React Native', 'React', 'Node.js', 'Tailwind CSS', 'Twilio SMS', 'Redis'],
    has3DModel: false,
    featuredImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'app-development'
  },
  {
    id: 'case-5',
    slug: 'studio11',
    title: 'Studio11 Salon & Spa',
    client: 'Studio11 Franchise Network',
    industry: 'Franchise Enterprise Software',
    category: 'Enterprise',
    shortDescription: 'Centralized multi-unit franchise management software with unified inventory, staff payroll, and client loyalty.',
    challenge: 'Franchise owners lacked central visibility into branch performance, inventory waste, and cross-salon membership usage.',
    solution: 'Engineered a multi-tenant cloud ERP and mobile staff app coordinating 120+ franchise locations with real-time financial reconciliation.',
    results: [
      { metric: '120+', label: 'Branches Connected' },
      { metric: '32%', label: 'Inventory Cost Reduction' },
      { metric: '4.9★', label: 'Staff Satisfaction Score' }
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'AWS ECS'],
    has3DModel: false,
    featuredImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'web-development'
  },
  {
    id: 'case-6',
    slug: 'sivam-physio-care',
    title: 'Sivam Physio Care',
    client: 'Sivam Orthopedic & Rehab Institute',
    industry: 'Healthcare & Physical Therapy',
    category: 'Mobile',
    shortDescription: 'Guided rehabilitation mobile application with computer-vision posture check and personalized recovery milestones.',
    challenge: 'Patients frequently discontinued home exercise programs due to lack of guidance, leading to extended recovery times.',
    solution: 'Engineered a patient mobile application with animated exercise guides, recovery telemetry tracking, and direct physical therapist messaging.',
    results: [
      { metric: '82%', label: 'Rehab Plan Adherence' },
      { metric: '2.5x', label: 'Faster Recovery Milestones' },
      { metric: '15k+', label: 'Active Patients' }
    ],
    technologies: ['React Native', 'Node.js', 'WebRTC Video', 'MongoDB', 'AWS S3'],
    has3DModel: false,
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'app-development'
  },
  {
    id: 'case-7',
    slug: 'pearl-housing',
    title: 'Pearl Housing Developers',
    client: 'Pearl Luxury Real Estate',
    industry: 'Real Estate & Property Development',
    category: '3D / AR',
    shortDescription: 'Interactive 3D architectural masterplan and virtual apartment configurator for premium off-plan property sales.',
    challenge: 'High-net-worth international investors needed to visualize architectural layouts, natural sunlight, and luxury finishes before breaking ground.',
    solution: 'Created an immersive browser-based 3D architectural explorer with daylight simulation, panoramic terrace views, and unit reservation checkout.',
    results: [
      { metric: '$48M', label: 'Off-Plan Sales Generated' },
      { metric: '65%', label: 'Overseas Remote Buyers' },
      { metric: '60 FPS', label: 'WebGL Fluid Frame Rate' }
    ],
    technologies: ['Three.js', 'React Three Fiber', 'GSAP', 'GLTF Draco', 'WebGL', 'Vercel'],
    has3DModel: true,
    modelType: 'spatial-device',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'ar-vr'
  },
  {
    id: 'case-8',
    slug: 'nugenica-biotech-lab',
    title: 'Nugenica Biotech Lab',
    client: 'Nugenica Genomics Research',
    industry: 'Biotechnology & Life Sciences',
    category: 'Enterprise',
    shortDescription: 'Genomic sequence visualization workstation and laboratory information management system (LIMS).',
    challenge: 'Researchers spent hours assembling fragmented assay data across disparate instruments with zero automated audit logging.',
    solution: 'Built a compliant, secure web workspace with real-time gene cluster plotting, automated FDA 21 CFR Part 11 audit trails, and cloud processing.',
    results: [
      { metric: '10x', label: 'Data Ingestion Speed' },
      { metric: '100%', label: 'Regulatory Audit Compliance' },
      { metric: '500k+', label: 'Samples Cataloged' }
    ],
    technologies: ['React', 'Python', 'FastAPI', 'D3.js', 'PostgreSQL', 'Docker'],
    has3DModel: false,
    featuredImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'web-development'
  },
  {
    id: 'case-9',
    slug: 'visdoc',
    title: 'VisDoc Telehealth',
    client: 'VisDoc Virtual Healthcare',
    industry: 'Telemedicine & Clinical AI',
    category: 'AI',
    shortDescription: 'Secure video consultation platform with automated clinical transcription and prescription generation.',
    challenge: 'Clinicians were exhausted by manual electronic health record entry while conducting high-volume remote video consults.',
    solution: 'Integrated real-time WebRTC audio-video streaming with ambient clinical AI note generation, producing ready-to-sign chart notes instantly.',
    results: [
      { metric: '18 min', label: 'Saved Per Patient Encounter' },
      { metric: '99.9%', label: 'HIPAA Compliant Uptime' },
      { metric: '300k+', label: 'Virtual Consultations' }
    ],
    technologies: ['Next.js', 'WebRTC', 'FastAPI', 'Whisper AI', 'PostgreSQL', 'Redis'],
    has3DModel: false,
    featuredImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: 'app-development'
  },
  {
    id: 'case-10',
    slug: 'cube-dental',
    title: 'Cube Dental Imaging',
    client: 'Cube Dental Technology',
    industry: 'Medical Devices & 3D Imaging',
    category: '3D / AR',
    shortDescription: 'Browser-based 3D dental scan viewer and treatment planning portal for orthodontic practices.',
    challenge: 'Dental clinics required bulky native desktop software to view patient intraoral 3D scans, blocking easy patient communication.',
    solution: 'Engineered a zero-footprint WebGL 3D scan viewer rendering STL/OBJ dental models directly on tablets and browsers with millimeter measurement tools.',
    results: [
      { metric: '0s', label: 'Install Time Required' },
      { metric: '+85%', label: 'Patient Treatment Acceptance' },
      { metric: '400+', label: 'Dental Clinics Active' }
    ],
    technologies: ['Three.js', 'React', 'WebAssembly', 'Three-Mesh-BVH', 'Tailwind CSS', 'AWS S3'],
    has3DModel: true,
    modelType: 'spatial-device',
    featuredImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    serviceSlug: '3d-modeling'
  }
];
