
import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-muted/5 py-16 border-t border-gray-800">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            If you're a founder building something meaningful, we want to hear from you.
            Let's explore how we can help turn your vision into a self-sustaining business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center">
            <Button asChild size="lg" className="bg-studio-accent hover:bg-studio-accent/90 text-white w-full sm:w-auto">
              <a href="mailto:hello@33d.co" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>hello@33d.co</span>
              </a>
            </Button>
            
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <a 
                href="https://x.com/33digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-studio-accent transition-colors p-2 rounded-full hover:bg-white/5"
                aria-label="X (formerly Twitter)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/33digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-studio-accent transition-colors p-2 rounded-full hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Quick Links Section */}
        <div className="py-8 border-t border-gray-800/50 flex flex-col md:flex-row md:justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">About 33 Digital</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              33 Digital is a top venture studio and product studio based in Austin, Texas. 
              We partner with early-stage founders to build scalable, self-sustaining digital businesses.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Our Focus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              At 33 Digital, we specialize in building digital products that scale themselves 
              through product-led growth, AI-powered automation, and community-driven engagement.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center gap-1">
                  <ArrowRight className="h-3 w-3" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center gap-1">
                  <ArrowRight className="h-3 w-3" /> About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center gap-1">
                  <ArrowRight className="h-3 w-3" /> Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center gap-1">
                  <ArrowRight className="h-3 w-3" /> Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800/50 pt-8 mt-4">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} 33 Digital. All rights reserved.
          </p>
          <p className="text-center text-gray-600 text-xs mt-1">
            Venture Studio & Product Builders in Austin, Texas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
