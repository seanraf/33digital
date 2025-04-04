
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "TH!RST",
      description:
        "A next-generation beverage brand fusing community, culture, and commerce.",
      image: "/placeholder.svg",
    },
    {
      title: "Echo",
      description:
        "AI-powered community tools helping creators build deeper, high-trust spaces online.",
      image: "/placeholder.svg",
    },
    {
      title: "Everlink",
      description:
        "Smart tracking and logistics for high-value assets, powered by automation and AI.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Portfolio</h2>
          <p className="text-lg text-gray-300 text-center mb-10">
            We're proud to partner with founders who share our values and build products that align with our thesis. 
            Here's a look at what we've been working on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="aspect-video bg-studio-muted/20 rounded-t-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={`Logo of ${project.title}, a 33 Digital portfolio company`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-studio-muted/10 border border-gray-800 rounded-b-lg">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-300">
          <p className="text-lg italic">More coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
