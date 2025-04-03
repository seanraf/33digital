
import React from 'react';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-studio">
      <Navbar />
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <h1 className="text-center mb-12">Our Portfolio</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16">
            We work with founders we believe in, building tools, platforms, and products 
            that scale through systems, not brute force. Here are some of our recent collaborations:
          </p>
        </div>
      </div>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
