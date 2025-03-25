
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import TrustSection from '@/components/TrustSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';
import PrescriptionAnalyzer from '@/components/PrescriptionAnalyzer';

const Index = () => {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        
        const element = document.querySelector(anchor.hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL without triggering a page reload
          history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <PrescriptionAnalyzer />
      </div>
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <TrustSection />
      <CallToAction />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
