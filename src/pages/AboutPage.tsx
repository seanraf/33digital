
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
    <div className="min-h-screen bg-studio">
      <Helmet>
        <title>About 33 Digital | Austin's Venture & Product Studio for Founders</title>
        <meta name="description" content="We build founders as well as products. Learn how 33 Digital partners with startups to launch scalable, self-sustaining businesses." />
      </Helmet>
      <Navbar />
      <div className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-container">
          <h1 className="text-center mb-6">We build founders as well as products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            33 Digital is a venture and product studio for entrepreneurs who move fast, 
            think smarter, and build companies that scale.
          </p>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
