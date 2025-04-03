
import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-studio">
      <Navbar />
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <h1 className="text-center mb-12">About Us</h1>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
