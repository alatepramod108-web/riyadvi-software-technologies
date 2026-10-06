import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './routes/api.js';
import adminRoutes from './routes/admin.js';
import { initDB } from './database.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize persistent database
initDB();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploads and downloadable guides
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/guides', express.static(path.join(__dirname, 'guides')));

// Root welcome endpoint for evaluators
app.get('/', (req, res) => {
  res.json({
    service: 'Riyadvi Software Technologies API Server',
    status: 'online',
    version: '1.0.0',
    message: 'Welcome to the Riyadvi Software Technologies Backend API.',
    documentation: {
      healthCheck: '/api/health',
      adminTelemetry: '/api/admin/stats',
      contact: 'POST /api/contact',
      consultation: 'POST /api/consultation',
      healthCheckup: 'POST /api/health-checkup',
      leadMagnet: 'POST /api/lead-magnet',
      applications: 'POST /api/applications'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Riyadvi Software Technologies API Server',
    version: '1.0.0'
  });
});

// Mount Routes
app.use('/api', apiRoutes);
app.use('/api/admin', adminRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    error: err.message || 'Internal server error occurred.'
  });
});

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: `Endpoint ${req.originalUrl} not found on Riyadvi backend server.`
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Riyadvi Software Technologies Backend API running on http://0.0.0.0:${PORT}`);
  console.log(`📊 Admin API accessible at http://0.0.0.0:${PORT}/api/admin/stats`);
});
