import { Router } from 'express';
import { readDB, writeDB } from '../database.js';

const router = Router();

// GET /api/admin/stats
router.get('/stats', (req, res) => {
  try {
    const db = readDB();
    const stats = {
      totalEnquiries: (db.enquiries || []).length,
      consultationRequests: (db.consultations || []).length,
      healthCheckupLeads: (db.healthCheckups || []).length,
      leadMagnetLeads: (db.leadMagnets || []).length,
      jobApplications: (db.applications || []).length,
      recentActivity: [
        ...(db.enquiries || []).slice(0, 3).map(e => ({ type: 'Enquiry', title: `${e.name} (${e.company})`, date: e.createdAt, status: e.status })),
        ...(db.consultations || []).slice(0, 2).map(c => ({ type: 'Consultation', title: `${c.name} - ${c.service}`, date: c.createdAt, status: c.status })),
        ...(db.applications || []).slice(0, 2).map(a => ({ type: 'Career App', title: `${a.name} - ${a.position}`, date: a.createdAt, status: a.status }))
      ].sort((a, b) => new Date(b.date) - new Date(a.date))
    };

    return res.json({ success: true, stats });
  } catch (err) {
    console.error('Error fetching admin stats:', err);
    return res.status(500).json({ success: false, error: 'Could not fetch admin statistics.' });
  }
});

// GET /api/admin/enquiries
router.get('/enquiries', (req, res) => {
  try {
    const db = readDB();
    return res.json({ success: true, data: db.enquiries || [] });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error fetching enquiries.' });
  }
});

// GET /api/admin/consultations
router.get('/consultations', (req, res) => {
  try {
    const db = readDB();
    return res.json({ success: true, data: db.consultations || [] });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error fetching consultations.' });
  }
});

// GET /api/admin/health-checkups
router.get('/health-checkups', (req, res) => {
  try {
    const db = readDB();
    return res.json({ success: true, data: db.healthCheckups || [] });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error fetching health checkups.' });
  }
});

// GET /api/admin/lead-magnets
router.get('/lead-magnets', (req, res) => {
  try {
    const db = readDB();
    return res.json({ success: true, data: db.leadMagnets || [] });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error fetching lead magnets.' });
  }
});

// GET /api/admin/applications
router.get('/applications', (req, res) => {
  try {
    const db = readDB();
    return res.json({ success: true, data: db.applications || [] });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error fetching applications.' });
  }
});

// PATCH /api/admin/:collection/:id/status
router.patch('/:collection/:id/status', (req, res) => {
  try {
    const { collection, id } = req.params;
    const { status } = req.body;

    const db = readDB();
    if (!db[collection]) {
      return res.status(404).json({ success: false, error: 'Invalid collection category.' });
    }

    const item = db[collection].find(i => i.id === id);
    if (!item) {
      return res.status(404).json({ success: false, error: 'Record not found.' });
    }

    item.status = status;
    item.updatedAt = new Date().toISOString();
    writeDB(db);

    return res.json({ success: true, message: 'Status updated.', data: item });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error updating record status.' });
  }
});

// DELETE /api/admin/:collection/:id
router.delete('/:collection/:id', (req, res) => {
  try {
    const { collection, id } = req.params;
    const db = readDB();

    if (!db[collection]) {
      return res.status(404).json({ success: false, error: 'Collection not found.' });
    }

    const initialLen = db[collection].length;
    db[collection] = db[collection].filter(i => i.id !== id);

    if (db[collection].length === initialLen) {
      return res.status(404).json({ success: false, error: 'Record not found.' });
    }

    writeDB(db);
    return res.json({ success: true, message: 'Record deleted.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Error deleting record.' });
  }
});

export default router;
