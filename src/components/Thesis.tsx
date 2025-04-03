
import React from "react";
import { ArrowRight } from "lucide-react";

const ThesisCard = ({ 
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
      <a 
        href="#" 
        className="inline-flex items-center text-studio-accent hover:underline"
      >
        Read Full Thesis <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const Thesis = () => {
  const thesisItems = [
    {
      title: "AI is an Equalizer",
      description: "The best AI products won't be tools for AI's sake. They'll be quiet engines for personalization, leverage, and growth—embedded into workflows and built for real-world use."
    },
    {
      title: "Social is Fragmenting",
      description: "Mass platforms are breaking down. The future belongs to intimate, high-trust communities—and the tools that power them."
    },
    {
      title: "Games, not Gamification",
      description: "Users are burned out on shallow engagement. We back experiences built on intrinsic motivation, expression, and real progress—whether playful or productive."
    }
  ];

  return (
    <section id="thesis" className="bg-studio-muted/10 py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">What we believe—and where we bet.</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're a thesis-driven studio. We look for ideas that align with how we 
            believe the world is changing, and back founders building toward those futures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {thesisItems.map((item, index) => (
            <ThesisCard 
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thesis;
