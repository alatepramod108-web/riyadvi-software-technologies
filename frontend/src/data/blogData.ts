import { BlogPost } from '../types';

export const blogData: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'future-of-webgl-and-3d-enterprise-interfaces',
    title: 'The Future of WebGL & 3D Web: Why Enterprise Software is Abandoning Flat UI',
    excerpt: 'How spatial computing, Three.js shaders, and interactive 3D ecosystems are driving 4x conversion rates and transforming digital engagement.',
    category: '3D & WebGL',
    readTime: '6 min read',
    date: 'Oct 02, 2026',
    author: {
      name: 'Aditya Kulkarni',
      role: 'Head of Creative Engineering',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    tags: ['Three.js', 'WebGL', 'UI/UX Design', 'Spatial Web'],
    featured: true,
    content: [
      'For over a decade, digital software has resided behind flat geometric boxes, clean minimalist typography, and predictable responsive grids. While clean and functional, flat interfaces have reached a state of perceptual stagnation: everything looks identical.',
      'With modern GPU acceleration in both mobile chipsets and desktop silicon, WebGL and WebGPU have unlocked a new paradigm: tangible spatial storytelling directly inside browser runtimes without requiring external plugins or app downloads.',
      'At Riyadvi Software Technologies, our engineering teams have pioneered lightweight 3D canvas ecosystems that compress 3D meshes by up to 85% using Draco and KTX2 texture streaming. The result is instant load performance with fluid 60 FPS user feedback.',
      'Brands adopting interactive 3D showcases report a 340% increase in product dwell time and a 42% drop in post-purchase returns, proving that interactive depth is not visual fluff — it is a primary conversion engine.'
    ]
  },
  {
    id: 'post-2',
    slug: 'scaling-react-micro-frontends-for-global-enterprises',
    title: 'Architecting Scalable React Micro-Frontends: Performance Lessons from Millions of Requests',
    excerpt: 'A comprehensive technical deep-dive into decoupling monolithic web applications with module federation, edge SSR, and atomic design tokens.',
    category: 'Architecture',
    readTime: '8 min read',
    date: 'Sep 24, 2026',
    author: {
      name: 'Priyanka Sen',
      role: 'Lead Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
    },
    tags: ['React', 'Next.js', 'System Architecture', 'Cloud'],
    featured: false,
    content: [
      'As organizations scale past 50 engineers, monolithic frontends become development friction hotspots. Deployment queues lengthen, test suites take 40 minutes, and simple changes risk collateral regressions.',
      'Module Federation and Vite-based micro-frontends allow multidisciplinary squads to deploy autonomous functional slices independently without compromising cohesive design languages.',
      'By coupling isolated micro-frontends with a single unified design system package, organizations achieve sub-second core web vitals and instantaneous CI/CD release cycles.'
    ]
  },
  {
    id: 'post-3',
    slug: 'ai-driven-transformation-beyond-chatbots',
    title: 'AI-Driven Digital Transformation: Beyond Simple Chatbots to Autonomous Business Logic',
    excerpt: 'Why progressive enterprises are integrating real-time intelligence into internal workflows, predictive analytics, and automated decision trees.',
    category: 'AI & Machine Learning',
    readTime: '5 min read',
    date: 'Sep 15, 2026',
    author: {
      name: 'Vikramaditya Roy',
      role: 'Director of AI Solutions',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    tags: ['Artificial Intelligence', 'Automation', 'Enterprise', 'Strategy'],
    featured: false,
    content: [
      'The initial wave of enterprise AI focused heavily on wrapper chat interfaces. While helpful for basic FAQ lookup, the true enterprise ROI emerges when intelligence is embedded directly into programmatic transactional flows.',
      'From dynamic pricing engines to automated underwriting and ephemeris analysis, modern AI pipelines operate seamlessly in the background, slashing administrative overhead while elevating accuracy.'
    ]
  },
  {
    id: 'post-4',
    slug: 'mobile-app-performance-optimization-checklist',
    title: 'The 2026 Mobile Engineering Checklist: 60 FPS, Offline-First, and Instant Launch',
    excerpt: 'Key strategies for eliminating jank, reducing bundle weight, and architecting reliable offline synchronization in cross-platform mobile apps.',
    category: 'Mobile Dev',
    readTime: '7 min read',
    date: 'Aug 28, 2026',
    author: {
      name: 'Rahul Varma',
      role: 'Senior Mobile Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
    },
    tags: ['React Native', 'Flutter', 'Performance', 'Mobile'],
    featured: false,
    content: [
      'In high-stakes consumer apps, an extra 200ms latency on launch can lose up to 15% of new users. To maintain sticky retention, mobile apps must prioritize optimistic UI state updates, aggressive asset caching, and native thread decoupling.'
    ]
  }
];
