
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type ThesisPoint = {
  title: string;
  shortDescription: string;
  fullDescription: string;
}

const ThesisCard = ({ thesis }: { thesis: ThesisPoint }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-studio-muted/10 rounded-lg p-8 border border-gray-800 hover:border-studio-accent/30 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">{thesis.title}</h3>
      <p className="text-gray-300 mb-6">{thesis.shortDescription}</p>
      
      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-gray-300">{thesis.fullDescription}</p>
        </div>
      )}
      
      <button 
        onClick={() => setExpanded(!expanded)} 
        className="inline-flex items-center text-studio-accent hover:underline"
      >
        {expanded ? "Show Less" : "Read Full Thesis"} 
        {expanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </button>
    </div>
  );
};

const Thesis = () => {
  const thesisPoints: ThesisPoint[] = [
    {
      title: "AI is an Equalizer",
      shortDescription:
        "AI is no longer a luxury for big tech. It's a force multiplier for small teams and ambitious founders.",
      fullDescription:
        "The most impactful AI products won't be tools for AI's sake. They'll be quiet engines for personalization, leverage, and growth—embedded into workflows and built for real-world use. The winners won't just deploy AI, they'll democratize it, putting enterprise-grade capabilities into the hands of creators, entrepreneurs, and everyday users.",
    },
    {
      title: "Social is Fragmenting",
      shortDescription:
        "The future of social is smaller, high-trust communities — not mass-market feeds.",
      fullDescription:
        "As mass social media platforms become more toxic and less fulfilling, users are retreating to smaller, more intimate spaces. The future of connection isn't about broadcasting to thousands but creating meaningful exchanges with dozens. We're backing founders who understand that community isn't just a marketing channel—it's the product itself.",
    },
    {
      title: "Games, Not Gimmicks",
      shortDescription:
        "What people crave are experiences that feel alive, not just points and streaks.",
      fullDescription:
        "The era of cheap gamification tricks is ending. Points, badges, and streaks have diminishing returns as users grow savvy to manipulation. True engagement comes from systems that enable mastery, autonomy, and purpose. We're investing in products that create genuine play states and progress narratives that users find inherently rewarding.",
    },
  ];

  return (
    <section id="thesis" className="py-24 bg-gradient-to-b from-studio-muted/5 to-studio">
      <div className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Thesis</h2>
          <p className="text-lg text-gray-300">
            33 Digital is a thesis-driven venture and product studio. 
            We invest sweat equity, expertise, and hands-on leadership into companies 
            that match our worldview. We work with founders building products that 
            sell themselves — businesses designed for compounding growth, not brute force.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {thesisPoints.map((thesis, index) => (
            <ThesisCard key={index} thesis={thesis} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thesis;
