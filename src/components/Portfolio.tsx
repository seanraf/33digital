
import React from "react";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "TH!RST",
      description:
        "A social marketplace helping the next generation of beauty founders launch and scale. We provided early-stage product strategy, design, and go-to-market leadership.",
      image: "/placeholder.svg",
    },
    {
      title: "Echo",
      description:
        "A web3-native voice messaging app focused on ambient connection. We supported Echo's zero-to-one launch with product leadership and system design.",
      image: "/placeholder.svg",
    },
    {
      title: "Everlink",
      description:
        "A modern, community-first tool for organizing and surfacing important links in shared networks. We helped Everlink go from concept to beta.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="aspect-video bg-studio-muted/20 rounded-t-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
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
        
        <div className="flex justify-center mt-16">
          <a href="#contact" className="btn-primary px-8 py-3 flex items-center">
            Work With Us <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
