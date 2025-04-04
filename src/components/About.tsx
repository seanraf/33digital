
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
      description: "We are builders first. Every challenge is an opportunity."
    },
    {
      title: "Agency",
      description: "We back sovereign entrepreneurs. Own your vision and your future."
    },
    {
      title: "Consciousness",
      description: "Build with care. Enrich people, do not exploit them."
    },
    {
      title: "Leverage",
      description: "Smart systems, not brute force. Products that grow themselves."
    },
    {
      title: "Service",
      description: "Great founders obsess over their customers. So do we."
    }
  ];

  return (
    <section id="about" className="bg-studio-muted/20 py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Us</h2>
          <p className="text-lg text-gray-300 mb-6">
            We do not advise from the sidelines. We build alongside you.
            We stake real time, energy, and expertise into every company we partner with,
            showing up like co-founders to turn your vision into something real.
          </p>
          <p className="text-lg text-gray-300">
            Our specialty is product-led growth. We help founders find traction, 
            convert users, and build systems that grow themselves.
          </p>
        </div>

        <div className="separator"></div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-studio-muted/10 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Product-Led Coaching</h3>
              <p className="text-gray-300">
                We help founders focus their roadmap, clarify their thinking, 
                and make smart early-stage bets.
              </p>
            </div>
            <div className="bg-studio-muted/10 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-4">Embedded Leadership</h3>
              <p className="text-gray-300">
                We join your team directly as fractional leaders, rolling up our sleeves 
                to build momentum and scale your product.
              </p>
            </div>
          </div>
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

        <div className="separator"></div>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Sean</h2>
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-studio-muted h-80 rounded-lg mb-4" aria-label="Sean, founder of 33 Digital, at the Austin studio"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 mb-6">
                I pursue mastery in digital product design, development, and distribution.
                For over a decade, I have led product for American Express, Spotify, and breakout startups.
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
                <li>Led over 100 ad campaigns at Spotify, driving millions of high-engagement impressions.</li>
                <li>Shipped the Cash Back Rewards platform for AmericanExpress.com, reaching tens of millions of cardmembers.</li>
                <li>Launched ALL WORLD, an AR-powered storytelling app.</li>
                <li>Certified meditation instructor and a brown belt in Hapkido.</li>
              </ul>
              <p className="text-lg text-gray-300">
                At 33 Digital, I build alongside founders with the same energy I bring to my own ventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
