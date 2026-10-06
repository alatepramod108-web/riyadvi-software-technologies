import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { CareersPage } from './pages/CareersPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { ContactPage } from './pages/ContactPage';
import { BusinessHealthCheckupPage } from './pages/BusinessHealthCheckupPage';
import { SoftwareProjectPlanningGuidePage } from './pages/SoftwareProjectPlanningGuidePage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string | undefined>(undefined);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenConsultation = (serviceTitle?: string) => {
    setSelectedServiceForConsultation(serviceTitle);
    setConsultationOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black">
      <ScrollToTop />
      
      {/* Main Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Page Routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenConsultation={() => handleOpenConsultation()} />} />
          
          {/* Services */}
          <Route path="/services" element={<ServicesPage onOpenConsultation={() => handleOpenConsultation()} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenConsultation={handleOpenConsultation} />} />

          {/* Portfolio & Case Studies */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<CaseStudyDetailPage onOpenConsultation={() => handleOpenConsultation()} />} />

          {/* Company */}
          <Route path="/about" element={<AboutPage onOpenConsultation={() => handleOpenConsultation()} />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostDetailPage />} />

          {/* Careers */}
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:slug" element={<JobDetailPage />} />

          {/* Contact & Leads */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/business-health-checkup" element={<BusinessHealthCheckupPage />} />
          <Route path="/software-project-planning-guide" element={<SoftwareProjectPlanningGuidePage />} />

          {/* Admin CRM */}
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={selectedServiceForConsultation}
      />
    </div>
  );
}

export default App;
