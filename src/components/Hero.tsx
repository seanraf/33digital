
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fade-up">
            We build digital products that<br />
            sell<br />
            themselves
          </h1>
          <p className="mt-6 text-xl text-gray-300 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            33 Digital is a venture and product studio based in Austin, Texas. We partner 
            with early-stage founders to launch scalable, self-sustaining businesses.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/portfolio" className="btn-primary px-8 py-3">
              See Our Work
            </Link>
            <a href="#thesis" className="btn-outline px-8 py-3">
              Read Our Thesis
            </a>
          </div>
        </div>

        <div className="separator"></div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl italic text-gray-300">
            "Partnering with 33 Digital doesn't buy us. It buys what your product becomes."
          </p>
          <p className="mt-8 text-lg text-gray-400">
            We don't just build apps. We help founders become unstoppable by turning early-stage 
            ideas into beautifully executed products that acquire, convert, and scale on their own.
          </p>
        </div>

        <div className="separator"></div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">The difference is how we work.</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              We stake sweat equity and deep product expertise into every company we back. 
              We're not consultants. We show up like co-founders.
            </p>
            <Link to="/about" className="inline-flex items-center text-studio-accent hover:underline">
              Read Our Approach <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
