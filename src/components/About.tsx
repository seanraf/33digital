
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-studio-muted/10 py-24">
      <div className="section-container">
        {/* Our Positioning Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">We're not advisors, we're co-builders.</h2>
          <p className="text-lg text-gray-300 mb-6">
            At 33 Digital, we stake our time, energy, and expertise into every company we back.
            We show up like co-founders, working alongside early-stage teams to move faster, think smarter, 
            and build businesses designed for self-sustaining growth.
          </p>
          <p className="text-lg text-gray-300">
            Our specialty is product-led growth — blending strategy, design, development, 
            and go-to-market execution to build products that acquire, convert, 
            and retain customers naturally.
          </p>
        </div>

        <div className="separator"></div>

        {/* How We Work Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-studio-muted/10 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Product-Led Coaching</h3>
              <p className="text-gray-300">
                For founders who want strategic clarity and sharp executional support, 
                we act as hands-on product coaches. We help you define your roadmap, 
                sharpen your user journey, and unlock growth without the guesswork.
              </p>
            </div>
            <div className="bg-studio-muted/10 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Embedded Leadership</h3>
              <p className="text-gray-300">
                For ventures that need deeper partnership, we step in as fractional leaders, 
                embedding with your team to drive product direction, growth systems, 
                and operational excellence day to day.
              </p>
            </div>
          </div>
        </div>

        <div className="separator"></div>

        {/* Meet Sean Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Sean</h2>
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-studio-muted h-80 rounded-lg mb-4" aria-label="Sean, founder of 33 Digital, at the Austin studio"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 mb-6">
                I pursue mastery in digital product design, development, and distribution. 
                For over a decade, I've led product strategy and development for companies 
                like American Express, Spotify, and numerous high-growth startups.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                At Amex, I led research, design, and release of the Cash Back Rewards Overview 
                page for tens of millions of cardmembers. At Spotify, I managed over 100 ad campaigns 
                on desktop and mobile, delivering tens of millions of memorable impressions at a 4% engagement rate.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I've also brought ALL WORLD to market, a groundbreaking augmented reality app on iOS.
              </p>
              <p className="text-lg text-gray-300">
                Beyond building businesses, I am a certified meditation instructor and hold a 
                brown belt in Hapkido. Everything I do is about pursuing growth — personal, 
                professional, and for the founders we partner with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
