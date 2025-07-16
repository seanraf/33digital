import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="bg-studio-muted/10 py-24">
      <div className="section-container">
        {/* Updated Positioning Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">We are not advisors. We are builders.</h2>
          <p className="text-lg text-gray-300 mb-6 text-center">
            33 Digital is the personal product incubator of Sean Raftery. We either build and launch original software ideas in-house or partner with founders at day zero to co-found new digital businesses.
          </p>
          <p className="text-lg text-gray-300 mb-6 text-center">
            We embed as co-founding operators with deep product, tech, and operational leadership to help early-stage teams go from idea to traction. Our specialty is identifying hidden growth levers across product development, marketing, and operations and turning them into repeatable, compounding systems that unlock sustainable growth.
          </p>
          <p className="text-lg text-gray-300 text-center">
            Whether it's architecting viral loops, using AI to unlock leverage, or building systems that scale community and trust, we help founders design businesses that grow themselves. We stake our time, skills, and energy into every startup we build.
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

        {/* Updated How We Work Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">How We Work</h2>
          {/* Body text removed as per copy doc */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Updated "How We Work" tile copy */}
            <div className="bg-studio-muted/10 p-8 rounded-lg border border-gray-800 transition-transform hover:transform hover:scale-[1.02] hover:border-studio-accent/30">
              <h3 className="text-xl font-bold mb-4">Product-Led Coaching</h3>
              <p className="text-gray-300">
                For founders who want strategic clarity and executional support, we act as hands-on product coaches. We're the mentor behind the scenes, quietly helping you find the smartest move, build the plan, and execute with discipline.
              </p>
            </div>
            <div className="bg-studio-muted/10 p-8 rounded-lg border border-gray-800 transition-transform hover:transform hover:scale-[1.02] hover:border-studio-accent/30">
              <h3 className="text-xl font-bold mb-4">Embedded Leadership</h3>
              <p className="text-gray-300">
                For ventures that need deeper partnership, we step in as co-founding leaders, embedding with your team to drive tech direction, product and growth systems, and operational excellence day to day.
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
            {/* Swapped title back to Grit and updated copy */}
            <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20 md:col-span-1">
              <h3 className="text-xl font-bold mb-3 text-studio-accent">Grit</h3>
              <p className="text-gray-300">
                  We are builders first. We know what it takes to launch, iterate, and win. The obstacle is usually the way, and we look for founders who embrace that same mentality.
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
                Great tech is designed mindfully. We build products that enrich people, not exploit them. If it doesn't empower users, we don't build it.
              </p>
            </div>
            <div className="md:col-span-3 md:flex md:justify-center gap-8">
              {/* Swapped title back to Leverage and updated copy */}
              <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20">
                <h3 className="text-xl font-bold mb-3 text-studio-accent">Leverage</h3>
                <p className="text-gray-300">
                  The best businesses don't scale by brute force. They use smart systems and automation. We build for leverage, so products grow themselves.
                </p>
              </div>

              <div className="bg-studio-muted/10 p-6 rounded-lg border border-gray-800 transition-all hover:border-studio-accent/50 hover:bg-studio-muted/20 mt-8 md:mt-0">
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

        {/* Updated Meet Sean Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Meet Sean</h2>
          <div className="md:flex items-start gap-10">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-studio-muted h-80 rounded-lg mb-4 overflow-hidden shadow-xl"> {/* Consider adjusting height if needed */}
                <img 
                  src="/lovable-uploads/IMG_0085.png" 
                  alt="Sean, founder of 33 Digital, at the Austin studio"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-300 mb-6">
                Sean is the founder and chief product lead at 33 Digital. Sean has spent his career pursuing mastery in digital product design, development, marketing, and distribution. For over 10 years, he's helped startups and global companies unlock the hidden systems that drive sustainable growth.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                His specialty is identifying hidden growth levers across product, marketing, and operations and turning them into compounding systems that drive traction, efficiency, and scale.
              </p>
              <h4 className="text-lg font-semibold text-gray-200 mb-3 mt-8">Selected Experience:</h4>
              {/* Ensured ul/li structure is correct */}
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Built HighRewards, a consumer rewards app in the cannabis space, growing to over 10,000 users with 1:1 virality from invites</li>
                <li>Led project management for over 100 ad campaigns on Spotify desktop and mobile, driving tens of millions of impressions with an average 4% engagement rate.</li>
                <li>Led research, design, and release of the Cash Back Rewards Overview page on AmericanExpress.com, reducing call center volume for tens of millions of cardmembers.</li>
                <li>Partnered with Greg Isenberg and Late Checkout to launch Crypto College, an 8-week cohort based course and community of 200+ paid members exploring the future of the internet.</li>
                <li>Brought ALL WORLD to market — a groundbreaking consumer augmented reality app for iOS.</li>
              </ul>
              <p className="text-lg text-gray-300">
                Sean is also a certified meditation instructor and a brown belt in the martial art Hapkido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;