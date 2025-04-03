
import React from "react";
import { ArrowRight } from "lucide-react";

const PortfolioItem = ({ 
  title, 
  description, 
  index 
}: { 
  title: string; 
  description: string; 
  index: number;
}) => {
  return (
    <div 
      className="card animate-fade-up" 
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
    </div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "TH!RST",
      description: "A social marketplace helping the next generation of beauty founders launch and scale. We provided early-stage product strategy, design, and go-to-market leadership."
    },
    {
      title: "Echo",
      description: "A web3-native voice messaging app focused on ambient connection. We supported Echo's zero-to-one launch with product leadership and system design."
    },
    {
      title: "Everlink",
      description: "A modern, community-first tool for organizing and surfacing important links in shared networks. We helped Everlink go from concept to beta."
    }
  ];

  return (
    <section id="portfolio" className="bg-studio-muted/20 py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We work with founders we believe in, building tools, platforms, and products 
            that scale through systems, not brute force. Here are a few of our recent collaborations:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-flex items-center text-studio-accent hover:underline text-lg"
          >
            Work With Us <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
