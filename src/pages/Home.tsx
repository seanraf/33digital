
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Thesis from '@/components/Thesis';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-studio">
      <Navbar />
      <Hero />
      <Portfolio />
      <Thesis />
      <Footer />
    </div>
  );
};

export default Home;
