import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Initial schema
const defaultData = {
  enquiries: [
    {
      id: 'enq-1',
      name: 'Michael Vance',
      email: 'michael.vance@techcorp.io',
      phone: '+1 415 890 2314',
      company: 'TechCorp Innovations',
      requirement: 'Enterprise SaaS Web & Mobile Replatforming',
      message: 'Looking to modernize our legacy monolithic portal with React and Node.js microservices.',
      status: 'Contacted',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
      id: 'enq-2',
      name: 'Sarah Jenkins',
      email: 's.jenkins@luxuryliving.com',
      phone: '+44 20 7946 0912',
      company: 'Luxury Living Developments',
      requirement: 'Interactive 3D Architectural Showcase',
      message: 'Need high-fidelity WebGL / Three.js interactive tour for our luxury penthouse properties.',
      status: 'New',
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString()
    }
  ],
  consultations: [
    {
      id: 'cons-1',
      name: 'David Zhao',
      email: 'david@finflow.sg',
      phone: '+65 6789 0123',
      company: 'FinFlow Global',
      service: 'Web Development',
      preferredDate: '2026-10-12',
      message: 'Initial architecture discussion for cloud migration and UI revamp.',
      status: 'Scheduled',
      createdAt: new Date(Date.now() - 86400000).toISOString()
    }
  ],
  healthCheckups: [
    {
      id: 'chk-1',
      businessName: 'Apex Logistics Inc.',
      industry: 'Supply Chain & Logistics',
      companySize: '50-250',
      currentWebsite: 'https://apexlogistics-demo.com',
      monthlyVisitors: '10,000 - 50,000',
      marketingChannels: ['SEO', 'Google Ads', 'LinkedIn'],
      techStack: 'WordPress legacy, custom PHP',
      biggestBottleneck: 'Low conversion rate & mobile loading latency',
      score: 68,
      readinessGrade: 'B (High Potential)',
      contactName: 'Robert Vance',
      contactEmail: 'robert@apexlogistics.com',
      contactPhone: '+1 312 555 0192',
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString()
    }
  ],
  leadMagnets: [
    {
      id: 'lead-1',
      name: 'Elena Rostova',
      company: 'Nova Digital Studio',
      email: 'elena@novastudio.design',
      phone: '+49 30 123456',
      guideName: 'Software Project Planning Guide 2026 Edition',
      downloadedAt: new Date(Date.now() - 3600000 * 12).toISOString()
    }
  ],
  applications: [
    {
      id: 'app-1',
      name: 'Aditya Sharma',
      email: 'aditya.sharma.dev@gmail.com',
      phone: '+91 98765 43210',
      position: 'Senior Full Stack Developer',
      experience: '5+ years',
      resumeUrl: '/uploads/sample_resume_aditya.pdf',
      message: 'Experienced with React, Three.js, Node.js and building high performance cloud architectures.',
      status: 'Reviewing',
      createdAt: new Date(Date.now() - 86400000 * 4).toISOString()
    }
  ]
};

// Ensure data folder and file exist
export function initDB() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
  }
}

export function readDB() {
  initDB();
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return defaultData;
  }
}

export function writeDB(data) {
  initDB();
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing to db.json:', err);
    return false;
  }
}
