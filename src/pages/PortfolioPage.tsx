
import React from 'react';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Thesis from '@/components/Thesis';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-studio">
      <Navbar />
      <div className="pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="section-container">
          <h1 className="text-center mb-6">Our Portfolio</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-10">
            We work with founders we believe in, building tools, platforms, and products 
            that scale through systems, not brute force. Here are some of our recent collaborations:
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
