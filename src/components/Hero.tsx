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
            33 Digital is a product incubator based in Austin, Texas. We partner with early-stage founders to co-create scalable, self-sustaining digital businesses.
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
              33 Digital is the personal product incubator of Sean Raftery. We either build and launch original software ideas in-house or partner with founders at day zero to co-found new digital businesses.
            </p>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              We embed as fractional operators with deep product, tech, and operational leadership to help early-stage teams go from idea to traction. Our specialty is identifying hidden growth levers across product development, marketing, and operations and turning them into repeatable, compounding systems that unlock sustainable growth.
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether it's architecting viral loops, using AI to unlock leverage, or building systems that scale community and trust, we help founders design digital businesses that grow themselves. We stake our time, skills, and energy into every startup we build.
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
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            At 33 Digital, we build digital products that scale themselves. We embed alongside early-stage founders as product and technical co-founders, helping turn ambitious ideas into self-sustaining businesses. Whether it's embedding AI to multiply output, designing products that grow through community, or building game-like systems that keep users coming back, we help founders build momentum from day one.
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            We're actively looking to partner with founders building in strategically and personally relevant arenas, those aligned with our core theses around AI, community, and engagement. 33 Digital is a world-class incubator of talent and products, built for founders with conviction, grit, and clarity of purpose.
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