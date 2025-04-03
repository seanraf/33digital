
import React from "react";
import { ArrowRight } from "lucide-react";

const Thesis = () => {
  const thesisPoints = [
    {
      title: "AI is an Equalizer",
      description:
        "The best AI products won't be tools for AI's sake. They'll be quiet engines for personalization, leverage, and growth—embedded into workflows and built for real-world use.",
      linkText: "Read Full Thesis",
      linkHref: "#",
    },
    {
      title: "Social is Fragmenting",
      description:
        "Mass platforms are breaking down. The future belongs to intimate, high-trust communities—and the tools that power them.",
      linkText: "Read Full Thesis",
      linkHref: "#",
    },
    {
      title: "Games, not Gamification",
      description:
        "Users are burned out on shallow engagement. We back experiences built on intrinsic motivation, expression, and real progress—whether playful or productive.",
      linkText: "Read Full Thesis",
      linkHref: "#",
    },
  ];

  return (
    <section id="thesis" className="py-24 bg-gradient-to-b from-studio-muted/5 to-studio">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What we believe—and where we bet.</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a thesis-driven studio. We look for ideas that align with how we believe 
            the world is changing, and back founders building toward those futures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {thesisPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-studio-muted/10 rounded-lg p-8 border border-gray-800 hover:border-studio-accent/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-300 mb-6">{point.description}</p>
              <a 
                href={point.linkHref} 
                className="inline-flex items-center text-studio-accent hover:underline"
              >
                {point.linkText} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thesis;
