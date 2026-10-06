import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'High-Performance Web Applications & Cloud Architectures',
    shortDescription: 'Enterprise-grade web platforms built with React, Next.js, and modern cloud microservices for unstoppable scale.',
    heroHeadline: 'Engineer Fast, Scalable, and Future-Proof Web Applications',
    problem: 'Legacy web architectures suffer from sluggish load times, high server costs, clunky maintenance overhead, and poor conversion rates across diverse screen sizes.',
    solution: 'We architect lightning-fast, reactive web applications utilizing Next.js, TypeScript, resilient API backends, and edge networks that ensure sub-second global performance.',
    keyFeatures: [
      'Next.js & React Full-Stack SSR/SSG Architectures',
      'High-throughput RESTful & GraphQL microservices',
      'Ultra-responsive UI with sub-second core web vitals',
      'Automated CI/CD pipelines & zero-downtime deployment',
      'Enterprise security, SOC2 compliance & data encryption',
      'Headless CMS integration (Strapi, Sanity, Contentful)'
    ],
    industryUseCases: [
      { title: 'Fintech & Digital Banking', desc: 'Real-time transaction interfaces with banking-grade security and low latency.' },
      { title: 'Global E-Commerce', desc: 'Omnichannel commerce platforms with multi-currency checkout and inventory sync.' },
      { title: 'B2B SaaS Portals', desc: 'Complex multi-tenant dashboards with granular role-based access control.' }
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'AWS'],
    process: [
      { step: 1, title: 'Discovery & System Blueprint', desc: 'Technical audits, user flow mapping, and architectural blueprinting.' },
      { step: 2, title: 'Component-Driven UI Engineering', desc: 'Modular design system assembly with strict accessibility benchmarks.' },
      { step: 3, title: 'Full-Stack Integration', desc: 'High-speed API orchestration, data pipeline wiring, and automated testing.' },
      { step: 4, title: 'Edge Deployment & Tuning', desc: 'CDN routing, SEO schema injection, and load-tested global launch.' }
    ],
    metric: '99.98%',
    metricLabel: 'Uptime & High Availability',
    iconName: 'Globe',
    relatedCaseStudySlugs: ['puratap', 'tony-guy', 'cube-dental']
  },
  {
    id: 'srv-2',
    slug: 'app-development',
    title: 'App Development',
    tagline: 'Native & Cross-Platform Mobile Solutions',
    shortDescription: 'Intuitive iOS and Android applications engineered with React Native and Flutter for seamless user experiences.',
    heroHeadline: 'Deliver Frictionless Mobile Experiences on iOS & Android',
    problem: 'Fragmented mobile development cycles often result in divergent user experiences between platforms, ballooning budgets, and sluggish app store approvals.',
    solution: 'Our engineering team crafts unified, high-frame-rate mobile applications with fluid gestures, offline-first data sync, and instant push notification architectures.',
    keyFeatures: [
      'Cross-platform development in React Native & Flutter',
      'Hardware integration (Biometrics, Camera, Bluetooth, GPS)',
      'Offline caching & optimistic UI state synchronization',
      'End-to-end automated App Store & Play Store publishing',
      'In-app purchases, subscriptions & Stripe integration',
      'Real-time analytics and crash monitoring telemetry'
    ],
    industryUseCases: [
      { title: 'On-Demand Services & Booking', desc: 'Geolocation tracking, instant scheduling, and live customer updates.' },
      { title: 'Healthcare & Patient Portals', desc: 'HIPAA-compliant medical record access, telehealth video, and prescriptions.' },
      { title: 'Luxury Retail & Member Clubs', desc: 'Gamified loyalty tiers, digital pass integration, and VIP concierges.' }
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Node.js'],
    process: [
      { step: 1, title: 'Mobile UX Prototyping', desc: 'High-fidelity gesture prototypes and device stress test planning.' },
      { step: 2, title: 'Native Bridge Architecture', desc: 'Optimizing platform bridges and native module bindings.' },
      { step: 3, title: 'Beta Flight Testing', desc: 'TestFlight and Play Console closed beta rollout with user telemetry.' },
      { step: 4, title: 'Store Launch & ASO', desc: 'App store keyword optimization, screenshot design, and release.' }
    ],
    metric: '4.9★',
    metricLabel: 'Average Client App Store Rating',
    iconName: 'Smartphone',
    relatedCaseStudySlugs: ['studio11', 'sivam-physio-care', 'visdoc']
  },
  {
    id: 'srv-3',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Data-Driven Growth & High-ROI Conversion Funnels',
    shortDescription: 'Accelerate acquisition and pipeline velocity with algorithmic SEO, paid media optimization, and automated lifecycle marketing.',
    heroHeadline: 'Scale Customer Acquisition with Algorithmic Precision',
    problem: 'Companies burn capital on generic ads and fragmented campaigns without clear attribution, resulting in stagnant CAC and poor conversion velocity.',
    solution: 'We construct full-funnel digital marketing systems combining programmatic SEO, hyper-targeted multi-channel ads, dynamic landing experiences, and CRM automation.',
    keyFeatures: [
      'Technical & Programmatic SEO Architecture',
      'Precision Paid Acquisition (Google Ads, Meta, LinkedIn)',
      'Automated Lead Nurturing & Email Lifecycle Flows',
      'Conversion Rate Optimization (CRO) & Heatmap Analytics',
      'Multi-Touch Attribution Modeling & ROI Reporting',
      'Content Strategy & Thought Leadership Engines'
    ],
    industryUseCases: [
      { title: 'Enterprise B2B Lead Gen', desc: 'Targeted account-based marketing driving qualified sales demo calls.' },
      { title: 'D2C Consumer Scale', desc: 'Creative testing matrix scaling direct-to-consumer e-commerce ROAS.' },
      { title: 'Local Multi-Unit Franchises', desc: 'Hyper-localized search presence and map pack optimization.' }
    ],
    techStack: ['Google Ads', 'Meta Ads', 'HubSpot', 'GA4', 'SEMrush', 'Looker Studio', 'Klaviyo'],
    process: [
      { step: 1, title: 'Growth Audit & Market Mapping', desc: 'Competitive analysis, keyword intent research, and audience segmentation.' },
      { step: 2, title: 'High-Converting Asset Creation', desc: 'Dynamic landing pages, high-converting copy, and creative testing sets.' },
      { step: 3, title: 'Omnichannel Campaign Launch', desc: 'Algorithmic bid management, retargeting pools, and budget scaling.' },
      { step: 4, title: 'Attribution & Optimization', desc: 'Weekly split testing, CAC optimization, and transparent executive dashboards.' }
    ],
    metric: '340%',
    metricLabel: 'Average Lead Velocity Increase',
    iconName: 'TrendingUp',
    relatedCaseStudySlugs: ['wanaromah', 'tony-guy', 'pearl-housing']
  },
  {
    id: 'srv-4',
    slug: 'ar-vr',
    title: 'AR / VR',
    tagline: 'Immersive Spatial Computing & WebXR Environments',
    shortDescription: 'Pioneer the future of spatial interaction with browser-based WebXR, virtual showrooms, and augmented product overlays.',
    heroHeadline: 'Immerse Your Audiences in Spatial Digital Realities',
    problem: 'Traditional flat media fails to convey real-world scale, tactile depth, and emotional immersion for complex physical products and virtual environments.',
    solution: 'Riyadvi engineers frictionless WebXR and augmented reality experiences that run directly on modern smartphones and headsets with zero app install required.',
    keyFeatures: [
      'WebXR & WebGL Browser-Based Spatial Experiences',
      'Augmented Reality Product Visualizers (Quick Look / Model-Viewer)',
      'Virtual Showrooms & Interactive 3D Real Estate Walkthroughs',
      'Industrial Simulation & Interactive Training Modules',
      'Spatial Audio Integration & Dynamic Realistic Lighting',
      'Cross-Device Compatibility (iOS, Android, Meta Quest, Apple Vision)'
    ],
    industryUseCases: [
      { title: 'Real Estate & Architecture', desc: '360-degree interactive architectural tours with materials customizer.' },
      { title: 'Luxury Retail & Jewelry', desc: 'AR try-on and 1:1 true-scale product placement in client rooms.' },
      { title: 'Healthcare & Medical Devices', desc: 'Interactive 3D organ visualizations and medical device demonstrations.' }
    ],
    techStack: ['Three.js', 'WebXR', 'React Three Fiber', 'GLTF/USDZ', 'Unity', 'Blender', 'WebAudio'],
    process: [
      { step: 1, title: 'Spatial Concept & Storyboarding', desc: 'Define interaction physics, camera paths, and immersive user journeys.' },
      { step: 2, title: 'Asset Modeling & Retopology', desc: 'Generate lightweight PBR meshes optimized for 60fps mobile web.' },
      { step: 3, title: 'Spatial Interaction Coding', desc: 'Raycasting, pinch-to-scale, dynamic shadows, and realistic shaders.' },
      { step: 4, title: 'Cross-Platform Calibration', desc: 'Zero-latency optimization across mobile browsers and XR headsets.' }
    ],
    metric: '60 FPS',
    metricLabel: 'Smooth Browser Render Target',
    iconName: 'Eye',
    relatedCaseStudySlugs: ['pearl-housing', 'cube-dental', 'wanaromah']
  },
  {
    id: 'srv-5',
    slug: '3d-modeling',
    title: '3D Modeling',
    tagline: 'Photorealistic 3D Assets & Interactive WebGL Showcases',
    shortDescription: 'High-fidelity 3D modeling, texturing, and web-optimized asset pipelines that elevate brand prestige and engagement.',
    heroHeadline: 'Bring Products to Life with Photorealistic 3D Engineering',
    problem: 'Static photography is rigid, expensive to reshoot, and unable to demonstrate internal mechanisms, custom materials, or interactive 360-degree inspection.',
    solution: 'We construct precision 3D digital twins, procedural textures, and ultra-compressed WebGL models that load instantly and respond to every user gesture.',
    keyFeatures: [
      'High-poly to low-poly baking & game-ready retopology',
      'PBR (Physically Based Rendering) texture map generation',
      'Interactive 360-degree rotatable web visualizers',
      'Exploded-view mechanical breakdowns & animations',
      'Web-optimized Draco/KTX2 compression pipelines',
      'Custom Three.js shader materials (glass, metallic, dispersion)'
    ],
    industryUseCases: [
      { title: 'Industrial & Consumer Electronics', desc: 'Interactive exploded view demonstrating internal chips and components.' },
      { title: 'High-End Fragrance & Cosmetics', desc: 'Hyper-realistic refraction, liquid simulation, and glass reflections.' },
      { title: 'Automotive & Mobility', desc: 'Configurable vehicle exterior and interior trim customizer.' }
    ],
    techStack: ['Blender', 'Substance Painter', 'Three.js', 'GLTF Draco', 'GLSL Shaders', 'React Three Fiber'],
    process: [
      { step: 1, title: 'CAD / Blueprint Ingestion', desc: 'Precision dimensional modeling from reference photos or CAD data.' },
      { step: 2, title: 'Subdivision & PBR Texturing', desc: 'Roughness, metallic, normal, and ambient occlusion mapping.' },
      { step: 3, title: 'Web Compression & Draco Encoding', desc: 'Compressing megabyte models down to small kilobyte payloads.' },
      { step: 4, title: 'WebGL Canvas Integration', desc: 'Studio studio lighting setup with interactive orbital controls.' }
    ],
    metric: '85%',
    metricLabel: 'Payload Reduction via Draco Compression',
    iconName: 'Box',
    relatedCaseStudySlugs: ['wanaromah', 'cube-dental', 'nugenica-biotech-lab']
  },
  {
    id: 'srv-6',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Human-Centered Design Systems & Conversion Psychology',
    shortDescription: 'Distinguish your brand with award-winning aesthetic interfaces, intuitive design systems, and frictionless conversion psychology.',
    heroHeadline: 'Design Experiences That Captivate, Convert, and Endure',
    problem: 'Complex user journeys, unintuitive visual hierarchies, and outdated design languages create cognitive friction and erode client trust.',
    solution: 'We craft sophisticated, modern UI/UX design systems grounded in cognitive psychology, micro-animations, and pristine typographic harmony.',
    keyFeatures: [
      'End-to-end Figma Design Systems with design tokens',
      'Interactive wireframing & clickable prototypes',
      'User journey mapping & cognitive friction audits',
      'Micro-interactions & fluid motion choreography',
      'WCAG 2.1 AA Accessibility compliance',
      'Design handoff specifications for pixel-perfect build'
    ],
    industryUseCases: [
      { title: 'Fintech & Wealth Management', desc: 'Complex investment portfolios simplified into clear visual data charts.' },
      { title: 'Healthcare Patient Experience', desc: 'Stress-free clinical interfaces designed for clarity and empathy.' },
      { title: 'Creative Brand Showcases', desc: 'Editorial layouts with cinematic transitions and editorial typography.' }
    ],
    techStack: ['Figma', 'Framer', 'Design Tokens', 'Storybook', 'WCAG AA', 'Principle'],
    process: [
      { step: 1, title: 'Empathy & Research Phase', desc: 'Stakeholder interviews, user personas, and competitor benchmarking.' },
      { step: 2, title: 'Information Architecture & Wireframes', desc: 'Sitemap structuring, low-fidelity wireframing, and user testing.' },
      { step: 3, title: 'Visual Design & System Tokens', desc: 'Color theory, typography scales, glass textures, and component libraries.' },
      { step: 4, title: 'Prototyping & Engineering Handoff', desc: 'Motion specs, responsive breakpoints, and live design token sync.' }
    ],
    metric: '4.2x',
    metricLabel: 'Client Engagement & Retention Uplift',
    iconName: 'Palette',
    relatedCaseStudySlugs: ['laxmi-astro-ai', 'studio11', 'puratap']
  }
];
