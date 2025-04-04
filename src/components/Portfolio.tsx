
import React from "react";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "TH!RST",
      description:
        "Reimagining social entertainment for the new generation of creators and fans.",
      image: "/placeholder.svg",
    },
    {
      title: "Echo",
      description:
        "Building the future of participatory publishing and collective memory.",
      image: "/placeholder.svg",
    },
    {
      title: "Everlink",
      description:
        "Bringing peace of mind to physical assets through smart tracking and intelligent alerts.",
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
      </div>
    </section>
  );
};

export default Portfolio;
