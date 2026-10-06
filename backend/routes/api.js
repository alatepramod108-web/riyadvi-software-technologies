import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { readDB, writeDB } from '../database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// Setup Multer for resume uploads
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname) || '.pdf';
    cb(null, 'resume-' + uniqueSuffix + ext);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Helper for ID generation
const generateId = (prefix) => `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 5)}`;

// POST /api/contact
router.post('/contact', (req, res) => {
  try {
    const { name, email, phone, company, requirement, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide required fields: name, email, and message.'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address format.'
      });
    }

    const db = readDB();
    const newEnquiry = {
      id: generateId('enq'),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      company: company ? company.trim() : 'N/A',
      requirement: requirement || 'General Inquiry',
      message: message.trim(),
      status: 'New',
      createdAt: new Date().toISOString()
    };

    db.enquiries.unshift(newEnquiry);
    writeDB(db);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been received. A Riyadvi technical partner will reach out within 24 hours.',
      data: newEnquiry
    });
  } catch (err) {
    console.error('Error handling contact enquiry:', err);
    return res.status(500).json({ success: false, error: 'Internal server error processing enquiry.' });
  }
});

// POST /api/consultation
router.post('/consultation', (req, res) => {
  try {
    const { name, email, phone, company, service, preferredDate, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name and email are required to book a consultation.'
      });
    }

    const db = readDB();
    const newConsultation = {
      id: generateId('cons'),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      company: company ? company.trim() : '',
      service: service || 'Comprehensive Architecture & Strategy',
      preferredDate: preferredDate || new Date().toISOString().split('T')[0],
      message: message ? message.trim() : '',
      status: 'Scheduled',
      createdAt: new Date().toISOString()
    };

    db.consultations.unshift(newConsultation);
    writeDB(db);

    return res.status(201).json({
      success: true,
      message: 'Consultation request booked successfully! Our solutions architect will connect with you.',
      data: newConsultation
    });
  } catch (err) {
    console.error('Error booking consultation:', err);
    return res.status(500).json({ success: false, error: 'Internal server error booking consultation.' });
  }
});

// POST /api/health-checkup
router.post('/health-checkup', (req, res) => {
  try {
    const {
      businessName,
      industry,
      companySize,
      currentWebsite,
      monthlyVisitors,
      marketingChannels,
      techStack,
      biggestBottleneck,
      contactName,
      contactEmail,
      contactPhone,
      answers
    } = req.body;

    if (!contactName || !contactEmail) {
      return res.status(400).json({
        success: false,
        error: 'Contact name and email are required to receive your Business Health Checkup results.'
      });
    }

    // Calculate score based on answers / readiness parameters
    let score = 50;
    if (techStack && !techStack.toLowerCase().includes('legacy')) score += 15;
    if (monthlyVisitors && (monthlyVisitors.includes('50,000') || monthlyVisitors.includes('100,000'))) score += 15;
    if (marketingChannels && marketingChannels.length >= 2) score += 10;
    if (companySize && companySize !== '1-5') score += 10;
    score = Math.min(Math.max(score, 35), 95);

    let readinessGrade = 'B+ (High Growth Potential)';
    if (score >= 85) readinessGrade = 'A (Enterprise Ready)';
    else if (score < 55) readinessGrade = 'C (Urgent Modernization Required)';

    const recommendations = [
      'Modernize front-end architecture with React/Vite micro-frontends for 3x load performance.',
      'Implement unified headless CMS and API caching to support enterprise scale.',
      'Optimize conversion funnels with interactive 3D product previews and WebGL engagement.',
      'Automate lead pipelines directly into modern cloud infrastructure.'
    ];

    const db = readDB();
    const newCheckup = {
      id: generateId('chk'),
      businessName: businessName || 'Confidential Business',
      industry: industry || 'Technology & Digital Commerce',
      companySize: companySize || '10-50',
      currentWebsite: currentWebsite || 'N/A',
      monthlyVisitors: monthlyVisitors || '10,000+',
      marketingChannels: marketingChannels || ['Digital Marketing', 'Referrals'],
      techStack: techStack || 'Modern Web',
      biggestBottleneck: biggestBottleneck || 'System Scalability & Lead Conversion',
      score,
      readinessGrade,
      recommendations,
      contactName: contactName.trim(),
      contactEmail: contactEmail.trim().toLowerCase(),
      contactPhone: contactPhone ? contactPhone.trim() : '',
      createdAt: new Date().toISOString()
    };

    db.healthCheckups.unshift(newCheckup);
    writeDB(db);

    return res.status(201).json({
      success: true,
      message: 'Business Health Checkup evaluated successfully!',
      score,
      readinessGrade,
      recommendations,
      data: newCheckup
    });
  } catch (err) {
    console.error('Error in health checkup:', err);
    return res.status(500).json({ success: false, error: 'Internal server error calculating health checkup.' });
  }
});

// POST /api/lead-magnet
router.post('/lead-magnet', (req, res) => {
  try {
    const { name, company, email, phone, guideType } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name and email are required to download the Software Project Planning Guide.'
      });
    }

    const db = readDB();
    const newLead = {
      id: generateId('lead'),
      name: name.trim(),
      company: company ? company.trim() : 'Independent Enterprise',
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      guideName: guideType || 'Riyadvi Software Project Planning Guide (2026 Edition)',
      downloadUrl: '/guides/Riyadvi_Software_Project_Planning_Guide_2026.pdf',
      downloadedAt: new Date().toISOString()
    };

    db.leadMagnets.unshift(newLead);
    writeDB(db);

    return res.status(201).json({
      success: true,
      message: 'Access granted! Your download is ready.',
      downloadUrl: newLead.downloadUrl,
      guideName: newLead.guideName,
      data: newLead
    });
  } catch (err) {
    console.error('Error processing lead magnet:', err);
    return res.status(500).json({ success: false, error: 'Internal server error processing lead download.' });
  }
});

// POST /api/applications (supports both multipart and json)
router.post('/applications', upload.single('resumeFile'), (req, res) => {
  try {
    const { name, email, phone, position, message, experience } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and position applied are required.'
      });
    }

    let resumeUrl = req.body.resumeUrl || '';
    if (req.file) {
      resumeUrl = `/uploads/${req.file.filename}`;
    }

    const db = readDB();
    const newApplication = {
      id: generateId('app'),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      position: position.trim(),
      experience: experience || '3+ years',
      resumeUrl: resumeUrl || 'Attached in candidate profile',
      message: message ? message.trim() : '',
      status: 'In Review',
      createdAt: new Date().toISOString()
    };

    db.applications.unshift(newApplication);
    writeDB(db);

    return res.status(201).json({
      success: true,
      message: 'Application received successfully! Our talent acquisition team will review your profile.',
      data: newApplication
    });
  } catch (err) {
    console.error('Error processing application:', err);
    return res.status(500).json({ success: false, error: 'Internal server error submitting job application.' });
  }
});

export default router;
