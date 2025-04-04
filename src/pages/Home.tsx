
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-studio">
      <Helmet>
        <title>33 Digital | Venture Studio & Product Builders in Austin, Texas</title>
        <meta name="description" content="We build digital products that sell themselves. 33 Digital partners with founders to launch scalable, self-sustaining businesses. Based in Austin, Texas." />
      </Helmet>
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
