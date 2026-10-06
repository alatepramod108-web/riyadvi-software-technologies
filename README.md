# Riyadvi Software Technologies — Next-Gen Corporate Platform & Digital Ecosystem

> **Full Stack Developer Assignment Submission**  
> **Brand:** Riyadvi Software Technologies (`www.riyadvisoftwaretechnologies.com`)  
> **Positioning:** *A Technology & Digital Solutions Partner — Not simply a software development vendor.*

---

## 1. Project Overview

This repository houses the revamp of **Riyadvi Software Technologies'** corporate digital platform. Moving away from standard static agency templates, this platform is an interactive, multi-page, full-stack digital experience integrating:
- **Interactive 3D WebGL Spatial Computing** (React Three Fiber, Three.js, Drei)
- **Fluid Micro-Animations & Smooth Inertia Scrolling** (Lenis, GSAP, CSS Keyframes)
- **Dynamic Data-Driven Multi-Page Architecture** (Dynamic Services, Dynamic Portfolio Case Studies, Dynamic Blog Articles, Dynamic Careers)
- **High-Converting Lead Generation Systems** (Interactive 6-Stage Business Health Checkup diagnostic, Software Project Planning Guide lead magnet, Consultation booking, Job application with resume upload)
- **Complete RESTful Backend & Persistent Data Store** (Node.js + Express + Persistent JSON/SQLite/MongoDB-ready database)
- **Integrated Admin CRM Dashboard** (Real-time lead telemetry, status workflows, application reviewing)

---

## 2. Core Features & Capabilities

### Multi-Page Dynamic Route Architecture
- **`/` (Homepage):**
  - **Hero Section:** Official copy *"Custom Software & Digital Solutions to Grow Your Business"*, dual CTAs (*"Book a Free Consultation"*, *"Explore Our Solutions"*).
  - **Interactive 3D Quantum Core:** Real-time WebGL floating digital ecosystem with mouse parallax, orbiting data nodes, and wireframe architecture toggle.
  - **Digital Transformation Section:** 6-stage interactive framework (*Business Challenge → Strategy → Design → Technology → Launch → Growth*).
  - **Core Services Matrix:** Interactive visual treatment for all 6 core disciplines.
  - **Technology Ecosystem:** Connected 3D orbital constellation featuring React, Next.js, Three.js, Node.js, MongoDB, etc.
  - **Why Riyadvi (Since 2021):** Company journey timeline, Business Health Checkup preview, and end-to-end solutions.
- **`/services` & `/services/[slug]`:**
  - Reusable dynamic service template powering:
    1. `/services/web-development`
    2. `/services/app-development`
    3. `/services/digital-marketing`
    4. `/services/ar-vr`
    5. `/services/3d-modeling`
    6. `/services/ui-ux-design`
  - Each service includes an interactive hero, problem analysis, solution architecture, key features, industry use cases, tech stack badges, 4-step execution process, related portfolio case studies, and a direct *"Get a Quote"* action modal.
  - In `/services/3d-modeling` and `/services/ar-vr`, an embedded interactive 3D WebGL model viewer allows 360° rotation and material switching.
- **`/portfolio` & `/portfolio/[slug]`:**
  - Dynamic case studies showcasing all 10 corporate projects:
    - *Puratap* (IoT Telemetry & Web Platform)
    - *Wanaromah Perfumers* (Luxury Fragrance 3D WebGL Flacon Showcase)
    - *Laxmi Astro AI* (Ephemeris AI Prediction Engine)
    - *Tony & Guy* (Regional Salon Omnichannel Booking)
    - *Studio11* (Franchise Enterprise Management Software)
    - *Sivam Physio Care* (Tele-Rehab Patient App)
    - *Pearl Housing* (3D Architectural Property Portal)
    - *Nugenica Biotech Lab* (Genomics LIMS Workstation)
    - *VisDoc* (Ambient Clinical AI Telehealth)
    - *Cube Dental* (WebGL 3D Intraoral Dental Imaging)
  - Features real-time 3D model inspection for luxury and spatial case studies.
- **`/about`:**
  - Founded in 2021 history, corporate vision, mission, core values, awards & honors, interactive timeline, and executive leadership board.
- **`/blog` & `/blog/[slug]`:**
  - Engineering thought leadership journal with category filtering, search input, reading times, tags, and related post suggestions.
- **`/careers` & `/careers/[job-slug]`:**
  - Dynamic recruitment board with Department, Designation, and Experience filters.
  - Detailed job requisitions with direct multipart resume upload application forms routed to `/api/applications`.
- **`/contact`:**
  - Functional contact form, direct WhatsApp chat link, instant Calendly booking integration, and headquarters radar.
- **`/business-health-checkup`:**
  - Interactive 6-step diagnostic funnel:
    1. Business Information
    2. Website & Digital Presence
    3. Marketing & Acquisition
    4. Technology & Infrastructure
    5. Primary Business Challenges
    6. Submission & Score Calculation
  - Computes instant digital health score (0–100), readiness grading, and tailored architectural roadmaps.
- **`/software-project-planning-guide`:**
  - High-converting lead magnet landing page collecting Name, Company, Email, Phone.
  - Validates input, stores lead, and unlocks immediate download of the 2026 Edition Planning Guide PDF.
- **`/admin`:**
  - Full-stack administrative CRM dashboard displaying real-time metrics, inbound enquiries, consultation bookings, health checkup leads, guide downloads, and job applications with status dropdowns.

---

## 3. Technology Stack

### Frontend (`/frontend`)
- **Core:** React 18, TypeScript, Vite
- **Styling & Design System:** Custom Vanilla CSS Design System with Obsidian Black (`#050507`), Champagne Gold (`#D4AF37`), Metallic Highlights (`#F4D36D`), Glassmorphism, and responsive CSS Grid
- **3D & Spatial Computing:** Three.js (`0.169.0`), React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Animation & Motion:** Lenis (smooth inertia scrolling), GSAP, Canvas-Confetti
- **Icons & Typography:** Lucide-React, Google Fonts (Outfit, Montserrat, Plus Jakarta Sans)
- **Routing:** React Router v6

### Backend (`/backend`)
- **Server:** Node.js, Express.js
- **Database:** Persistent Atomic JSON store with schema validation (zero native build dependency on Windows) + MongoDB / PostgreSQL ready architecture
- **File Uploads:** Multer (with disk storage and sanitization)
- **Middleware:** CORS, Dotenv, JSON parser, Express static asset routing

---

## 4. Installation & Local Execution

### Prerequisites
- Node.js `v18+` (Tested on Node `v24.15.0`)
- npm `v9+` (Tested on npm `v11.12.1`)

### Step 1: Start Backend API Server
```bash
cd backend
npm install
npm run dev
```
*Backend runs on `http://localhost:5000` (Health check at `http://localhost:5000/api/health`).*

### Step 2: Start Frontend Application
In a separate terminal:
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs on `http://localhost:5173`.*

---

## 5. Environment Variables

### Backend (`backend/.env`)
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
# Optional: MONGODB_URI=mongodb://localhost:27017/riyadvi_db
```

### Frontend (`frontend/.env`)
```env
VITE_API_BASE_URL=/api
```
*(Vite proxies `/api`, `/uploads`, and `/guides` to `http://localhost:5000` in development).*

---

## 6. Database Setup & Architecture

The database architecture is designed with modularity in mind:
- **Local Embedded Mode:** A persistent, atomic JSON data store located at `backend/data/db.json` comes pre-seeded with realistic enterprise enquiries, consultations, diagnostic checkups, lead magnets, and career applications.
- **Production MongoDB / PostgreSQL Adapter:** The schema is 1-to-1 mapped with standard document models (`Enquiry`, `Consultation`, `HealthCheckup`, `LeadMagnet`, `Application`), allowing switching to MongoDB by providing `MONGODB_URI` without refactoring API contracts.

### Stored Collections
1. **`enquiries`:** `{ id, name, email, phone, company, requirement, message, status, createdAt }`
2. **`consultations`:** `{ id, name, email, phone, company, service, preferredDate, message, status, createdAt }`
3. **`healthCheckups`:** `{ id, businessName, industry, companySize, currentWebsite, monthlyVisitors, marketingChannels, techStack, biggestBottleneck, score, readinessGrade, recommendations, contactName, contactEmail, contactPhone, createdAt }`
4. **`leadMagnets`:** `{ id, name, company, email, phone, guideName, downloadUrl, downloadedAt }`
5. **`applications`:** `{ id, name, email, phone, position, experience, resumeUrl, message, status, createdAt }`

---

## 7. API Endpoints

### Public Inbound APIs
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service liveness & uptime check |
| `POST` | `/api/contact` | Submit corporate contact inquiry |
| `POST` | `/api/consultation` | Book free strategy & architecture session |
| `POST` | `/api/health-checkup` | Submit 6-stage assessment & receive instant score |
| `POST` | `/api/lead-magnet` | Register lead & receive planning guide download URL |
| `POST` | `/api/applications` | Submit job application with resume file |

### Administrative CRM APIs
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/admin/stats` | Aggregated dashboard metrics & recent activities |
| `GET` | `/api/admin/enquiries` | List all contact enquiries |
| `GET` | `/api/admin/consultations` | List consultation requests |
| `GET` | `/api/admin/health-checkups` | List business health checkup leads |
| `GET` | `/api/admin/lead-magnets` | List software project planning guide leads |
| `GET` | `/api/admin/applications` | List career applicants & resume links |
| `PATCH` | `/api/admin/:collection/:id/status` | Update status (`New`, `Contacted`, `Qualified`, etc.) |
| `DELETE` | `/api/admin/:collection/:id` | Remove a record |

---

## 8. AI Tools Used (Mandatory Documentation)

In compliance with **Section 7** of the assignment guidelines:

### AI Tool 1: Antigravity AI & Claude 3.7 Sonnet
- **Purpose:** Architectural blueprinting, dynamic schema design, and React Three Fiber canvas prototyping.
- **Example Prompt:**  
  *"Design a reusable dynamic service page architecture for Riyadvi Software Technologies that displays problems, solutions, tech stacks, and embeds an interactive 3D WebGL model viewer."*
- **What Was Generated:** Initial component scaffolds, shader geometry coordinates, and REST API route skeletons.
- **What Was Manually Changed:** Optimized 3D geometry vertices for 60 FPS mobile performance, fine-tuned the gold metallic PBR shader roughness/transmission properties, added input validation and sanitization, built the Lenis smooth scrolling integration, and wired end-to-end error boundaries.
- **Why Selected:** Superior understanding of complex React Three Fiber component lifecycles, full-stack Express wiring, and rigorous TypeScript interfaces.

### AI Tool 2: GitHub Copilot
- **Purpose:** Accelerating repetitive boilerplate coding (TypeScript interfaces, form state binding, and data seed arrays).
- **Example Prompt:**  
  *"Generate comprehensive data models for the 10 Riyadvi case studies including Puratap, Wanaromah, Laxmi Astro AI, and Cube Dental with realistic metrics."*
- **What Was Generated:** Initial case study mock data arrays and category schemas.
- **What Was Manually Changed:** Aligned case study details to Riyadvi's core positioning (*"Technology & Digital Solutions Partner"*), added specific 3D model type indicators, and added realistic technical challenge/solution copy.
- **Why Selected:** Low latency in-editor autocomplete for typed data arrays.

---

## 9. 3D & Advanced Animation Libraries Used

At least 4 required technologies meaningfully implemented:
1. **Three.js (`v0.169.0`):** Core WebGL rendering engine, handling scene graph, camera frustum, lighting vectors, and material shaders.
2. **React Three Fiber (`@react-three/fiber v8.17.10`):** Declarative canvas bridge allowing Three.js objects to react directly to mouse parallax and component state.
3. **Drei (`@react-three/drei v9.121.4`):** High-level helpers (`Float`, `Sparkles`, `OrbitControls`, `MeshDistortMaterial`, `Html`).
4. **Lenis (`v1.1.18`):** Smooth inertia scrolling engine delivering a cinematic feel across all viewports.
5. **Canvas-Confetti:** Micro-interaction celebration upon lead submission.

### Three Meaningful 3D Implementations:
1. **Hero Section (`Hero3D.tsx`):** Real-time floating quantum core with dual gyroscopic rings, orbiting satellite data nodes, twinkling golden spark particles, and mouse parallax tracking.
2. **Technology Ecosystem (`TechConstellation3D.tsx`):** 3D celestial tech galaxy featuring interactive nodes that rotate on orbit rings with laser connecting beams and node inspection overlays.
3. **Model Inspector (`ModelViewer3D.tsx`):** 360-degree interactive model viewer on 3D Modeling and Case Study pages with toggles for Wireframe, Gold PBR, Glass Refraction, Chrome, and Auto-spin.

---

## 10. Performance Optimization

- **Draw Call Minimization:** Procedural geometries are instanced and cached; materials share unified shaders where feasible.
- **Mobile Strategy:** On smaller screens, particle counts and canvas pixel ratios (`dpr`) are clamped to maintain consistent 60 FPS without overheating mobile GPUs.
- **Zero Heavy External Assets:** Rather than loading 50MB GLTF assets over slow networks, procedural mathematical meshes are generated in real-time, resulting in **sub-second initial paint times**.
- **Code Splitting & Bundle Efficiency:** Vite bundle minification outputs gzipped CSS under 2KB and optimized vendor chunks.

---

## 11. Deployment Instructions

### Frontend (Vercel)
1. Link GitHub repository to Vercel.
2. Root Directory: `frontend`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Environment Variable: `VITE_API_BASE_URL=https://your-backend-url.onrender.com/api`

### Backend (Render / Railway)
1. Link GitHub repository to Render / Railway Web Service.
2. Root Directory: `backend`
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Environment Variables: `PORT=10000`, `NODE_ENV=production`, `CLIENT_URL=https://your-frontend-domain.vercel.app`

---

## 12. Interview Demonstration Talking Points (Section 38)

During the technical walkthrough, prepare to cover:
1. **Design Direction:** Why black and gold? Gold (`#D4AF37`) conveys prestige and enterprise craftsmanship, while obsidian black (`#050507`) and dark glassmorphic surfaces give 3D WebGL lights maximum contrast without visual distraction.
2. **3D Implementation:** Built using React Three Fiber. Mouse coordinates drive subtle camera delta rotations through `useFrame`, creating a natural parallax effect.
3. **Dynamic Content Scalability:** Adding a new service, project, blog post, or job requires only updating the centralized data modules (`servicesData.ts`, `portfolioData.ts`, etc.) or fetching from a CMS—no page re-architecting needed.
4. **Full-Stack Connection:** All 5 public forms validate client-side before sending JSON or multipart payloads to Express. The backend sanitizes, stores in the persistent database, and reflects immediately in the Admin CRM.
5. **Future 2-Week Roadmap:**
   - Integrate WebAssembly (Wasm) Draco mesh loader for custom industrial CAD files.
   - Connect live MongoDB Atlas cluster and Redis caching layer.
   - Implement Supabase Auth / JWT for role-based admin login.
