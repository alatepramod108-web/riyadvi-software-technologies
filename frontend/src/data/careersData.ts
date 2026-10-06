import { JobPosting } from '../types';

export const careersData: JobPosting[] = [
  {
    id: 'job-1',
    slug: 'senior-full-stack-engineer-threejs',
    title: 'Senior Full Stack Engineer (React + 3D / WebGL)',
    department: 'Engineering',
    designation: 'Senior Engineer',
    location: 'Hybrid / Bangalore / Remote',
    type: 'Full-Time',
    experience: '4-7 Years',
    overview: 'We are seeking an exceptional Full Stack Engineer with strong command over React, Node.js, and real-time 3D web technologies (Three.js / React Three Fiber / WebGL). You will lead architecture on cutting-edge interactive digital platforms for international enterprise clients.',
    responsibilities: [
      'Architect and build high-performance WebGL / Three.js 3D web experiences and reactive web platforms.',
      'Collaborate closely with 3D modelers and UI/UX designers to implement pixel-perfect, 60fps animations.',
      'Design robust Node.js backend microservices and REST/GraphQL APIs.',
      'Optimize WebGL canvas memory consumption, draw calls, and Draco compression pipelines.',
      'Mentor junior engineers and champion clean code standards and automated test coverage.'
    ],
    requirements: [
      'Strong proficiency in TypeScript, React, Next.js, and Node.js.',
      'Demonstrated hands-on experience with Three.js, React Three Fiber, GLSL shaders, or WebGL.',
      'Solid grasp of state management, modern CSS systems, and responsive layout choreography.',
      'Experience with database systems (PostgreSQL, MongoDB) and cloud deployment (AWS/Vercel).',
      'Passionate about interactive design, micro-animations, and visual excellence.'
    ],
    benefits: [
      'Competitive compensation package + annual performance bonus',
      'Flexible hybrid and remote working culture',
      'Annual technology stipend for hardware, headsets, and monitors',
      'Comprehensive health insurance for you and your dependents',
      'Paid access to masterclasses, conferences, and certifications'
    ]
  },
  {
    id: 'job-2',
    slug: 'lead-ui-ux-designer-spatial',
    title: 'Lead UI/UX Designer & Design Systems Architect',
    department: 'Design',
    designation: 'Lead Designer',
    location: 'Remote / Bangalore',
    type: 'Full-Time',
    experience: '5+ Years',
    overview: 'Lead the visual vision at Riyadvi Software Technologies. Create groundbreaking design systems, dark-mode luxury aesthetics, spatial micro-interactions, and conversion-optimized flows for high-growth enterprise brands.',
    responsibilities: [
      'Create and maintain scalable enterprise Figma design systems and design token hierarchies.',
      'Conduct user research, journey mapping, and conversion optimization audits.',
      'Prototype dynamic micro-interactions, spatial transitions, and interactive 3D interfaces.',
      'Work side-by-side with frontend engineers to ensure design fidelity and accessibility (WCAG AA).',
      'Present design narratives and strategic design proposals to executive clients.'
    ],
    requirements: [
      'Extensive portfolio demonstrating modern, dark-mode, futuristic, and high-conversion web & mobile UI/UX.',
      'Mastery of Figma, component variants, auto-layout, and interactive prototyping.',
      'Understanding of frontend capabilities (CSS Grid, flexbox, motion curves, WebGL constraints).',
      'Strong communication skills and client presentation capabilities.'
    ],
    benefits: [
      'Competitive executive compensation',
      'Top-of-the-line MacBook Pro workstation setup',
      'Creative freedom and ownership over high-visibility brand portfolios',
      'Health benefits & wellness allowances'
    ]
  },
  {
    id: 'job-3',
    slug: 'senior-mobile-engineer-react-native',
    title: 'Senior Mobile Application Engineer (React Native & Flutter)',
    department: 'Mobile',
    designation: 'Senior Engineer',
    location: 'Bangalore / Remote',
    type: 'Full-Time',
    experience: '3-6 Years',
    overview: 'Build fluid, high-frame-rate consumer and enterprise mobile applications for iOS and Android. Spearhead mobile offline synchronization, hardware camera/sensor integrations, and real-time streaming architectures.',
    responsibilities: [
      'Develop cross-platform mobile apps using React Native and Flutter with native bridge extensions.',
      'Implement offline-first databases, real-time push events, and biometric authentication.',
      'Ensure flawless performance, maintaining 60 FPS across both flagship and mid-tier smartphones.',
      'Coordinate store publishing, certificates, TestFlight, and Google Play staging pipelines.'
    ],
    requirements: [
      '3+ years professional experience building and releasing production React Native or Flutter apps.',
      'Deep knowledge of native iOS (Swift) or Android (Kotlin) development patterns.',
      'Experience with offline caching (WatermelonDB, SQLite) and state management (Zustand, Redux).',
      'Track record of apps published on Apple App Store or Google Play Store.'
    ],
    benefits: [
      'Attractive salary and performance equity options',
      'Generous paid time off and learning stipends',
      'Health insurance and family coverage'
    ]
  },
  {
    id: 'job-4',
    slug: 'technical-project-manager',
    title: 'Technical Project & Delivery Manager',
    department: 'Management',
    designation: 'Manager',
    location: 'Bangalore / Hybrid',
    type: 'Full-Time',
    experience: '4-8 Years',
    overview: 'Drive project execution, agile sprint velocity, and technical alignment across engineering, design, and client stakeholders for multi-month software builds.',
    responsibilities: [
      'Manage sprint planning, backlog grooming, risk assessments, and delivery milestones.',
      'Serve as primary technical liaison between clients and cross-functional engineering teams.',
      'Ensure high delivery standards, code review accountability, and milestone sign-offs.',
      'Facilitate agile ceremonies and track burndown telemetry.'
    ],
    requirements: [
      'Background in software engineering or computer science prior to project management.',
      'Proven track record delivering complex software projects on time and within scope.',
      'Familiarity with Agile, Scrum, Jira, GitHub workflows, and CI/CD pipelines.',
      'Exceptional stakeholder communication and negotiation abilities.'
    ],
    benefits: [
      'Industry-leading compensation package',
      'Performance bonuses based on project delivery milestones',
      'Global project exposure and professional growth path'
    ]
  }
];
