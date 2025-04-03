
import React from 'react';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Thesis from '@/components/Thesis';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-studio">
      <Navbar />
      <div className="pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="section-container">
          <h1 className="text-center mb-8">Our Portfolio</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
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
