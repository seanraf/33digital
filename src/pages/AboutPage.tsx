
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-studio pt-24">
      <Helmet>
        <title>About 33 Digital | Austin's Venture & Product Studio for Founders</title>
        <meta name="description" content="We build founders as well as products. Learn how 33 Digital partners with startups to launch scalable, self-sustaining businesses." />
      </Helmet>
      <Navbar />
      <div className="pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Who We Are</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
            33 Digital is a thesis-driven venture and product studio based in Austin, Texas.
            We partner with early-stage founders to build digital products that scale themselves.
          </p>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
