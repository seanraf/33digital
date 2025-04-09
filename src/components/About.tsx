
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="bg-studio-muted/10 py-24">
      <div className="section-container">
        {/* Our Positioning Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">We're not advisors, we're co-builders.</h2>
          <p className="text-lg text-gray-300 mb-6">
            At 33 Digital, we stake our time, energy, and expertise into every company we back.
            We show up like co-founders, working alongside early-stage teams to move faster, think smarter, 
            and build businesses designed for self-sustaining growth.
          </p>
          <p className="text-lg text-gray-300">
            Our specialty is product-led growth — blending strategy, design, development, 
            and go-to-market execution to build products that acquire, convert, 
            and retain customers naturally.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild className="bg-studio-accent hover:bg-studio-accent/90">
              <a href="mailto:hello@33d.co">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-16 bg-gray-800/50" />

        {/* How We Work Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-studio-muted/10 p-8 rounded-lg border border-gray-800 transition-transform hover:transform hover:scale-[1.02] hover:border-studio-accent/30">
              <h3 className="text-xl font-bold mb-4">Product-Led Coaching</h3>
              <p className="text-gray-300">
                For founders who want strategic clarity and sharp executional support, 
                we act as hands-on product coaches. We help you define your roadmap, 
                sharpen your user journey, and unlock growth without the guesswork.
              </p>
            </div>
            <div className="bg-studio-muted/10 p-8 rounded-lg border border-gray-800 transition-transform hover:transform hover:scale-[1.02] hover:border-studio-accent/30">
              <h3 className="text-xl font-bold mb-4">Embedded Leadership</h3>
              <p className="text-gray-300">
                For ventures that need deeper partnership, we step in as fractional leaders, 
                embedding with your team to drive product direction, growth systems, 
                and operational excellence day to day.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-gray-800/50" />

        {/* Our Values Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">What We Stand For</h2>
          <p className="text-lg text-gray-300 mb-10 text-center">
            The way we build matters as much as what we build. These are the values we carry into every partnership.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:mx-auto max-w-6xl values-container">
            <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20 md:col-span-1">
              <h3 className="text-xl font-bold mb-3 text-studio-accent">Grit</h3>
              <p className="text-gray-300">
                We are builders first. We know what it takes to launch, iterate, and win. Every challenge is an opportunity,
                and we look for founders who share the same relentless drive.
              </p>
            </div>

            <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20 md:col-span-1">
              <h3 className="text-xl font-bold mb-3 text-studio-accent">Agency</h3>
              <p className="text-gray-300">
                We believe in sovereign entrepreneurs — founders who take full control of their vision,
                their growth, and their independence.
              </p>
            </div>

            <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20 md:col-span-1">
              <h3 className="text-xl font-bold mb-3 text-studio-accent">Consciousness</h3>
              <p className="text-gray-300">
                Great products are designed with care. We build technology that enriches people's lives,
                not exploits them. If it doesn't empower users, we don't build it.
              </p>
            </div>
            <div className="md:col-span-3 flex justify-center gap-8">
              <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20 md:col-span-1">
                <h3 className="text-xl font-bold mb-3 text-studio-accent">Leverage</h3>
                <p className="text-gray-300">
                  The best businesses don't scale by brute force. They scale through smart systems and automation.
                  We build for leverage, so products grow themselves.
                </p>
              </div>

              <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20 md:col-span-1">
                <h3 className="text-xl font-bold mb-3 text-studio-accent">Service</h3>
                <p className="text-gray-300">
                  Great founders obsess over their customers. So do we. We help entrepreneurs build
                  something enduring by focusing relentlessly on the people they serve.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-gray-800/50" />

        {/* Meet Sean Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Meet Sean</h2>
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-studio-muted h-80 rounded-lg mb-4 overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/IMG_0085.png" 
                  alt="Sean, founder of 33 Digital, at the Austin studio"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 mb-6">
                I pursue mastery in digital product design, development, and distribution. 
                For over a decade, I've led product strategy and development for companies 
                like American Express, Spotify, and numerous high-growth startups.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                At Amex, I led research, design, and release of the Cash Back Rewards Overview 
                page for tens of millions of cardmembers. At Spotify, I managed over 100 ad campaigns 
                on desktop and mobile, delivering tens of millions of memorable impressions at a 4% engagement rate.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I've also brought ALL WORLD to market, a groundbreaking augmented reality app on iOS.
              </p>
              <p className="text-lg text-gray-300">
                Beyond building businesses, I am a certified meditation instructor and hold a 
                brown belt in Hapkido. Everything I do is about pursuing growth — personal, 
                professional, and for the founders we partner with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
