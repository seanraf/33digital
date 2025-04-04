
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Thesis from '@/components/Thesis';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-studio">
      <Helmet>
        <title>Our Work & Worldview | 33 Digital Portfolio & Venture Thesis</title>
        <meta name="description" content="Explore 33 Digital's portfolio and venture thesis. We back founders building AI-powered, community-first, and game-like digital products." />
      </Helmet>
      <Navbar />
      <div className="pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="section-container">
          <h1 className="text-center mb-6">Proof of Work and the Principles Behind It</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
            We do not chase trends. We build products and companies that align with our worldview.
          </p>
        </div>
      </div>
      <Thesis />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
