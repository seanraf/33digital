
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Updated Hero Section Copy */}
          <h1 className="mb-4">
            We build digital products that <span className="text-studio-accent">sell themselves</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            33 Digital is a venture and product studio based in Austin, Texas. We partner with early-stage founders to launch scalable, self-sustaining businesses.
          </p>
           <p className="mt-4 text-lg text-gray-300">
             Partnering with 33 Digital is an investment in what your product becomes.
           </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/about" className="btn-primary px-8 py-3">
              See How We Work
            </Link>
          </div>
        </div>

        <div className="separator"></div>

        <div className="max-w-4xl mx-auto">
          {/* Updated Value Proposition Section Copy */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">We are not advisors. We are builders.</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              At 33 Digital, we take a venture approach to building our portfolio by staking sweat equity and deep product expertise into every company we back. From zero to one and beyond, we help founders turn early ideas into digital products that attract users, convert customers, and grow naturally.
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              We specialize in uncovering hidden growth levers across tech, product, marketing, and operations and turning them into repeatable, compounding systems that unlock sustainable growth. Whether it’s using AI to multiply output, designing for community-powered growth, or crafting game-like systems that drive repeat engagement, we help founders build momentum from day one.
            </p>
            {/* Added About Us link */}
            <Link to="/about" className="btn-outline px-8 py-3 mt-6 inline-block"> {/* Added mt-6 and inline-block */}
              More About Us
            </Link>
          </div>
        </div>
        
        <div className="separator"></div>
        
        {/* Updated Our Work Section Copy */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Work</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            At 33 Digital, we build digital products that scale themselves. We embed as fractional operators alongside early-stage founders to turn ambitious ideas into self-sustaining businesses. Whether it's embedding AI to unlock leverage, designing products that grow through community, or building game-like systems that keep people coming back, we help founders build momentum from day one.
          </p>
          {/* Added Portfolio link */}
          <Link to="/portfolio" className="btn-outline px-8 py-3">
            View Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
