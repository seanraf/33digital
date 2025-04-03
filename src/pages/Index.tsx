
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Thesis from '@/components/Thesis';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-studio">
      <Navbar />
      <Hero />
      <Portfolio />
      <Thesis />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
