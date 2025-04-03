
import React from "react";
import { ArrowRight } from "lucide-react";

const ValueCard = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="mb-8 animate-fade-up">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const About = () => {
  const values = [
    {
      title: "Grit",
      description: "We're builders first. We know what it takes to ship, iterate, and win."
    },
    {
      title: "Agency",
      description: "We back sovereign entrepreneurs—founders who own their path."
    },
    {
      title: "Consciousness",
      description: "Technology should enrich lives, not exploit them. If it doesn't make users better, we don't build it."
    },
    {
      title: "Leverage",
      description: "The best businesses scale through systems and product-led growth—not brute force."
    },
    {
      title: "Service",
      description: "We treat our founders the way great founders treat their customers: with humility, clarity, and care."
    }
  ];

  return (
    <section id="about" className="bg-studio-muted/20 py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Us</h2>
          <p className="text-lg text-gray-300 mb-6">
            We're not just advisors. We're builders who stake our time, energy, and product-led 
            expertise into every company we back. We show up like co-founders, helping teams 
            move faster, test smarter, and scale sustainably.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            We blend product strategy, design, go-to-market execution, and growth into one 
            focused mission: build products that sell themselves.
          </p>
          <p className="text-lg text-gray-300">
            If we believe in what you're building, we'll put real skin in the game to help make it work.
          </p>
        </div>

        <div className="separator"></div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <ValueCard key={value.title} title={value.title} description={value.description} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="btn-primary px-8 py-3 inline-flex items-center"
          >
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
