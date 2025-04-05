
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, ArrowRight, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-muted/5 py-20 border-t border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Contact Info */}
          <div className="md:border-r md:border-gray-800 md:pr-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              If you're a founder building something meaningful, we want to hear from you.
              Let's explore how we can help turn your vision into a self-sustaining business.
            </p>
            
            <div className="flex flex-col space-y-4">
              <Button asChild className="bg-studio-accent hover:bg-studio-accent/90 text-white w-full md:w-auto">
                <a href="mailto:hello@33d.co">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <div className="flex items-center space-x-6 mt-4 pt-2">
                <a 
                  href="https://twitter.com/33digital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-studio-accent transition-colors"
                  aria-label="Twitter/X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/33digital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-studio-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center space-x-2 text-gray-300 mb-2">
                <MapPin className="h-4 w-4 text-studio-accent" />
                <span>Austin, Texas</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-studio-accent" />
                <a href="mailto:hello@33d.co" className="hover:text-studio-accent transition-colors">
                  hello@33d.co
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: About 33 Digital */}
          <div className="md:px-8">
            <h2 className="text-2xl font-bold mb-6">About 33 Digital</h2>
            <p className="text-gray-300 mb-6">
              33 Digital is a top venture studio and product studio based in Austin, Texas. 
              We partner with early-stage founders to build scalable, self-sustaining digital businesses. 
              Whether you are part of the Austin startup community or building globally, 
              we help turn ambitious ideas into products that sell themselves. 
              Combining Silicon Valley ideas with Texas-sized ambition, we are helping 
              to shape the next generation of innovation studios and founder studios.
            </p>
          </div>
          
          {/* Column 3: Our Focus */}
          <div className="md:border-l md:border-gray-800 md:pl-8">
            <h2 className="text-2xl font-bold mb-6">Our Focus</h2>
            <p className="text-gray-300 mb-6">
              At 33 Digital, we specialize in building digital products that scale themselves 
              through product-led growth, AI-powered automation, and community-driven engagement. 
              We work with startups at the earliest stages, bringing our expertise in tech innovation, 
              startup strategy, and venture building to accelerate growth. As part of Austin's fast-growing 
              ecosystem of startup factories and venture studios, we help founders turn provocative ideas 
              into self-sustaining businesses that thrive in any market.
            </p>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-3 w-3" /> Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-3 w-3" /> About
                </Link>
                <Link to="/portfolio" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-3 w-3" /> Portfolio
                </Link>
                <Link to="/blog" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-3 w-3" /> Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} 33 Digital. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Venture Studio & Product Builders in Austin, Texas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
