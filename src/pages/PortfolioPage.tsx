
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Thesis from '@/components/Thesis';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-studio pt-24">
      <Helmet>
        <title>Our Work & Worldview | 33 Digital Portfolio & Venture Thesis</title>
        <meta name="description" content="Explore 33 Digital's portfolio and venture thesis. We back founders building AI-powered, community-first, and game-like digital products." />
        <meta property="og:image" content="/lovable-uploads/33 Digital.png" />
        <meta name="twitter:image" content="/lovable-uploads/33 Digital.png" />
      </Helmet>
      <Navbar />
      <div className="pt-36 pb-8 md:pt-44 md:pb-12">
        <div className="section-container">
          <h1 className="text-center mb-6">Our Work and Worldview</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
            We don't just build apps. We build businesses that scale themselves.
            See how our thesis shapes the companies we support, and meet the founders we've bet on.
          </p>
        </div>
      </div>
      <Thesis />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
